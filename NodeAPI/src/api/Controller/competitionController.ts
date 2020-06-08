import { NextFunction, Request, Response } from "express";
import { getRepository, getConnection } from "typeorm";
import { Competition } from "../../entity/Competition";
import { publishToCompetitionExchange } from "../../services/MqService";
import CompetitionService from "../../services/TypeOrmServices/CompetitionService";
import { Race } from "../../entity/Race";
import { RaceResult } from "../../entity/RaceResult";
import { Athlete } from "../../entity/Athlete";
import { resolveSoa } from "dns";

class CompetitionController {
  constructor() {}

  async getSingleCompetition(req: Request, res: any) {
    const competition = await CompetitionService.getOne(
      req.params.competitionId
    );

    res.status(200).json(competition);
  }

  async getSingleCompetitionWithRaces(req: Request, res: Response) {
    try {
      let result = await getRepository(Competition).findOne({
        where: { Id: req.params.competitionId },
        join: {
          alias: "competition",
          leftJoinAndSelect: {
            races: "competition.races",
            RaceResult: "races.raceResults",
            athletes: "RaceResult.athletes",
          },
        },
      });
      if (!result)
        throw { message: "No Competition Found", code: "NO_COMPETITION_FOUND" };
      res.status(200).json(result);
    } catch (error) {
      res.json({ message: error.message, code: error.code });
    }
  }

  async getCompetitionFull(req, res) {
    let result = await getRepository(Competition).findOne({
      where: { Id: req.params.competitionId },
      join: {
        alias: "competition",
        leftJoinAndSelect: {
          races: "competition.races",
          RaceResult: "races.raceResults",
          athletes: "RaceResult.athletes",
          user: "athletes.user",
        },
      },
    });
    res.status(200).json(result);
  }

  async getCompetitionFullRaw(req, res) {
    let result = await getRepository(Competition)
      .createQueryBuilder("competition")
      .where("competition.id = :id", { id: req.params.competitionId })
      .leftJoinAndSelect("competition.races", "race")
      .leftJoinAndSelect("race.raceResults", "result")
      .leftJoinAndSelect("result.athletes", "athlete")
      .leftJoinAndSelect("athlete.user", "user")
      .getRawMany();
    res.status(200).json(result);
  }

  async getAllCompetitions(req: Request, res: Response) {
    console.time("getAllCompetitions");
    let result: Competition[] = await getRepository(Competition).find({
      where: req.body,
      relations: ["createdBy"],
    });
    console.timeEnd("getAllCompetitions");
    console.log(result);
    res.status(200).json(result);
  }

  // Save Competition From CSV

  async saveCompetitionFromCSV(req: any, res: Response, next: NextFunction) {
    let competition = await CompetitionService.transformCSVToCompetitionObject(
      req.file,
      req.body
    );
    let savedCompetition = await CompetitionService.save(competition);
    if (savedCompetition.error)
      return res.status(savedCompetition.statusCode).json(savedCompetition);

    publishToCompetitionExchange(
      "event.competition.created",
      JSON.stringify({
        savedObject: savedCompetition.result.Id,
      })
    );
    res.json(savedCompetition.result);
  }

  // Save Competition From JSON
  async saveCompetitionFromJSON(req: any, res: Response) {
    let competitionFromJSON = Object.assign(new Competition(), req.body);

    let competitionToSave = new Competition(
      competitionFromJSON.place,
      competitionFromJSON.type,
      competitionFromJSON.title,
      competitionFromJSON.startDate,
      competitionFromJSON.endDate,
      competitionFromJSON.year
    );

    const savedCompetition = await getConnection().manager.save(
      competitionToSave
    );

    // // Save Competition
    competitionFromJSON.races.forEach(async (race) => {
      let raceToSave = new Race(race.distance);
      raceToSave.date = race.date;
      raceToSave.boatType = race.boatType;
      raceToSave.category = race.category;
      raceToSave.competitionRound = race.competitionRound;
      raceToSave.sex = race.sex;
      raceToSave.time = race.time;
      raceToSave.competition = savedCompetition;
      // Save Race
      let savedRace = await getConnection().manager.save(raceToSave);

      race.raceResults.forEach(async (result) => {
        let resultToSave = new RaceResult(
          result.lane,
          result.rank,
          result.totalTime
        );
        resultToSave.race = savedRace;

        let promises = [];

        result.athletes.forEach((athlete) => {
          let athleteToSave = new Athlete(
            athlete.Name.toUpperCase().replace(",", ""),
            athlete.birthDate,
            athlete.country
          );
          promises.push(getConnection().manager.save(athleteToSave));
        });

        Promise.all(promises).then(async (values) => {
          resultToSave.athletes = values;
          const savedResult = await getConnection().manager.save(resultToSave);
        });
      });
    });


    publishToCompetitionExchange(
      "event.competition.created",
      JSON.stringify({
        savedObject: savedCompetition.Id,
      })
    );
    res.json(savedCompetition.Id);
  }

  // Returns JSON from CSV
  async getCompetitionFromCSV(req: any, res: Response, next: NextFunction) {
    const competition = await CompetitionService.transformCSVToCompetitionObject(
      req.file,
      req.body
    );
    res.json(competition);
  }

  async removeCompetition(req: Request, res: Response) {
    CompetitionService.delete(req.params.id);
  }
}

export default new CompetitionController();

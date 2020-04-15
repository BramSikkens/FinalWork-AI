import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { Competition } from "../../entity/Competition";
import { Race } from "../../entity/Race";
import { } from "../../services/MqService.js";

export async function createNewRace(req: Request, res: Response) {
  try {
    const getCompetition: Competition = await getRepository(
      Competition
    ).findOne({
      where: { competitionId: req.params.competitionId },
    });

    const newRace: Race = new Race();
    newRace.category = req.body.category;
    newRace.boatType = req.body.boatType;
    newRace.date = req.body.date;
    newRace.distance = req.body.distance;
    newRace.sex = req.body.sex;
    newRace.competition = getCompetition;

    try {
      let result: Race = await getConnection().manager.save(newRace);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  } catch (error) {
    res.json("Could not find competition");
  }
}

export async function getAllRaces(req: Request, res: Response) {
  let result = await getRepository(Race).find({
    relations: ["raceResults"],
  });
  res.status(200).json(result);
}

export async function getSingleRace(req: Request, res: Response) {
  let result = await getRepository(Race).find({
    where: { raceId: req.params.raceId },
  });
  res.status(200).json(result);
}

export async function deleteRace(req: Request, res: Response) {
  let result = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Race)
    .where("raceId = :id", { id: req.params.raceId });
  res.status(204);
}

export async function getRacesFromAthlete(req, res) {
  const result = await getConnection().manager.query(
    `SELECT
    Title,
    Type,
    place,
    race.BoatType,
    race.Category,
    race.competitionRound,
    race.distance,
    results.splitTime1,
    results.splitTime2,
    results.splitTime3,
    results.totalTime,
    results.rank,
    results.lane,
    results_athletes_athlete.athleteName
    FROM competition JOIN race ON competition.Id = race.competitionId JOIN results ON race.Id = results.raceId JOIN results_athletes_athlete ON results.Id = results_athletes_athlete.resultsId WHERE results_athletes_athlete.athleteName = ?`,
    ["KUJAWSKI MARIUSZ"]
  );

  res.json(result);
}

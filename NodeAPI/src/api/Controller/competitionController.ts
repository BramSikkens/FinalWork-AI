import date from "date-and-time";
import e, { NextFunction, Request, Response } from "express";
import { findIndex } from "lodash";
import { getConnection, getRepository, InsertResult } from "typeorm";
import { Athlete } from "../../entity/Athlete";
import { Competition } from "../../entity/Competition";
import { Race } from "../../entity/Race";
import { RaceResult } from "../../entity/RaceResult";
import { ICompetition } from "../../interfaces/ICompetition";

export async function createCompetition(req: any, res: any) {
  let values: ICompetition[] = [];
  // Get data from request
  req.body.map((singleCompetition: ICompetition) => {
    values.push({
      place: singleCompetition.place,
      type: singleCompetition.type,
      year: singleCompetition.year,
      title: singleCompetition.title,
      startDate: singleCompetition.startDate,
      endDate: singleCompetition.endDate,
    });
  });

  let result: InsertResult = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Competition)
    .values(values)
    .execute();

  // // Create a Rabbit competition.event.create message
  // publishToCompetitionExchange(
  //   "event.competition.created",
  //   JSON.stringify(returnObjectArray)
  // );
  res.status(201);
  res.json(result);
}

export async function getSingleCompetition(req: Request, res: any) {
  let result = await getRepository(Competition).find({
    where: { competitionId: req.params.competitionId },
  });
  res.status(200).json(result);
}

export async function getSingleCompetitionWithRaces(
  req: Request,
  res: Response
) {
  let result = await getRepository(Competition).findOne({
    where: { Id: req.params.competitionId },
    join: {
      alias: "competition",
      leftJoinAndSelect: {
        races: "competition.races",
        RaceResult: "races.raceResults",
      },
    },
  });
  res.status(200).json(result);
}

export async function deleteSingleCompetition(req: any, res: any) {
  let result = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Competition)
    .where("competitionId = :id", { id: req.params.competitionId });
}

export async function getAllCompetitions(req: Request, res: Response) {
  console.time("getAllCompetitions");
  let result: Competition[] = await getRepository(Competition).find();
  console.timeEnd("getAllCompetitions");
  res.status(200).json(result);
}

export async function deleteCompetiton(req: Request, res: Response) {
  let result = await getConnection()
    .createQueryBuilder()
    .delete()
    .from(Competition)
    .where("competitionId = :id", { id: req.params.competitionId });
  res.status(204);
}

export async function createCompetitionAndAddCSV(
  req: any,
  res: Response,
  next: NextFunction
) {
  let competitionYear: number =
    new Date(date.parse(req.body.startDate, "DD.MM.YYYY")).getFullYear() ||
    new Date(date.parse(req.body.startDate, "D.MM.YYYY")).getFullYear();

  console.log(competitionYear);

  // Constructor maken
  const competition = new Competition(
    req.body.place,
    req.body.type,
    req.body.title,
    req.body.startDate,
    req.body.endDate,
    competitionYear
  );

  const csv = require("csvtojson");
  let csvToJson = await csv({
    delimiter: ";",
  }).fromString(req.file.buffer.toString("utf-8"));

  let uniqueRaces: Race[] = [];
  let uniqueResults: RaceResult[] = [];
  csvToJson.forEach((race) => {
    const newRace: Race = new Race(race.distance);
    newRace.time = race.Time;
    newRace.sex = "MALE"; // enum gaat niet in ctor
    newRace.boatType = "K2"; // enum gaat niet in ctor
    newRace.category = "SENIOR"; // enum gaat niet in ctor
    newRace.competitionRound = race["Competition Round"];
    newRace.date = race.Date;

    let NewAthletes: Athlete[] = [];
    let athletes = race.athletes.split("+");
    athletes.forEach((athleteName) => {
      NewAthletes.push(new Athlete(athleteName, "", race.Country));
    });

    // Constructor maken
    const newResult: RaceResult = new RaceResult(
      race.Lane,
      race["Final Rank"],
      race["split time 1"],
      race["split time 2"],
      race["split time 3"],
      race["Total Time"]
    );
    newResult.time = race.Time;
    newResult.athletes = NewAthletes;

    if (findIndex(uniqueRaces, newRace) === -1) {
      uniqueRaces.push(newRace);
    }

    if (findIndex(uniqueResults, newResult) === -1) {
      uniqueResults.push(newResult);
    }
  });

  uniqueRaces.forEach((race: Race) => {
    race.raceResults = uniqueResults.filter((result: RaceResult) => {
      return race.time === result.time;
    });
  });

  competition.races = uniqueRaces;
  csvToDb(competition);
  res.json(competition);
}

export async function getCompetitionFromCSV(
  req: any,
  res: Response,
  next: NextFunction
) {
  let competitionYear: number =
    new Date(date.parse(req.body.startDate, "DD.MM.YYYY")).getFullYear() ||
    new Date(date.parse(req.body.startDate, "D.MM.YYYY")).getFullYear();

  console.log(competitionYear);

  // Constructor maken
  const competition = new Competition(
    req.body.place,
    req.body.type,
    req.body.title,
    req.body.startDate,
    req.body.endDate,
    competitionYear
  );

  const csv = require("csvtojson");
  let csvToJson = await csv({
    delimiter: ";",
  }).fromString(req.file.buffer.toString("utf-8"));

  let uniqueRaces: Race[] = [];
  let uniqueResults: RaceResult[] = [];
  csvToJson.forEach((race) => {
    const newRace: Race = new Race(race.distance);
    newRace.time = race.Time;
    newRace.sex = "MALE"; // enum gaat niet in ctor
    newRace.boatType = "K2"; // enum gaat niet in ctor
    newRace.category = "SENIOR"; // enum gaat niet in ctor
    newRace.competitionRound = race["Competition Round"];
    newRace.date = race.Date;

    let NewAthletes: Athlete[] = [];
    let athletes = race.athletes.split("+");
    athletes.forEach((athleteName) => {
      NewAthletes.push(new Athlete(athleteName, "", race.Country));
    });

    // Constructor maken
    const newResult: RaceResult = new RaceResult(
      race.Lane,
      race["Final Rank"],
      race["split time 1"],
      race["split time 2"],
      race["split time 3"],
      race["Total Time"]
    );
    newResult.time = race.Time;
    newResult.athletes = NewAthletes;

    if (findIndex(uniqueRaces, newRace) === -1) {
      uniqueRaces.push(newRace);
    }

    if (findIndex(uniqueResults, newResult) === -1) {
      uniqueResults.push(newResult);
    }
  });

  uniqueRaces.forEach((race: Race) => {
    race.raceResults = uniqueResults.filter((result: RaceResult) => {
      return race.time === result.time;
    });
  });

  competition.races = uniqueRaces;
  res.json(competition);
}

async function csvToDb(competition: Competition) {
  try {
    await getConnection().manager.save(competition);
  } catch (error) {
    console.log(error.message);
  }
}

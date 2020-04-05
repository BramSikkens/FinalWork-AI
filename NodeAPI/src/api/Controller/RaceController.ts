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
      where: { competitionId: req.params.competitionId }
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
    relations: ["raceTeams"]
  });
  res.status(200).json(result);
}

export async function getSingleRace(req: Request, res: Response) {
  let result = await getRepository(Race).find({
    where: { raceId: req.params.raceId }
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

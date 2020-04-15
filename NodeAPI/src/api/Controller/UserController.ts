import { Response, Request } from "express";
import { getRepository, getConnection, UpdateResult } from "typeorm";
import { User } from "../../entity/User";
import { Athlete } from "../../entity/Athlete";
import { readSync } from "fs";

export async function updateUser(req: Request, res: Response) {
  try {
    if (req.body.password) {
      req.body.password = require("bcrypt").hashSync(req.body.password, 10);
    }

    const UserToUpdate: UpdateResult = await getConnection()
      .createQueryBuilder()
      .update(User)
      .set(req.body)
      .where("id=:id", { id: req.params.id })
      .execute();

    res.json(UserToUpdate);
  } catch (error) {
    console.log(error);
  }
}

export async function getUser(req: Request, res: Response) {
  try {
    let result = await getRepository(User).find({
      where: { id: req.params.id }
    });

    res.status(200).json(result);
  } catch (error) {
    res.json(error);
  }
}

export async function addAthleteToUser(req: Request, res: Response) {
  try {
    // CHECK IF ATHLETE ALREADY IS ASSIGNED

    let user = await getRepository(User).findOne({
      where: { id: req.params.id },
      relations: ["athletes"]
    });

    let athlete = await getRepository(Athlete).findOne({
      where: { Name: req.params.athleteName },
      relations: ["user"]
    });

    if (athlete.user) {
      throw {
        message: "This Athlete already has an user",
        code: "ATHLETE_HAS_USER"
      };
    }

    athlete.user = user;
    let update = await getRepository(Athlete).save(athlete);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message, code: error.code });
  }
}

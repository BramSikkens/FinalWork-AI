import { Request, Response } from "express";
import { getConnection, getRepository, UpdateResult } from "typeorm";
import { Athlete } from "../../entity/Athlete";
import { User } from "../../entity/User";

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
      where: { id: req.params.id },
      relations: ["athlete"],
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
    });

    let athlete = await getRepository(Athlete).findOne({
      where: { Name: req.params.athleteName },
    });

    if (user.athlete) {
      throw {
        message: "This  already has an user",
        code: "ATHLETE_HAS_USER",
      };
    }

    user.athlete = athlete;
    let update = await getRepository(User).save(user);
    res.status(200).json(update);
  } catch (error) {
    res.status(400).json({ message: error.message, code: error.code });
  }
}

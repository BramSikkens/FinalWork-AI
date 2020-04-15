import { Response, Request } from "express";
import Athlete from "../Mongoose/Schema/Athlete";

export async function getAthleteAnalytics(req: Request, res: Response) {
  try {
    const athlete = await Athlete.findOne({ name: req.params.name });
    console.log(athlete);
    res.status(200).json(athlete);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}

import { Request, Response } from "express";
import mongooseService from "../../Services/Mongoose/mongooseService";
import Athlete from "../../Services/Mongoose/Schema/AthleteAnalyse";

class AthleteController {
  constructor() {}

  async getAthleteAnalytics(req: Request, res: Response) {
    try {
      const athlete = await Athlete.findOne({ name: req.params.name });
      console.log(athlete);
      res.status(200).json(athlete);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async returnAthleteAnalyseForCompetition(req: Request, res: Response) {
    try {
      const analyse = await mongooseService.getAthleteCompetitionAnalyse(
        req.params.name,
        req.params.competitionId
      );
      res.status(200).json(analyse);
    } catch (error) {
      console.log(error);
    }
  }

  async returnResultsOfAthlete(req: Request, res: Response) {
    try {
      const results = await mongooseService.getResultsOfAthlete(
        req.params.name
      );
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
    }
  }

  async returnAllAthleteResults(req: Request, res: Response) {
    console.log("ok");
    try {
      const results = await mongooseService.getallResults();
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AthleteController();

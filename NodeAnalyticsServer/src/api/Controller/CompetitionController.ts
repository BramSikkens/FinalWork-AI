import { Request, Response } from "express";
import mongooseService from "../../Services/Mongoose/mongooseService";

export class CompetitionController {
  constructor() {}
  async returnComeptitionAnalyse(req: Request, res: Response) {
    try {
      const competitionAnalyse = await mongooseService.getCompetitionAnalyse(
        req.params.id
      );
      res.status(200).json(competitionAnalyse);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new CompetitionController();

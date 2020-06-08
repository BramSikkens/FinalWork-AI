import { Request, Response } from "express";
import mongooseService from "../../Services/Mongoose/mongooseService";

class RaceAnalyseController {
  constructor() {}
  async returnRaceAnalyse(req: Request, res: Response) {
    try {
      const competitionAnalyse = await mongooseService.getRaceAnalyse(
        req.params.id
      );
      res.status(200).json(competitionAnalyse);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new RaceAnalyseController();

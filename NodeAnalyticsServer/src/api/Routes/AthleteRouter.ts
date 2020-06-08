import express = require("express");
const router = express.Router();
import AthleteController from "../Controller/AthleteController";

router.get("/results", AthleteController.returnAllAthleteResults);

router.get("/:name", AthleteController.getAthleteAnalytics);
router.get(
  "/:name/competition/:competitionId",
  AthleteController.returnAthleteAnalyseForCompetition
);

router.get("/:name/results", AthleteController.returnResultsOfAthlete);

export = router;

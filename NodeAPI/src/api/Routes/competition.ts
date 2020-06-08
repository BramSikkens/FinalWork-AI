import express = require("express");
const router = express.Router();
const multer = require("multer");
import CompetitionController from "../Controller/competitionController";

router.get("/", CompetitionController.getAllCompetitions);
router.get("/:competitionId", CompetitionController.getSingleCompetition);
router.get(
  "/:competitionId/races",
  CompetitionController.getSingleCompetitionWithRaces
);
router.get("/:competitionId/full", CompetitionController.getCompetitionFull);
router.get(
  "/:competitionId/full/raw",
  CompetitionController.getCompetitionFullRaw
);

router.delete("/:id", CompetitionController.removeCompetition);

router.post("/json/save", CompetitionController.saveCompetitionFromJSON);

router.post(
  "/races/csv",
  multer().single("csv"),
  CompetitionController.getCompetitionFromCSV
);
router.post(
  "/races/csv/save",
  multer().single("csv"),
  CompetitionController.saveCompetitionFromCSV
);

export = router;

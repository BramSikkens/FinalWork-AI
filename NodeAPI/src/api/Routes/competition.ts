import express = require("express");
const router = express.Router();
const multer = require("multer");

import {
  createCompetition,
  createCompetitionAndAddCSV,
  deleteSingleCompetition,
  getAllCompetitions,
  getSingleCompetition,
  getSingleCompetitionWithRaces,
  getCompetitionFromCSV,
  getCompetitionFull,
  getCompetitionFullRaw
} from "../Controller/competitionController";
// import { addRaceToCompetiton } from "../Controller/RaceController";

router.get("/", getAllCompetitions);

router.get("/:competitionId", getSingleCompetition);

router.get("/:competitionId/races", getSingleCompetitionWithRaces);

router.get("/:competitionId/full", getCompetitionFull);

router.get("/:competitionId/full/raw", getCompetitionFullRaw);
router.post("/", createCompetition);

router.delete("/:competitionId", deleteSingleCompetition);

router.post("/races/csv", multer().single("csv"), getCompetitionFromCSV);
router.post(
  "/races/csv/save",
  multer().single("csv"),
  createCompetitionAndAddCSV
);

export = router;

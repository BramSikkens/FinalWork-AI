var express = require("express");
var router = express.Router();

import { createRace } from "../Controller/RaceController";

// verkrijg alle races
router.get("/", function(req, res) {
  res.send("GET Race");
});

// verkrijg enkele race
router.get("/:raceId", function(req, res) {});

//verkrijg alle races in competitie
router.get("/:raceId/competition/:competitionId", function(req, res) {});

//verkrijg alle races in competitie van een bepaald Team
router.get("/:raceId/competition/:competitionId/Team/:teamId", function(
  req,
  res
) {});

router.post("/", createRace);

router.delete("/", function(req, res) {
  res.send("POST Race");
});

router.put("/", function(req, res) {
  res.send("POST Race");
});

module.exports = router;

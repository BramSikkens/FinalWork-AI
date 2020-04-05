import express = require("express");
const router = express.Router();

import { getAllRaces,getSingleRace } from "../Controller/RaceController";

// verkrijg alle races
router.get("/", getAllRaces);

// verkrijg enkele race
router.get("/:raceId",getSingleRace);


router.delete("/", function(req, res) {
  res.send("POST Race");
});



export = router;

import express = require("express");
const router = express.Router();
import RaceAnalyseController from "../Controller/RaceAnalyseController";

router.get("/:id/analyse", RaceAnalyseController.returnRaceAnalyse);

export = router;

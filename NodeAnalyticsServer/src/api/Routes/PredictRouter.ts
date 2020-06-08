import express = require("express");
const router = express.Router();
import RaceAnalyseController from "../Controller/RaceAnalyseController";

router.get("/test", RaceAnalyseController.returnRaceAnalyse);

export = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = require("express");
var router = express.Router();
var AthleteController_1 = __importDefault(require("../Controller/AthleteController"));
router.get("/results", AthleteController_1.default.returnAllAthleteResults);
router.get("/:name", AthleteController_1.default.getAthleteAnalytics);
router.get("/:name/competition/:competitionId", AthleteController_1.default.returnAthleteAnalyseForCompetition);
router.get("/:name/results", AthleteController_1.default.returnResultsOfAthlete);
module.exports = router;
//# sourceMappingURL=AthleteRouter.js.map
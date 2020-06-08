"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = require("express");
var router = express.Router();
var RaceAnalyseController_1 = __importDefault(require("../Controller/RaceAnalyseController"));
router.get("/test", RaceAnalyseController_1.default.returnRaceAnalyse);
module.exports = router;
//# sourceMappingURL=PredictRouter.js.map
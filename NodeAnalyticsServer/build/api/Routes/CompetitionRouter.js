"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express = require("express");
var router = express.Router();
var CompetitionController_1 = __importDefault(require("../Controller/CompetitionController"));
router.get("/:id/analyse", CompetitionController_1.default.returnComeptitionAnalyse);
module.exports = router;
//# sourceMappingURL=CompetitionRouter.js.map
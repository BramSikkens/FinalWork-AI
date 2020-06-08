import express = require("express");
const router = express.Router();
import CompetitionController from "../Controller/CompetitionController";

router.get("/:id/analyse", CompetitionController.returnComeptitionAnalyse);

export = router;

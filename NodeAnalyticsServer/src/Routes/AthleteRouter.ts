import express = require("express");
const router = express.Router();
import { getAthleteAnalytics } from "../Controller/AthleteController";

router.get("/:name", getAthleteAnalytics);

export = router;

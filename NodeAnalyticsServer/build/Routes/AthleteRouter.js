"use strict";
var express = require("express");
var router = express.Router();
var AthleteController_1 = require("../Controller/AthleteController");
router.get("/:name", AthleteController_1.getAthleteAnalytics);
module.exports = router;
//# sourceMappingURL=AthleteRouter.js.map
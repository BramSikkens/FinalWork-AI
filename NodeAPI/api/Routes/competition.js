var express = require("express");
var router = express.Router();

import {
  createCompetition,
  getSingleCompetition,
  deleteSingleCompetition
} from "../Controller/competitionController";

// define the home page route
router.get("/", async function(req, res) {});

router.get("/:competitionId", getSingleCompetition);

router.post("/", createCompetition);

router.delete("/:competitionId", deleteSingleCompetition);

router.put("/:competitionId", function(req, res) {
  //When completed Send message to RabbitMQ
  //Exchange Competition
  //routing key: competition.event.update
  //Data: returned data from Mysql
  res.send("PUT Competition");
});

module.exports = router;

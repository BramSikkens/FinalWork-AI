var express = require("express");
var router = express.Router();

import {
  createTeam,
  getSingleTeam,
  deleteSingleTeam
} from "../Controller/TeamController";

router.get("/:teamId", getSingleTeam);

router.post("/", createTeam);

router.delete("/:teamId", deleteSingleTeam);

router.put("/", function(req, res) {
  res.send("POST Team");
});

module.exports = router;

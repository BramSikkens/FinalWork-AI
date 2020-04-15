import express = require("express");
const router = express.Router();

import {
  updateUser,
  getUser,
  addAthleteToUser,
} from "../Controller/UserController";

router.put("/:id", updateUser);
router.get("/:id", getUser);
router.put("/:id/athlete/:athleteName", addAthleteToUser);

export = router;

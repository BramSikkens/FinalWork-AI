import express = require("express");
import bodyParser = require("body-parser");
import { createConnection } from "typeorm";
import auth from "../src/api/Routes/auth";
import competition from "../src/api/Routes/competition";
import race from "../src/api/Routes/race";

import passport = require("./services/passport");
import cors = require("cors");

createConnection().then(async (connection) => {
  const app = express();
  const port = 3000;
  const router = express.Router();

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());

  app.use(passport.initialize());
  app.use(passport.session());

  // parse application/json
  app.use(bodyParser.json());
  app.use("/competition", competition);
  app.use("/race", race);
  app.use("/auth", auth);
  app.listen(port, () => console.log(`App Listening on Port ${port}`));
});

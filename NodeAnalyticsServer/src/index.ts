const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3003;
import mongoose = require("mongoose");
import AthleteRouter from "./api/Routes/AthleteRouter";
import CompetitionRouter from "./api/Routes/CompetitionRouter";
import RaceAnalyseRouter from "./api/Routes/RaceAnalyseRouter";
import RabbitMQService from "./Services/RabbitMQService";
import TestPredictor from "./MachineLearning/TesPredictor";

import cors = require("cors");
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://bramsikkens:Kajabra1!@cluster0-v1gpp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    TestPredictor.TrainModel();
    RabbitMQService.listenForCompetitionMessages();
    app.use(bodyParser.json());
    app.use("/athlete", AthleteRouter);
    app.use("/competition", CompetitionRouter);
    app.use("/race", RaceAnalyseRouter);
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  });

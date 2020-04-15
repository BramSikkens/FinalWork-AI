const express = require("express");
const app = express();
const http = require("http");
const bodyParser = require("body-parser");
const amqp = require("amqplib");
const port = 3003;
import mongoose = require("mongoose");

import setupCompetitionListener from "./Services/RabbitMQService";
import AthleteRouter from "./Routes/AthleteRouter";
import cors = require("cors");

app.use(cors());

mongoose
  .connect(
    "mongodb+srv://bramsikkens:Kajabra1!@cluster0-v1gpp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true",
    { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }
  )
  .then(() => {
    setupCompetitionListener();

    app.use(bodyParser.json());
    app.use("/athlete", AthleteRouter);
    app.listen(port, () =>
      console.log(`Example app listening at http://localhost:${port}`)
    );
  });

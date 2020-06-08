"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var port = 3003;
var mongoose = require("mongoose");
var AthleteRouter_1 = __importDefault(require("./api/Routes/AthleteRouter"));
var CompetitionRouter_1 = __importDefault(require("./api/Routes/CompetitionRouter"));
var RaceAnalyseRouter_1 = __importDefault(require("./api/Routes/RaceAnalyseRouter"));
var RabbitMQService_1 = __importDefault(require("./Services/RabbitMQService"));
var TesPredictor_1 = __importDefault(require("./MachineLearning/TesPredictor"));
var cors = require("cors");
app.use(cors());
mongoose
    .connect("mongodb+srv://bramsikkens:Kajabra1!@cluster0-v1gpp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(function () {
    TesPredictor_1.default.TrainModel();
    RabbitMQService_1.default.listenForCompetitionMessages();
    app.use(bodyParser.json());
    app.use("/athlete", AthleteRouter_1.default);
    app.use("/competition", CompetitionRouter_1.default);
    app.use("/race", RaceAnalyseRouter_1.default);
    app.listen(port, function () {
        return console.log("Example app listening at http://localhost:" + port);
    });
});
//# sourceMappingURL=index.js.map
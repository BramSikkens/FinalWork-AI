"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var http = require("http");
var bodyParser = require("body-parser");
var amqp = require("amqplib");
var port = 3003;
var mongoose = require("mongoose");
var RabbitMQService_1 = __importDefault(require("./Services/RabbitMQService"));
var AthleteRouter_1 = __importDefault(require("./Routes/AthleteRouter"));
var cors = require("cors");
app.use(cors());
mongoose
    .connect("mongodb+srv://bramsikkens:Kajabra1!@cluster0-v1gpp.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(function () {
    RabbitMQService_1.default();
    app.use(bodyParser.json());
    app.use("/athlete", AthleteRouter_1.default);
    app.listen(port, function () {
        return console.log("Example app listening at http://localhost:" + port);
    });
});
//# sourceMappingURL=index.js.map
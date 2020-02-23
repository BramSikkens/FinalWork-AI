const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");
var router = express.Router();

var competition = require("../NodeAPI/api/Routes/competition");

var team = require("./api/Routes/team");
// parse application/json
app.use(bodyParser.json());

app.use("/competition", competition);
app.use("/team", team);

app.listen(port, () => console.log(`App Listening on Port ${port}`));

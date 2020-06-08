const { spawn } = require("child_process");
import fs from "fs";
import mongooseService from "../Services/Mongoose/mongooseService";
class AthleteAnalyser {
  startPythonScript() {
    const python = spawn("python", ["./public/AthleteAnalyse.py"]);
    python.stderr.on("data", function (data) {});

    python.on("close", (code) => {
      this.saveAthleteAnalytics();
    });
  }

  saveAthleteAnalytics() {
    let analysedAthletes = JSON.parse(
      fs.readFileSync("./public/Athlete_Analysis_Dataset.json", "utf-8")
    );

    analysedAthletes.forEach((athlete) => {
      mongooseService.insertOrUpdateAnalytics({
        name: athlete.athlete_Name,
        data: athlete.data,
      });
    });
  }
}

export default new AthleteAnalyser();

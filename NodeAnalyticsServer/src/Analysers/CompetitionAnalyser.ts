import fs from "fs";
import mongooseService from "../Services/Mongoose/mongooseService";
const { spawn } = require("child_process");

class CompetitionAnalyser {
  constructor() {}

  async startPythonScript(id) {
    const python = spawn("python", [
      "./public/CleanInComingCompetitionData.py",
      id,
    ]);
    python.stderr.on("data", function (data) {});

    python.on("close", (code) => {
      console.log("Analysing Complete");
      this.saveAnalysedCompetitionToDb();
      this.saveAnalysedRacesToDb();
      this.saveAnalysedAthleteCompetitionToDb();
      this.saveAthleteResultsToDb();
    });
  }

  saveAnalysedRacesToDb() {
    let analysedRaces = JSON.parse(
      fs.readFileSync("./temp/Race_Analysis_Dataset.json", "utf-8")
    );
    analysedRaces.forEach((race) => {
      mongooseService.insertOrUpdateRaceAnalyse({
        raceId: race.race_Id,
        race,
      });
    });
  }

  saveAnalysedCompetitionToDb() {
    let analysedCompetition = JSON.parse(
      fs.readFileSync("./temp/Competition_Analasis_Dataset.json", "utf-8")
    );
    let AnalysedCompetitionToSave = {
      competitionId: analysedCompetition["0"].competition_Id,
      competition: analysedCompetition["0"],
    };
    mongooseService.InsertOrUpdateCompetitionAnalyse(AnalysedCompetitionToSave);
  }

  saveAthleteResultsToDb() {
    let results = JSON.parse(
      fs.readFileSync("./temp/Athlete_Result_Dataset.json", "utf-8")
    );
    results.forEach((result) => {
      mongooseService.insertOrUpdateAthleteResult({
        athleteName: result.athlete_Name,
        result,
      });
    });
  }

  saveAnalysedAthleteCompetitionToDb() {
    let analysedAthleteCompetitions = JSON.parse(
      fs.readFileSync(
        "./temp/Athlete_Competition_Analysis_Dataset.json",
        "utf-8"
      )
    );
    analysedAthleteCompetitions.forEach((analytic) => {
      mongooseService.insertOrUpdateAthleteCompetitionAnalyse({
        competitionId: analytic.competition_Id,
        athletId: analytic.athlete_Name,
        analyse: analytic,
      });
    });
  }
}

export default new CompetitionAnalyser();

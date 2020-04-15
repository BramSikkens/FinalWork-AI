import AthleteSchema from "../Mongoose/Schema/Athlete";
import c from "config";

export class AthleteAnalyser {
  athletes = new Map<string, any>();

  // Werkt nog niet
  IncreaseCompetitionCountFromAthlete() {
    // If user in competition add 1
    console.log("add comp");
    this.athletes.forEach((athlete) => {
      if (athlete.competitionCount) {
        athlete.competitionCount++;
      } else athlete.competitionCount = 1;
    });
  }

  IncreaseRaceCountFromAthlete(resultSet) {
    console.log("increase race");
    resultSet.forEach((result) => {
      if (this.athletes.get(result.athlete_Name).raceCount) {
        this.athletes.get(result.athlete_Name).raceCount++;
      } else {
        this.athletes.get(result.athlete_Name).raceCount = 1;
      }
    });
  }

  IncreasePodiaCountFromAthlete() {
    // If user In Final A
    // If 3 add To bronze
    // If 2 add to Silver
    // If 1 add to Gold
  }

  addResultsToAthlete(resultSet) {
    resultSet.forEach((result) => {
      // GET ATHLETE
      let athlete = this.athletes.get(result.athlete_Name);
      console.log(athlete);
      // IF athlete does not have timeResults => make new array
      if (athlete.timeResults == undefined) athlete.timeResults = new Map();

      let athleteTimeResults = athlete.timeResults.get(result.race_distance);
      console.log(athleteTimeResults);
      if (athleteTimeResults == undefined)
        athleteTimeResults.set(result.race_distance, {});

      // get the distance
      let AthleteDistanceResults = athlete.timeResults.get(
        result.race_distance
      );

      // If times for distance does not exist => Create
      if (!AthleteDistanceResults.times) AthleteDistanceResults.times = [];
      // Add the result
      AthleteDistanceResults.times.push({
        raceId: result.race_Id,
        totalTime: result.result_totalTime,
        date: result.race_Date,
      });
    });
  }

  async checkIfAthleteAlreadyExistsInDb(name: String) {
    try {
      const athleteExists = await AthleteSchema.findOne({ name }).exec();
      return athleteExists ? athleteExists : false;
    } catch (error) {
      console.warn(error);
    }
  }

  async SaveAnalysed() {
    console.log("save");
    this.athletes.forEach(async (athlete) => {
      try {
        const result = await athlete.save();
      } catch (error) {
        throw error;
      }
    });
    console.log("Saved Analytics");
  }

  async Analyse(resultSet) {
    console.log(resultSet);
    // Functie fetchOrCreateAthletesForAnalysing
    for (const result of resultSet) {
      let athleteInDB = await this.checkIfAthleteAlreadyExistsInDb(
        result.athlete_Name
      );

      if (athleteInDB) {
        console.log(athleteInDB);
        if (!(athleteInDB.name in this.athletes)) {
          this.athletes.set(athleteInDB.name, athleteInDB);
        }
      } else {
        if (!(result.athlete_Name in this.athletes)) {
          this.athletes.set(
            result.athlete_Name,
            new AthleteSchema({
              name: result.athlete_Name,
            })
          );
        }
      }
    }

    try {
      await this.IncreaseCompetitionCountFromAthlete();
      await this.IncreaseRaceCountFromAthlete(resultSet);
      // await this.addResultsToAthlete(resultSet);
      console.log(this.athletes);
      await this.SaveAnalysed();
    } catch (error) {
      console.log(error);
    }

    console.log("analysing succes");
  }
}

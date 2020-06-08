import { getConnection, DeleteResult } from "typeorm";
import { Competition } from "../../entity/Competition";
import date from "date-and-time";
import { User } from "../../entity/User";
import { Race } from "../../entity/Race";
import { RaceResult } from "../../entity/RaceResult";
import { findIndex } from "lodash";
import { Athlete } from "../../entity/Athlete";

class CompetitionService {
  model: any;
  constructor(model) {
    this.model = model;
  }

  async save(item) {
    try {
      const result = await getConnection().manager.save(item);
      if (result) {
        return {
          error: false,
          result,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        error: true,
        statusCode: 500,
        message: error.errmsg || "Could not save Item",
        errors: error.errors,
      };
    }
  }

  async getOne(id) {
    try {
      const result = getConnection().manager.findOne(this.model, id);
      if (result) {
        return {
          error: false,
          result,
        };
      }
    } catch (error) {
      return {
        error: true,
        statusCode: 400,
        message: error.errmsg || "Could retreive Item",
        errors: error.errors,
      };
    }
  }

  async delete(id) {
    try {
      const deleteResult: DeleteResult = await getConnection().manager.delete(
        this.model,
        id
      );
    } catch (error) {
      console.log(error);
    }
  }

  async transformCSVToCompetitionObject(file, body) {
    const CreatedUser: User = await getConnection().manager.findOne(User, 1);

    let competitionYear: number = new Date(body.startDate).getFullYear();
    // Constructor maken
    const competition = new Competition(
      body.place,
      body.type,
      body.title,
      body.startDate,
      body.endDate,
      competitionYear
    );

    competition.createdBy = CreatedUser;

    const csv = require("csvtojson");
    let csvToJson = await csv({
      delimiter: ";",
    }).fromString(file.buffer.toString("utf-8"));

    let uniqueRaces: Race[] = [];
    let uniqueResults: RaceResult[] = [];
    csvToJson.forEach((race) => {
      const newRace: Race = new Race(race.distance);
      newRace.time = race.Time;
      newRace.sex = "MALE"; // enum gaat niet in ctor
      newRace.boatType = "K2"; // enum gaat niet in ctor
      newRace.category = "SENIOR"; // enum gaat niet in ctor
      newRace.competitionRound = race["Competition Round"];
      newRace.date = new Date(
        date.parse(race.Date + " " + race.Time, "D.MM.YYYY HH:m", true)
      );

      let NewAthletes: Athlete[] = [];
      let athletes = race.athletes.split("+");
      athletes.forEach((athleteName) => {
        NewAthletes.push(new Athlete(athleteName, "", race.Country));
      });

      // Constructor maken
      const newResult: RaceResult = new RaceResult(
        race.Lane,
        race["Final Rank"],
        race["Total Time"]
      );
      newResult.splitTimes = ["54", "1:32", "2:43"];
      newResult.time = race.Time;
      newResult.athletes = NewAthletes;
      // newResult.createdBy = CreatedUser;

      if (findIndex(uniqueRaces, newRace) === -1) {
        uniqueRaces.push(newRace);
      }

      if (findIndex(uniqueResults, newResult) === -1) {
        uniqueResults.push(newResult);
      }
    });

    uniqueRaces.forEach((race: Race) => {
      race.raceResults = uniqueResults.filter((result: RaceResult) => {
        return race.time === result.time;
      });
    });
    competition.races = uniqueRaces;
    return competition;
  }
}

export default new CompetitionService(Competition);

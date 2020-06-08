import AthleteCompetitionAnalyse from "./Schema/AthleteCompetitionAnalyse";
import AthleteResults from "./Schema/AthleteResults";
import CompetitionAnalyse from "./Schema/CompetitionAnalyse";
import RaceAnalyse from "./Schema/RaceAnalyse";
import AthleteAnalyse from "./Schema/AthleteAnalyse";

class MongooseService {
  constructor() {}

  async InsertOrUpdateCompetitionAnalyse(competition) {
    try {
      let result = await CompetitionAnalyse.findOneAndUpdate(
        { competitionId: competition.competitionId },
        competition,
        {
          upsert: true,
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
  async insertOrUpdateRaceAnalyse(race) {
    try {
      let result = await RaceAnalyse.findOneAndUpdate(
        { raceId: race.raceId },
        race,
        {
          upsert: true,
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async insertOrUpdateAthleteCompetitionAnalyse(analyse) {
    try {
      let result = await AthleteCompetitionAnalyse.findOneAndUpdate(
        { competitionId: analyse.competitionId, athleteId: analyse.athleteId },
        analyse,
        { upsert: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async insertOrUpdateAthleteResult(result) {
    try {
      let response = await AthleteResults.findOneAndUpdate(
        { athleteName: result.athleteName },
        result,
        { upsert: true }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async insertOrUpdateAnalytics(athlete) {
    try {
      let response = await AthleteAnalyse.findOneAndUpdate(
        { name: athlete.name },
        athlete,
        { upsert: true }
      );
    } catch (error) {
      console.log(error);
    }
  }








  async getAthleteCompetitionAnalyse(athleteName, competitionId) {
    try {
      let result = await AthleteCompetitionAnalyse.find({
        competitionId,
        athleteId: athleteName,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getResultsOfAthlete(athleteName) {
    try {
      let results = await AthleteResults.find({ athleteName });
      return results;
    } catch (error) {
      console.log(error);
    }
  }

  async getCompetitionAnalyse(id) {
    try {
      let result = await CompetitionAnalyse.findById(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getRaceAnalyse(id) {
    try {
      let result = await RaceAnalyse.findById(id);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getallResults() {
    try {
      let result = await AthleteResults.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new MongooseService();

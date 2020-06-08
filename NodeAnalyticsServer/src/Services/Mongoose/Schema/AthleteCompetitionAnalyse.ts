import mongoose from "mongoose";
let AthleteCompetitionAnalyseSchema = mongoose.Schema({
  competitionId: String,
  athleteId: String,
  analyse: {
    type: Object,
    required: false,
  },
});

export default mongoose.model(
  "AthleteCompetitionAnalyse",
  AthleteCompetitionAnalyseSchema
);

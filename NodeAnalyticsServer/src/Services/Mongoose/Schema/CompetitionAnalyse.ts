import mongoose from "mongoose";
let competitionAnalyseSchema = mongoose.Schema({
  competitionId: String,
  competition: {
    type: Object,
    required: false,
  },
});

export default mongoose.model("CompetitionAnalyse", competitionAnalyseSchema);

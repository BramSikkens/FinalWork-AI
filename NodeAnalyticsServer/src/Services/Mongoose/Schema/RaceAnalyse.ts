import mongoose from "mongoose";
let raceAnalyseSchema = mongoose.Schema({
  raceId: String,
  race: {
    type: Object,
    required: false,
  },
});

export default mongoose.model("RaceAnalyse", raceAnalyseSchema);

import mongoose from "mongoose";
let athleteResultSchema = mongoose.Schema({
  athleteName: String,
  result: {
    type: Object,
    required: false,
  },
});

export default mongoose.model("AthleteResult", athleteResultSchema);

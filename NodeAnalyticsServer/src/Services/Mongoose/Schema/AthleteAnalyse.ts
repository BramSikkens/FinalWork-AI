import mongoose from "mongoose";

const AthleteAnalyseSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  data: {
    type: Object,
    required: false,
  },
});

export default mongoose.model("AthleteAnalyse", AthleteAnalyseSchema);

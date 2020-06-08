import mongoose from "mongoose";

const AthleteSchema = mongoose.Schema({
  AthleteId: {
    type: String,
    unique: true,
  },
  Name: String,
  Country: String,
});

export default mongoose.model("Athlete", AthleteSchema);

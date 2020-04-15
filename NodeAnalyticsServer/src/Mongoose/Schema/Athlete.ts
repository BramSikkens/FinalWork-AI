import mongoose from "mongoose";

import { ResultSchema } from "./Result";
const AthleteSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  competitionCount: Number,
  raceCount: Number,
  victoryCount: Number,
  silverCount: Number,
  bronzeCount: Number,
  top3Count: Number,
  AFinalCount: Number,
  timeResults: {
    type: Map,
    of: ResultSchema,
  },
});

export default mongoose.model("Athlete", AthleteSchema);

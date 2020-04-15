import mongoose from "mongoose";

export const ResultSchema = mongoose.Schema({
  times: [
    {
      raceId: String,
      totalTime: String,
      date: String,
    },
  ],
  pb: String,
  pbSeason: String,
});

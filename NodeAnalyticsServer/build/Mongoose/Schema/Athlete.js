"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Result_1 = require("./Result");
var AthleteSchema = mongoose_1.default.Schema({
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
        of: Result_1.ResultSchema,
    },
});
exports.default = mongoose_1.default.model("Athlete", AthleteSchema);
//# sourceMappingURL=Athlete.js.map
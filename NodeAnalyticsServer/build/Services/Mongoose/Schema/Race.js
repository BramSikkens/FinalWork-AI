"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var RaceSchema = mongoose_1.default.Schema({
    RaceId: {
        type: String,
        unique: true,
    },
    Date: String,
    CompetitionRound: String,
    Sex: String,
    Distance: String,
    BoatType: String,
});
exports.default = mongoose_1.default.model("Race", RaceSchema);
//# sourceMappingURL=Race.js.map
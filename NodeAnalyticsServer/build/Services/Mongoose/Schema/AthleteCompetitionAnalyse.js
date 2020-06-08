"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var AthleteCompetitionAnalyseSchema = mongoose_1.default.Schema({
    competitionId: String,
    athleteId: String,
    analyse: {
        type: Object,
        required: false,
    },
});
exports.default = mongoose_1.default.model("AthleteCompetitionAnalyse", AthleteCompetitionAnalyseSchema);
//# sourceMappingURL=AthleteCompetitionAnalyse.js.map
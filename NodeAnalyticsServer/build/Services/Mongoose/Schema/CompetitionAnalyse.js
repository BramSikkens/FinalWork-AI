"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var competitionAnalyseSchema = mongoose_1.default.Schema({
    competitionId: String,
    competition: {
        type: Object,
        required: false,
    },
});
exports.default = mongoose_1.default.model("CompetitionAnalyse", competitionAnalyseSchema);
//# sourceMappingURL=CompetitionAnalyse.js.map
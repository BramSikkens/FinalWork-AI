"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var CompetitionSchema = mongoose_1.default.Schema({
    CompetitionId: {
        type: String,
        unique: true,
    },
    Place: String,
    Type: String,
    Year: String,
});
exports.default = mongoose_1.default.model("Competition", CompetitionSchema);
//# sourceMappingURL=Competition.js.map
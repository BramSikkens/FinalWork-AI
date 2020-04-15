"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.ResultSchema = mongoose_1.default.Schema({
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
//# sourceMappingURL=Result.js.map
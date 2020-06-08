"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var raceAnalyseSchema = mongoose_1.default.Schema({
    raceId: String,
    race: {
        type: Object,
        required: false,
    },
});
exports.default = mongoose_1.default.model("RaceAnalyse", raceAnalyseSchema);
//# sourceMappingURL=RaceAnalyse.js.map
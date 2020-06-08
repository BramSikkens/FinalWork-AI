"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var AthleteSchema = mongoose_1.default.Schema({
    AthleteId: {
        type: String,
        unique: true,
    },
    Name: String,
    Country: String,
});
exports.default = mongoose_1.default.model("Athlete", AthleteSchema);
//# sourceMappingURL=Athlete.js.map
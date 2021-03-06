"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var AthleteAnalyseSchema = mongoose_1.default.Schema({
    name: {
        type: String,
        unique: true,
    },
    data: {
        type: Object,
        required: false,
    },
});
exports.default = mongoose_1.default.model("AthleteAnalyse", AthleteAnalyseSchema);
//# sourceMappingURL=AthleteAnalyse.js.map
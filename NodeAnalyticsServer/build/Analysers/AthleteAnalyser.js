"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require("child_process").spawn;
var fs_1 = __importDefault(require("fs"));
var mongooseService_1 = __importDefault(require("../Services/Mongoose/mongooseService"));
var AthleteAnalyser = /** @class */ (function () {
    function AthleteAnalyser() {
    }
    AthleteAnalyser.prototype.startPythonScript = function () {
        var _this = this;
        var python = spawn("python", ["./public/AthleteAnalyse.py"]);
        python.stderr.on("data", function (data) { });
        python.on("close", function (code) {
            _this.saveAthleteAnalytics();
        });
    };
    AthleteAnalyser.prototype.saveAthleteAnalytics = function () {
        var analysedAthletes = JSON.parse(fs_1.default.readFileSync("./public/Athlete_Analysis_Dataset.json", "utf-8"));
        analysedAthletes.forEach(function (athlete) {
            mongooseService_1.default.insertOrUpdateAnalytics({
                name: athlete.athlete_Name,
                data: athlete.data,
            });
        });
    };
    return AthleteAnalyser;
}());
exports.default = new AthleteAnalyser();
//# sourceMappingURL=AthleteAnalyser.js.map
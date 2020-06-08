"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var mongooseService_1 = __importDefault(require("../Services/Mongoose/mongooseService"));
var spawn = require("child_process").spawn;
var CompetitionAnalyser = /** @class */ (function () {
    function CompetitionAnalyser() {
    }
    CompetitionAnalyser.prototype.startPythonScript = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var python;
            var _this = this;
            return __generator(this, function (_a) {
                python = spawn("python", [
                    "./public/CleanInComingCompetitionData.py",
                    id,
                ]);
                python.stderr.on("data", function (data) { });
                python.on("close", function (code) {
                    console.log("Analysing Complete");
                    _this.saveAnalysedCompetitionToDb();
                    _this.saveAnalysedRacesToDb();
                    _this.saveAnalysedAthleteCompetitionToDb();
                    _this.saveAthleteResultsToDb();
                });
                return [2 /*return*/];
            });
        });
    };
    CompetitionAnalyser.prototype.saveAnalysedRacesToDb = function () {
        var analysedRaces = JSON.parse(fs_1.default.readFileSync("./temp/Race_Analysis_Dataset.json", "utf-8"));
        analysedRaces.forEach(function (race) {
            mongooseService_1.default.insertOrUpdateRaceAnalyse({
                raceId: race.race_Id,
                race: race,
            });
        });
    };
    CompetitionAnalyser.prototype.saveAnalysedCompetitionToDb = function () {
        var analysedCompetition = JSON.parse(fs_1.default.readFileSync("./temp/Competition_Analasis_Dataset.json", "utf-8"));
        var AnalysedCompetitionToSave = {
            competitionId: analysedCompetition["0"].competition_Id,
            competition: analysedCompetition["0"],
        };
        mongooseService_1.default.InsertOrUpdateCompetitionAnalyse(AnalysedCompetitionToSave);
    };
    CompetitionAnalyser.prototype.saveAthleteResultsToDb = function () {
        var results = JSON.parse(fs_1.default.readFileSync("./temp/Athlete_Result_Dataset.json", "utf-8"));
        results.forEach(function (result) {
            mongooseService_1.default.insertOrUpdateAthleteResult({
                athleteName: result.athlete_Name,
                result: result,
            });
        });
    };
    CompetitionAnalyser.prototype.saveAnalysedAthleteCompetitionToDb = function () {
        var analysedAthleteCompetitions = JSON.parse(fs_1.default.readFileSync("./temp/Athlete_Competition_Analysis_Dataset.json", "utf-8"));
        analysedAthleteCompetitions.forEach(function (analytic) {
            mongooseService_1.default.insertOrUpdateAthleteCompetitionAnalyse({
                competitionId: analytic.competition_Id,
                athletId: analytic.athlete_Name,
                analyse: analytic,
            });
        });
    };
    return CompetitionAnalyser;
}());
exports.default = new CompetitionAnalyser();
//# sourceMappingURL=CompetitionAnalyser.js.map
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
var Athlete_1 = __importDefault(require("../Mongoose/Schema/Athlete"));
var AthleteAnalyser = /** @class */ (function () {
    function AthleteAnalyser() {
        this.athletes = new Map();
    }
    // Werkt nog niet
    AthleteAnalyser.prototype.IncreaseCompetitionCountFromAthlete = function () {
        // If user in competition add 1
        console.log("add comp");
        this.athletes.forEach(function (athlete) {
            if (athlete.competitionCount) {
                athlete.competitionCount++;
            }
            else
                athlete.competitionCount = 1;
        });
    };
    AthleteAnalyser.prototype.IncreaseRaceCountFromAthlete = function (resultSet) {
        var _this = this;
        console.log("increase race");
        resultSet.forEach(function (result) {
            if (_this.athletes.get(result.athlete_Name).raceCount) {
                _this.athletes.get(result.athlete_Name).raceCount++;
            }
            else {
                _this.athletes.get(result.athlete_Name).raceCount = 1;
            }
        });
    };
    AthleteAnalyser.prototype.IncreasePodiaCountFromAthlete = function () {
        // If user In Final A
        // If 3 add To bronze
        // If 2 add to Silver
        // If 1 add to Gold
    };
    AthleteAnalyser.prototype.addResultsToAthlete = function (resultSet) {
        var _this = this;
        resultSet.forEach(function (result) {
            // GET ATHLETE
            var athlete = _this.athletes.get(result.athlete_Name);
            console.log(athlete);
            // IF athlete does not have timeResults => make new array
            if (athlete.timeResults == undefined)
                athlete.timeResults = new Map();
            var athleteTimeResults = athlete.timeResults.get(result.race_distance);
            console.log(athleteTimeResults);
            if (athleteTimeResults == undefined)
                athleteTimeResults.set(result.race_distance, {});
            // get the distance
            var AthleteDistanceResults = athlete.timeResults.get(result.race_distance);
            // If times for distance does not exist => Create
            if (!AthleteDistanceResults.times)
                AthleteDistanceResults.times = [];
            // Add the result
            AthleteDistanceResults.times.push({
                raceId: result.race_Id,
                totalTime: result.result_totalTime,
                date: result.race_Date,
            });
        });
    };
    AthleteAnalyser.prototype.checkIfAthleteAlreadyExistsInDb = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            var athleteExists, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Athlete_1.default.findOne({ name: name }).exec()];
                    case 1:
                        athleteExists = _a.sent();
                        return [2 /*return*/, athleteExists ? athleteExists : false];
                    case 2:
                        error_1 = _a.sent();
                        console.warn(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AthleteAnalyser.prototype.SaveAnalysed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("save");
                this.athletes.forEach(function (athlete) { return __awaiter(_this, void 0, void 0, function () {
                    var result, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, athlete.save()];
                            case 1:
                                result = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                throw error_2;
                            case 3: return [2 /*return*/];
                        }
                    });
                }); });
                console.log("Saved Analytics");
                return [2 /*return*/];
            });
        });
    };
    AthleteAnalyser.prototype.Analyse = function (resultSet) {
        return __awaiter(this, void 0, void 0, function () {
            var _i, resultSet_1, result, athleteInDB, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(resultSet);
                        _i = 0, resultSet_1 = resultSet;
                        _a.label = 1;
                    case 1:
                        if (!(_i < resultSet_1.length)) return [3 /*break*/, 4];
                        result = resultSet_1[_i];
                        return [4 /*yield*/, this.checkIfAthleteAlreadyExistsInDb(result.athlete_Name)];
                    case 2:
                        athleteInDB = _a.sent();
                        if (athleteInDB) {
                            console.log(athleteInDB);
                            if (!(athleteInDB.name in this.athletes)) {
                                this.athletes.set(athleteInDB.name, athleteInDB);
                            }
                        }
                        else {
                            if (!(result.athlete_Name in this.athletes)) {
                                this.athletes.set(result.athlete_Name, new Athlete_1.default({
                                    name: result.athlete_Name,
                                }));
                            }
                        }
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        _a.trys.push([4, 8, , 9]);
                        return [4 /*yield*/, this.IncreaseCompetitionCountFromAthlete()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.IncreaseRaceCountFromAthlete(resultSet)];
                    case 6:
                        _a.sent();
                        // await this.addResultsToAthlete(resultSet);
                        console.log(this.athletes);
                        return [4 /*yield*/, this.SaveAnalysed()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [3 /*break*/, 9];
                    case 9:
                        console.log("analysing succes");
                        return [2 /*return*/];
                }
            });
        });
    };
    return AthleteAnalyser;
}());
exports.AthleteAnalyser = AthleteAnalyser;
//# sourceMappingURL=AthleteAnalyser.js.map
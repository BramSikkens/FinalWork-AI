"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require("child_process").spawn;
var TestPredictor = /** @class */ (function () {
    function TestPredictor() {
    }
    TestPredictor.prototype.TrainModel = function () {
        var python = spawn("python", [
            "./public/MachineLearning/ClassificationTest.py",
        ]);
        python.stderr.on("data", function (data) {
            console.log(data.toString("utf-8"));
        });
        python.on("close", function (code) {
            console.log("model Learned");
        });
    };
    return TestPredictor;
}());
exports.default = new TestPredictor();
//# sourceMappingURL=TesPredictor.js.map
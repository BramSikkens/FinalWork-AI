"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var spawn = require("child_process").spawn;
var MlService = /** @class */ (function () {
    function MlService() {
    }
    MlService.prototype.predictSomething = function () {
        var python = spawn("python", ["./KNNTest"]);
        python.stderr.on("data", function (data) { });
        python.on("close", function (code) {
        });
    };
    return MlService;
}());
exports.default = new MlService();
//# sourceMappingURL=MLService.js.map
const { spawn } = require("child_process");
import fs from "fs";

class TestPredictor {
  TrainModel() {
    const python = spawn("python", [
      "./public/MachineLearning/ClassificationTest.py",
    ]);
    python.stderr.on("data", function (data) {
      console.log(data.toString("utf-8"));
    });

    python.on("close", (code) => {
      console.log("model Learned");
    });
  }
}

export default new TestPredictor();

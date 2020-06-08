const { spawn } = require("child_process");

class MlService {
  constructor() {}

  predictSomething() {
    const python = spawn("python", ["./KNNTest"]);
    python.stderr.on("data", function (data) {});

    python.on("close", (code) => {

    });
  }
}

export default new MlService();

const { errorMessage } = require("./calculatorReceivers/constants");

module.exports = class MemoryUnit {
  constructor() {
    this.memory = [];
    this.readMemory = 0;
  }

  compute(operator, operand) {
    switch (operator) {
      case "M+":
        this.memory.push(operand);
        break;

      case "M-":
        if (operand < 0) {
          this.memory.push(operand);
        } else {
          const negativeOperand = operand * -1;
          this.memory.push(negativeOperand);
        }
        break;

      case "MC":
        this.memory.length = 0;
        this.readMemory = 0;
        break;

      case "MR":
        this.readMemory = this.memory.reduce((acc, i) => acc + i, 0);
        if (Number.isNaN(this.readMemory)) {
          this.readMemory = errorMessage;
        }
        break;

      default:
        throw new Error("Unknown operator");
    }
  }
};

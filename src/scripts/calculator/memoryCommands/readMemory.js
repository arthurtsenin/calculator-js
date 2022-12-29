module.exports = class ReadMemory {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "MR";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }
};

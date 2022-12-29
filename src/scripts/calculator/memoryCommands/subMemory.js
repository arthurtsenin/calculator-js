module.exports = class SubMemory {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "M-";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }
};

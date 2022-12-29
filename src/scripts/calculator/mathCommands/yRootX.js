module.exports = class YRootX {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "yRootX";
    this.reverseOperator = "xForseY";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }

  unExecute() {
    this.receiver.compute(this.reverseOperator, this.operand);
  }
};

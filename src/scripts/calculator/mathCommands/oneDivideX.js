module.exports = class OneDivideX {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "oneDivideX";
    this.reverseOperator = "oneMultX";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }

  unExecute() {
    this.receiver.compute(this.reverseOperator, this.operand);
  }
};

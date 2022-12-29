module.exports = class tenForseX {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "tenForseX";
    this.reverseOperator = "unDoForseX";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }

  unExecute() {
    this.receiver.compute(this.reverseOperator, this.operand);
  }
};

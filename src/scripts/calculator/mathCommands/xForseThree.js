module.exports = class xForseThree {
  constructor(receiver, operand) {
    this.receiver = receiver;
    this.operand = operand;
    this.operator = "xForseThree";
    this.reverseOperator = "unDoXForseThree";
  }

  execute() {
    this.receiver.compute(this.operator, this.operand);
  }

  unExecute() {
    this.receiver.compute(this.reverseOperator, this.operand);
  }
};

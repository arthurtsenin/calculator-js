module.exports = class Clear {
  constructor(receiver) {
    this.receiver = receiver;
    this.operator = "AC";
  }

  execute() {
    this.receiver.compute(this.operator);
  }
};

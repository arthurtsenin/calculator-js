module.exports = class ClearMemory {
  constructor(receiver) {
    this.receiver = receiver;
    this.operator = "MC";
  }

  execute() {
    this.receiver.compute(this.operator);
  }
};

module.exports = class CommandsUnit {
  constructor() {
    this.commands = [];
    this.current = 0;
  }

  executeCommand(command) {
    this.commands.push(command);
    this.commands[this.current].execute();
    this.current += 1;
  }

  undo() {
    if (this.current > 0) {
      this.current -= 1;
      this.commands[this.current].unExecute();
    }
  }

  redo() {
    if (this.current <= this.commands.length - 1) {
      this.commands[this.current].execute();
      this.current += 1;
    }
  }
};

const MathUnit = require("./calculatorReceivers/mathReceiver");
const CommandsUnit = require("./commandsInvoker");
const MemorylUnit = require("./calculatorReceivers/memoryReceiver");

const Add = require("./mathCommands/add");
const Sub = require("./mathCommands/sub");
const Mul = require("./mathCommands/mul");
const Div = require("./mathCommands/div");
const FacX = require("./mathCommands/facX");
const XForseTwo = require("./mathCommands/xForseTwo");
const XForseThree = require("./mathCommands/xForseThree");
const XForseY = require("./mathCommands/xForseY");
const TenForseX = require("./mathCommands/tenForseX");
const OneDivideX = require("./mathCommands/oneDivideX");
const TwoRootX = require("./mathCommands/twoRootX");
const ThreeRootX = require("./mathCommands/threeRootX");
const YRootX = require("./mathCommands/yRootX");
const Cover = require("./mathCommands/cover");
const ChangePlusMinus = require("./mathCommands/changePlusMinus");
const PercentFromNumber = require("./mathCommands/percentFromNumber");
const Clear = require("./mathCommands/clear");

const AddMemory = require("./memoryCommands/addMemory");
const SubMemory = require("./memoryCommands/subMemory");
const ReadMemory = require("./memoryCommands/readMemory");
const ClearMemory = require("./memoryCommands/clearMemory");

module.exports = class Calculator {
  constructor() {
    this.mathUnit = new MathUnit();
    this.commandsUnit = new CommandsUnit();
    this.memoryUnit = new MemorylUnit();
  }

  div(operand) {
    return this.run(new Div(this.mathUnit, operand));
  }

  mul(operand) {
    return this.run(new Mul(this.mathUnit, operand));
  }

  sub(operand) {
    return this.run(new Sub(this.mathUnit, operand));
  }

  add(operand) {
    return this.run(new Add(this.mathUnit, operand));
  }

  clear() {
    this.commandsUnit.commands.length = 0;
    this.commandsUnit.current = 0;

    return this.run(new Clear(this.mathUnit));
  }

  changePlusMinus(operand) {
    return this.run(new ChangePlusMinus(this.mathUnit, operand));
  }

  facX(operand) {
    return this.run(new FacX(this.mathUnit, operand));
  }

  xForseTwo(operand) {
    return this.run(new XForseTwo(this.mathUnit, operand));
  }

  xForseThree(operand) {
    return this.run(new XForseThree(this.mathUnit, operand));
  }

  xForseY(operand) {
    return this.run(new XForseY(this.mathUnit, operand));
  }

  tenForseX(operand) {
    return this.run(new TenForseX(this.mathUnit, operand));
  }

  oneDivideX(operand) {
    return this.run(new OneDivideX(this.mathUnit, operand));
  }

  twoRootX(operand) {
    return this.run(new TwoRootX(this.mathUnit, operand));
  }

  threeRootX(operand) {
    return this.run(new ThreeRootX(this.mathUnit, operand));
  }

  yRootX(operand) {
    return this.run(new YRootX(this.mathUnit, operand));
  }

  cover(operand) {
    return this.run(new Cover(this.mathUnit, operand));
  }

  percentFromNumber(operand) {
    return this.run(new PercentFromNumber(this.mathUnit, operand));
  }

  addMemory(operand) {
    this.commandsUnit.executeCommand(new Cover(this.mathUnit, operand));

    return this.runMemory(new AddMemory(this.memoryUnit, operand));
  }

  subMemory(operand) {
    this.commandsUnit.executeCommand(new Cover(this.mathUnit, operand));

    return this.runMemory(new SubMemory(this.memoryUnit, operand));
  }

  readMemory() {
    this.commandsUnit.executeCommand(
      new Cover(this.mathUnit, this.memoryUnit.readMemory)
    );
    this.commandsUnit.executeCommand(new ReadMemory(this.memoryUnit));

    return this.memoryUnit.readMemory;
  }

  clearMemory() {
    this.commandsUnit.commands.length = 0;
    this.commandsUnit.current = 0;

    return this.runMemory(new ClearMemory(this.memoryUnit));
  }

  runMemory(command) {
    this.commandsUnit.executeCommand(command);

    return this.memoryUnit.memory;
  }

  run(command) {
    this.commandsUnit.executeCommand(command);

    return this.mathUnit.result;
  }

  repeatLastCommand() {
    const { commands } = this.commandsUnit;

    if (commands.length > 0) {
      this.run(commands[commands.length - 1]);
    }

    return this.mathUnit.result;
  }

  undo() {
    this.commandsUnit.undo();

    return this.mathUnit.result;
  }

  redo() {
    this.commandsUnit.redo();

    return this.mathUnit.result;
  }
};

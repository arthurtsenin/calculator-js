import "../style.css";
import Calculator from "./calculator/calculatorCommands";
import CalculatorInterface from "./calculatorInterface/calculatorInretface";
import changeTheme from "./calculatorInterface/changeTheme";

class CalculatorApp {
  constructor() {
    this.calculator = new Calculator();
    this.calculatorInterface = new CalculatorInterface(this.calculator);
  }

  start() {
    return this.calculatorInterface;
  }
}

const calculatorApp = new CalculatorApp();

calculatorApp.start();
changeTheme();

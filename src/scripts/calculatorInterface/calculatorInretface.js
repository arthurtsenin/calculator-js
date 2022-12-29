export default class CalculatorInterface {
  constructor(calculator) {
    this.calculator = calculator;
    this.screen = document.querySelector(".calculator__screen");
    this.readMemoryElement = document.querySelector(
      'button[data-key="readMemory"]'
    );

    this.firstOperandEntered = false;
    this.equalSignEntered = false;
    this.currentOperator = null;
    this.enteredUpdated = false;

    document.addEventListener("click", this.mouseEvent.bind(this));
  }

  mouseEvent(event) {
    const integer = event.target.getAttribute("data-integer");
    const operator = event.target.getAttribute("data-operator");
    const key = event.target.getAttribute("data-key");

    if (integer) {
      this.inputChar(integer);
    } else if (operator) {
      this.performOperator(operator);
    } else if (
      key === "inputDot" ||
      key === "performOperator" ||
      key === "performEqually"
    ) {
      this[key]();
    } else if (key) {
      this.performKey(key);
    }
  }

  inputDot() {
    if (this.equalSignEntered === true) {
      this.screen.innerHTML = "0.";
      this.enteredUpdated = true;
      this.equalSignEntered = false;
    } else if (this.screen.innerHTML.indexOf(".") === -1) {
      this.screen.innerHTML += ".";
      this.enteredUpdated = true;
    } else {
      return false;
    }
    return false;
  }

  inputChar(integer) {
    if (this.enteredUpdated === false) {
      this.screen.innerHTML = integer;
      this.enteredUpdated = true;
    } else {
      this.screen.innerHTML += integer;
    }
  }

  performOperator(operator) {
    if (this.currentOperator === null) {
      if (this.equalSignEntered) {
        this.equalSignEntered = false;
        this.calculator.clear();
      }

      this.calculator.clear();
      this.calculator.cover(parseFloat(this.screen.innerHTML));
      this.firstOperandEntered = true;
      this.currentOperator = operator;
      this.enteredUpdated = false;

      return false;
    }
    if (this.currentOperator && this.enteredUpdated) {
      this.screen.innerHTML = this.calculator[this.currentOperator](
        parseFloat(this.screen.innerHTML)
      );
      this.currentOperator = operator;
      this.enteredUpdated = false;

      return false;
    }

    if (this.currentOperator && this.enteredUpdated) {
      this.screen.innerHTML = this.calculator[this.currentOperator](
        parseFloat(this.screen.innerHTML)
      );
      this.currentOperator = operator;
      this.enteredUpdated = false;
      return false;
    }

    if (this.currentOperator && this.enteredUpdated === false) {
      this.currentOperator = operator;
    }
    return false;
  }

  performEqually() {
    if (
      !this.equalSignEntered &&
      this.firstOperandEntered &&
      this.enteredUpdated &&
      this.currentOperator
    ) {
      this.screen.innerHTML = this.calculator[this.currentOperator](
        parseFloat(this.screen.innerHTML)
      );

      this.equalSignEntered = true;
      this.setDefaultFlags();
    } else {
      if (!this.firstOperandEntered) {
        this.screen.innerHTML = this.calculator.repeatLastCommand();
        this.enteredUpdated = false;
      }
      return false;
    }
    return false;
  }

  setDefaultFlags() {
    this.firstOperandEntered = false;
    this.currentOperator = null;
    this.enteredUpdated = false;
  }

  performKey(key) {
    switch (key) {
      case "performClean":
        this.screen.innerHTML = this.calculator.clear();
        this.setDefaultFlags();
        break;

      case "performUndo":
        this.screen.innerHTML = this.calculator.undo();
        break;

      case "performRedo":
        this.screen.innerHTML = this.calculator.redo();
        break;

      case "changePlusMinus":
        this.screen.innerHTML = this.calculator[key](
          parseFloat(this.screen.innerHTML)
        );
        break;

      case "addMemory":
        this.calculator[key](parseFloat(this.screen.innerHTML));
        this.enteredUpdated = false;
        this.readMemoryElement.classList.add("indicator");
        break;

      case "subMemory":
        this.calculator[key](parseFloat(this.screen.innerHTML));
        this.enteredUpdated = false;
        break;

      case "readMemory":
        this.screen.innerHTML = this.calculator.readMemory();
        this.enteredUpdated = false;
        break;

      case "clearMemory":
        this.calculator.clearMemory();
        this.setDefaultFlags();
        this.readMemoryElement.classList.remove("indicator");
        break;

      default:
        this.screen.innerHTML = this.calculator[key](
          parseFloat(this.screen.innerHTML)
        );
        this.enteredUpdated = false;
        break;
    }
  }
}

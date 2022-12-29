const errorMessage = require("./constants");

module.exports = class MathUnit {
  constructor() {
    this.result = 0;
  }

  compute(operator, operand) {
    switch (operator) {
      case "+":
        if (Number.isNaN(-this.result + operand)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(
            Number((this.result += operand)).toPrecision(15)
          );
        }
        break;

      case "-":
        if (
          this.result - operand === Infinity ||
          Number.isNaN(this.result - operand)
        ) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(
            Number((this.result -= operand)).toPrecision(15)
          );
        }
        break;

      case "*":
        if (
          this.result * operand === Infinity ||
          Number.isNaN(this.result * operand)
        ) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(
            Number((this.result *= operand)).toPrecision(15)
          );
        }
        break;

      case "/":
        if (
          this.result / operand === Infinity ||
          Number.isNaN(this.result / operand)
        ) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(
            Number((this.result /= operand)).toPrecision(15)
          );
        }
        break;

      case "!":
        if (operand === Infinity || Number.isNaN(operand)) {
          this.result = errorMessage;
        } else {
          const fac = (num) => {
            if (num < 0 || num === Infinity || num > 170 || num % 1 !== 0)
              return errorMessage;
            if (num === 1 || num === 0) return 1;

            return num * fac(num - 1);
          };
          this.result = fac(operand);
        }
        break;

      case "cover":
        this.result = operand;
        break;

      case "AC":
        this.result = 0;
        break;

      case "%":
        if (Number.isNaN(operand)) {
          this.result = errorMessage;
        }
        this.result = operand / 100;
        break;

      case "+/-":
        if (Number.isNaN(operand)) {
          this.result = "-0";
        } else {
          this.result = 0 - +operand;
        }
        break;

      case "xForseY":
        if (
          this.result ** operand === Infinity ||
          Number.isNaN(this.result ** operand)
        ) {
          this.result = errorMessage;
        } else {
          // this.result **= operand
          this.result = parseFloat(
            Number((this.result **= operand)).toPrecision(15)
          );
        }
        break;

      case "xForseTwo":
        if (operand ** 2 === Infinity || Number.isNaN(operand ** 2)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand ** 2).toPrecision(15));
        }
        break;

      case "xForseThree":
        if (operand ** 3 === Infinity || Number.isNaN(operand ** 3)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand ** 3).toPrecision(15));
          // this.result = operand ** 3
        }
        break;

      case "tenForseX":
        if (10 ** operand === Infinity || Number.isNaN(10 ** operand)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(10 ** operand).toPrecision(15));
          // this.result = 10 ** operand
        }
        break;

      case "oneDivideX":
        if (1 / operand === Infinity || Number.isNaN(1 / operand)) {
          this.result = errorMessage;
        } else {
          this.result = 1 / operand;
        }
        break;

      case "oneMultX":
        if (1 * operand === Infinity || Number.isNaN(1 * operand)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(1 * operand).toPrecision(15));
        }
        break;

      case "twoRootX":
        if (Number.isNaN(operand ** (1 / 2)) || operand < 0) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand ** (1 / 2)).toPrecision(15));
        }
        break;

      case "threeRootX":
        if (operand < 0) {
          this.result =
            0 - parseFloat(Number((operand * -1) ** (1 / 3)).toPrecision(15));
        } else if (
          Number.isNaN(operand ** (1 / 3)) ||
          operand ** (1 / 3) === Infinity
        ) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand ** (1 / 3)).toPrecision(15));
        }
        break;

      case "yRootX":
        if ((this.result < 0 && operand % 2 === 0) || operand <= 0) {
          this.result = errorMessage;
        } else if (this.result < 0 && operand % 2 !== 0) {
          this.result =
            0 -
            parseFloat(
              Number((0 - this.result) ** (1 / operand)).toPrecision(15)
            );
        } else {
          this.result = parseFloat(
            Number((this.result **= 1 / operand)).toPrecision(15)
          );
        }
        break;

      case "unDo!":
        if (operand === Infinity || Number.isNaN(operand)) {
          this.result = errorMessage;
        } else {
          this.result = operand * 1;
        }
        break;

      case "unDo%":
        if (Number.isNaN(operand)) {
          this.result = errorMessage;
        }
        this.result = operand * 1;
        break;

      case "unDo+/-":
        this.result = +operand;
        break;

      case "unDoXForseTwo":
        if (operand === Infinity || Number.isNaN(operand)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand * 1).toPrecision(15));
        }
        break;

      case "unDoXForseThree":
        if (operand === Infinity || Number.isNaN(operand ** 3)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand * 1).toPrecision(15));
        }
        break;

      case "unDoForseX":
        if (operand / 1 === Infinity || Number.isNaN(operand / 1)) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand / 1).toPrecision(15));
        }
        break;

      case "unDoTwoRootX":
        if (Number.isNaN(operand ** (1 / 2)) || operand < 0) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand * 1).toPrecision(15));
        }
        break;

      case "unDoThreeRootX":
        if (operand < 0) {
          this.result =
            0 - parseFloat(Number((operand * -1) ** (1 / 3)).toPrecision(15));
        } else if (
          Number.isNaN(operand ** (1 / 3)) ||
          operand ** (1 / 3) === Infinity
        ) {
          this.result = errorMessage;
        } else {
          this.result = parseFloat(Number(operand * 1).toPrecision(15));
        }
        break;

      default:
        throw new Error("Unknown operator");
    }
  }
};

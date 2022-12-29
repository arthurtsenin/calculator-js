const Calculator = require("../calculatorCommands");
const errorMessage = require("./constants");

const calculator = new Calculator();

describe("Plus", () => {
  test("0 + 0 = 0 ", () => {
    expect(calculator.add(0)).toBe(0);
  });

  test("0 + 0.1 = 0.1 ", () => {
    expect(calculator.add(0.1)).toBe(0.1);
  });

  test("0.1 + 0.2 = 0.3", () => {
    expect(calculator.add(0.2)).toBe(0.3);
  });

  test("0.3 + 3 = 3.3", () => {
    expect(calculator.add(3)).toBe(3.3);
  });
  test("3.3 + (-3) = 0.3", () => {
    expect(calculator.add(-3)).toBe(0.3);
    calculator.clear();
  });
});

describe("Sub", () => {
  test("0 - 0 = 0", () => {
    expect(calculator.sub(0)).toBe(0);
  });

  test("0 - 5 = -5", () => {
    expect(calculator.sub(5)).toBe(-5);
  });

  test("-5 - (-5.5) = 0.5", () => {
    expect(calculator.sub(-5.5)).toBe(0.5);
  });

  test("0.5 - 0.8 = -0.3", () => {
    expect(calculator.sub(0.8)).toBe(-0.3);
  });

  test("-0.3 - (-0.1) = -0.2", () => {
    expect(calculator.sub(-0.1)).toBe(-0.2);
    calculator.clear();
  });
});

describe("Multiple", () => {
  test("0 * 0 = 0", () => {
    expect(calculator.mul(0)).toBe(0);
  });

  test("0 * 10 = 0", () => {
    expect(calculator.mul(10)).toBe(0);
  });

  test("5  * 10 = 50", () => {
    calculator.add(5);
    expect(calculator.mul(10)).toBe(50);
  });

  test("50 * (-2) = -100", () => {
    expect(calculator.mul(-2)).toBe(-100);
  });

  test("-100 * (-1) = 100", () => {
    expect(calculator.mul(-1)).toBe(100);
  });

  test("100 * 0.001 = 0.1", () => {
    expect(calculator.mul(0.001)).toBe(0.1);
  });

  test("0.1 * 0.02 = 0.002", () => {
    expect(calculator.mul(0.02)).toBe(0.002);
  });
});

describe("Divide", () => {
  test('0 / 0 = "Error', () => {
    expect(calculator.div(0)).toBe(errorMessage);
  });

  test("100 / 4 = 25", () => {
    calculator.clear();
    calculator.add(100);
    expect(calculator.div(4)).toBe(25);
  });

  test("0 / 4 = 0", () => {
    calculator.clear();
    expect(calculator.div(4)).toBe(0);
  });

  test("10 / (-5) = - 2", () => {
    calculator.add(10);
    expect(calculator.div(-5)).toBe(-2);
  });

  test("-10 / (-5) = 2", () => {
    calculator.clear();
    calculator.add(-10);
    expect(calculator.div(-5)).toBe(2);
  });
});

describe("XForseTwo", () => {
  test("0² = 0", () => {
    expect(calculator.xForseTwo(0)).toBe(0);
  });

  test("-2² = 4", () => {
    expect(calculator.xForseTwo(-2)).toBe(4);
  });

  test("2² = 4", () => {
    expect(calculator.xForseTwo(2)).toBe(4);
  });

  test("0.15² = 0.0225", () => {
    expect(calculator.xForseTwo(0.15)).toBe(0.0225);
  });

  test("-0.15² = 0.0225", () => {
    expect(calculator.xForseTwo(-0.15)).toBe(0.0225);
  });
});

describe("XForseThree", () => {
  test("0³ = 0", () => {
    expect(calculator.xForseThree(0)).toBe(0);
  });

  test("-2³ = -8", () => {
    expect(calculator.xForseThree(-2)).toBe(-8);
  });

  test("2³ = 8", () => {
    expect(calculator.xForseThree(2)).toBe(8);
  });

  test("0.15³ = 0.003375", () => {
    expect(calculator.xForseThree(0.15)).toBe(0.003375);
  });

  test("-0.15³ = -0.003375", () => {
    expect(calculator.xForseThree(-0.15)).toBe(-0.003375);
  });
});

describe("XForseY", () => {
  test("0 ^ 0 = 1", () => {
    expect(calculator.xForseY(0)).toBe(1);
  });

  test("10 ^ 0 = 1", () => {
    calculator.add(10);
    expect(calculator.xForseY(0)).toBe(1);
  });

  test("-2 ^ 3 = -8", () => {
    calculator.clear();
    calculator.add(-2);
    expect(calculator.xForseY(3)).toBe(-8);
  });

  test("0.15 ^ 4 = 0.00050625", () => {
    calculator.clear();
    calculator.add(0.15);
    expect(calculator.xForseY(4)).toBe(0.00050625);
  });

  test("-0.15 ^ 4 = 0.00050625", () => {
    calculator.clear();
    calculator.add(-0.15);
    expect(calculator.xForseY(4)).toBe(0.00050625);
  });

  test("100 ^ 0.5 = 10", () => {
    calculator.clear();
    calculator.add(100);
    expect(calculator.xForseY(0.5)).toBe(10);
  });

  test("10 ^ (-2) = 0.01", () => {
    calculator.clear();
    calculator.add(10);
    expect(calculator.xForseY(-2)).toBe(0.01);
  });

  test("11 ^ (-0.5) = 0.301511344577764", () => {
    calculator.clear();
    calculator.add(11);
    expect(calculator.xForseY(-0.5)).toBe(0.301511344577764);
  });
});

describe("TenForseX", () => {
  test("10 ^ 0 = 1", () => {
    calculator.clear();
    calculator.add(10);
    expect(calculator.xForseY(0)).toBe(1);
  });

  test("10 ^ 2 = 100", () => {
    calculator.clear();
    calculator.add(10);
    expect(calculator.xForseY(2)).toBe(100);
  });

  test("10 ^ -2 = 0.01", () => {
    calculator.clear();
    calculator.add(10);
    expect(calculator.xForseY(-2)).toBe(0.01);
  });
});

describe("OneDivideX", () => {
  test('1 / 0 = "Error"', () => {
    calculator.clear();
    calculator.add(1);

    expect(calculator.oneDivideX(0)).toBe(errorMessage);
  });

  test("1 / 10 = 0.1", () => {
    calculator.clear();
    calculator.add(1);
    expect(calculator.oneDivideX(10)).toBe(0.1);
  });

  test("1 / -9 = -0.1111111111111111", () => {
    calculator.clear();
    calculator.add(1);
    expect(calculator.oneDivideX(-9)).toBe(-0.1111111111111111);
  });

  test("1 / 0.5 = 2", () => {
    calculator.clear();
    calculator.add(1);
    expect(calculator.oneDivideX(0.5)).toBe(2);
  });

  test("1 / -0.4 = -2,5", () => {
    calculator.clear();
    calculator.add(1);
    expect(calculator.oneDivideX(-0.4)).toBe(-2.5);
  });
});

describe("TwoRootX", () => {
  test("²√0 = 0", () => {
    calculator.clear();

    expect(calculator.twoRootX(0)).toBe(0);
  });

  test("²√4 = 2", () => {
    calculator.clear();
    expect(calculator.twoRootX(4)).toBe(2);
  });

  test('²√-4 = "Error"', () => {
    calculator.clear();
    expect(calculator.twoRootX(-4)).toBe(errorMessage);
  });

  test('²√-0.5 = "Error"', () => {
    calculator.clear();
    expect(calculator.twoRootX(-0.5)).toBe(errorMessage);
  });

  test("²√0.25 = 0.5", () => {
    calculator.clear();
    expect(calculator.twoRootX(0.25)).toBe(0.5);
  });
});

describe("ThreeRootX", () => {
  test("³√0 = 0", () => {
    calculator.clear();
    expect(calculator.threeRootX(0)).toBe(0);
  });

  test("³√8 = 2", () => {
    calculator.clear();
    expect(calculator.threeRootX(8)).toBe(2);
  });

  test("³√-8 = -2", () => {
    calculator.clear();
    expect(calculator.threeRootX(-8)).toBe(-2);
  });

  test('³√-0.125 = "-0.5"', () => {
    calculator.clear();
    expect(calculator.threeRootX(-0.125)).toBe(-0.5);
  });

  test("³√0.125 = 0.5", () => {
    calculator.clear();
    expect(calculator.threeRootX(0.125)).toBe(0.5);
  });
});

describe("YRootX", () => {
  test('0 ^ 0 = "Error', () => {
    calculator.clear();
    expect(calculator.yRootX(0)).toBe(errorMessage);
  });

  test("-125 ^  1/3 = -5", () => {
    calculator.clear();
    calculator.add(-125);

    expect(calculator.yRootX(3)).toBe(-5);
  });

  test("-0.125 ^  1/3 = -0.5", () => {
    calculator.clear();
    calculator.add(-0.125);
    expect(calculator.yRootX(3)).toBe(-0.5);
  });

  test('-125 ^  1/2 = "Error"', () => {
    calculator.clear();
    calculator.add(-125);
    expect(calculator.yRootX(2)).toBe(errorMessage);
  });

  test('-0.125 ^  1/2 = "Error"', () => {
    calculator.clear();
    calculator.add(-0.125);
    expect(calculator.yRootX(2)).toBe(errorMessage);
  });

  test('125 ^  1/-2 = "Error"', () => {
    calculator.clear();
    calculator.add(125);
    expect(calculator.yRootX(-2)).toBe(errorMessage);
  });

  test('125 ^  1/-3 = "Error"', () => {
    calculator.clear();
    calculator.add(125);
    expect(calculator.yRootX(-3)).toBe(errorMessage);
  });

  test("9 ^  1/0,5 = 81", () => {
    calculator.clear();
    calculator.add(9);
    expect(calculator.yRootX(0.5)).toBe(81);
  });
});

describe("ChangePlusMinus", () => {
  test("+/- 5 = -5", () => {
    calculator.clear();
    expect(calculator.changePlusMinus(5)).toBe(-5);
  });

  test("+/-  -0.002 = 0.002", () => {
    calculator.clear();
    expect(calculator.changePlusMinus(-0.002)).toBe(0.002);
  });
});

describe("PercentFromNumber", () => {
  test(" 0 % = 0", () => {
    calculator.clear();
    expect(calculator.percentFromNumber(0)).toBe(0);
  });

  test(" -6 % = -0.06", () => {
    calculator.clear();
    expect(calculator.percentFromNumber(-6)).toBe(-0.06);
  });

  test(" 0.05 % = 0.0005", () => {
    calculator.clear();
    expect(calculator.percentFromNumber(0.05)).toBe(0.0005);
  });
});

describe("Factorial", () => {
  test("0! = 1", () => {
    calculator.clear();
    expect(calculator.facX(0)).toBe(1);
  });

  test("1! = 1", () => {
    calculator.clear();
    expect(calculator.facX(1)).toBe(1);
  });

  test("3! = 6", () => {
    calculator.clear();
    expect(calculator.facX(3)).toBe(6);
  });

  test('-9! = "Error"', () => {
    calculator.clear();
    expect(calculator.facX(-9)).toBe(errorMessage);
  });

  test('0.5! = "Error"', () => {
    calculator.clear();
    expect(calculator.facX(0.5)).toBe(errorMessage);
  });
});

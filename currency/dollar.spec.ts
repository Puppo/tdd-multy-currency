import { Money } from "./money";
import { dollar } from "./dollar";

describe("Dollar", () => {
  test("should return the correct multiplication from dollar", () => {
    const testCases = [
      { value: 5, multiplier: 2, result: 10 },
      { value: 5, multiplier: 3, result: 15 },
    ];
    for (let i = 0; i < testCases.length; i++) {
      const { value, multiplier, result } = testCases[i];
      const start = dollar(value);
      const product = start.times(multiplier);
      expect(product.equals(dollar(result))).toBeTruthy();
    }
  });

  test("should check the equality", () => {
    expect(dollar(5).equals(dollar(5))).toBeTruthy();
    expect(dollar(5).equals(dollar(10))).toBeFalsy();
  });
});

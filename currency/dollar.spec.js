const Dollar = require("./dollar");

describe("Dollar", () => {
  test("should return the correct multiplication from dollar", () => {
    const testCases = [
      { value: 5, multiplier: 2, result: 10 },
      { value: 5, multiplier: 3, result: 15 },
    ];
    for (let i = 0; i < testCases.length; i++) {
      const { value, multiplier, result } = testCases[i];
      const start = new Dollar(value);
      const product = start.times(multiplier);
      expect(product.equals(new Dollar(result))).toBeTruthy();
    }
  });

  test("should check the equality", () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy();
    expect(new Dollar(5).equals(new Dollar(10))).toBeFalsy();
  });
});

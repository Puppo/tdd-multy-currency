const Dollar = require("./dollar");

describe("Dollar", () => {
  test("should return the correct multiplication from dollar", () => {
    const inputs = [
      { value: 5, multiplier: 2 },
      { value: 5, multiplier: 3 },
    ];
    const products = [10, 15];
    for (let i = 0; i < inputs.length; i++) {
      const { value, multiplier } = inputs[i];
      const five = new Dollar(value);
      const product = five.times(multiplier);
      expect(product.amount).toBe(products[i]);
    }
  });
});

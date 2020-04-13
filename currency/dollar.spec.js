const Dollar = require("./dollar");

describe("Dollar", () => {
  test("should return `10$` if the operation is `5$ * 2`", () => {
    const five = new Dollar(5);
    five.times(2);
    expect(five.amount).toBe(10);
  });

  test("should return `15$` if the operation is `5$ * 3`", () => {
    const five = new Dollar(5);
    five.times(3);
    expect(five.amount).toBe(15);
  });
});

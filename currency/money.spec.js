const Dollar = require("./dollar");
const Franc = require("./franc");

describe("Money", () => {
  test("should check equality from difference currency", () => {
    expect(new Dollar(5).equals(new Franc(5))).toBeFalsy();
    expect(new Franc(10).equals(new Dollar(10))).toBeFalsy();
  });
});

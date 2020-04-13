const Franc = require("./franc");

describe("Franc", () => {
  test("should multiple correct franc", () => {
    const five = new Franc(5);
    expect(new Franc(10).equals(five.times(2))).toBeTruthy();
    expect(new Franc(15).equals(five.times(3))).toBeTruthy();
  });
});

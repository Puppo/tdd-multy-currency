import { franc } from "./franc";

describe("Franc", () => {
  test("should multiple correct franc", () => {
    const five = franc(5);
    expect(franc(10).equals(five.times(2))).toBeTruthy();
    expect(franc(15).equals(five.times(3))).toBeTruthy();
  });
});

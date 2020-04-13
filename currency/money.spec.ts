import { Money } from "./money";
describe("Money", () => {
  test("should multiple correct Money.dollar", () => {
    const five = Money.dollar(5);
    expect(Money.dollar(10).equals(five.times(2))).toBeTruthy();
    expect(Money.dollar(15).equals(five.times(3))).toBeTruthy();
  });

  test("should multiple correct Money.franc", () => {
    const five = Money.franc(5);
    expect(Money.franc(10).equals(five.times(2))).toBeTruthy();
    expect(Money.franc(15).equals(five.times(3))).toBeTruthy();
  });

  test("should check the equality", () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(10))).toBeFalsy();

    expect(Money.dollar(5).equals(Money.franc(5))).toBeFalsy();
    expect(Money.franc(10).equals(Money.dollar(10))).toBeFalsy();
  });

  test("should check the currency", () => {
    expect(Money.dollar(5).currency).toBe("USD");
    expect(Money.franc(5).currency).toBe("CHF");
  });
});

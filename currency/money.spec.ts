import { Money } from "./money";
import { Expression } from "./expression";
import { Bank } from "./bank";
import { Sum } from "./sum";

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

  test("should sum same currency", () => {
    const five = Money.dollar(5);
    const result: Expression = five.plus(five);
    const sum = result as Sum;
    const bank = new Bank();
    const reduced = bank.reduce(sum, "USD");
    expect(reduced.equals(Money.dollar(10))).toBeTruthy();
  });

  test("should back reduce money", () => {
    const bank = new Bank();
    const result = bank.reduce(Money.dollar(1), "USD");
    expect(Money.dollar(1).equals(result));
  });
});

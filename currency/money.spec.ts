import { Franc } from "./franc";
import { Dollar } from "./dollar";

describe("Money", () => {
  test("should check equality from difference currency", () => {
    expect(new Dollar(5).equals(new Franc(5))).toBeFalsy();
    expect(new Franc(10).equals(new Dollar(10))).toBeFalsy();
  });
});

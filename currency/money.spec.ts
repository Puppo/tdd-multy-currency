import { dollar } from "./dollar";
import { franc } from "./franc";

describe("Money", () => {
  test("should check equality from difference currency", () => {
    expect(dollar(5).equals(franc(5))).toBeFalsy();
    expect(franc(10).equals(dollar(10))).toBeFalsy();
  });
});

import { describe, expect, it } from "vitest";
import formatPrice from "../utilities/formatPrice";

describe("Utility formatPrice", () => {
  it("Returns 'undefined' if parameter is NaN", () => {
    expect(formatPrice("foo")).toBeUndefined();
  });

  it("Returns '$3.50' if parameter is, a string, '3.5'", () => {
    expect(formatPrice("3.5")).toBe("$3.50");
  });

  it("Returns '$1,234.00' if parameter is, a number, '1234'", () => {
    expect(formatPrice(1234)).toBe("$1,234.00");
  });

  it("Returns '-$123,456,789.01' if parameter is, a string, '-123456789.009'", () => {
    expect(formatPrice("-123456789.009")).toBe("-$123,456,789.01");
  });
});

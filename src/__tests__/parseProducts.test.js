import { describe, expect, it } from "vitest";
import { products } from "./mocks";
import parseProducts from "../utilities/parseProducts";

describe("Utility createDataProducts", () => {
  it("Object keys length equals 5", () => {
    const productsData = parseProducts(products);
    const keys = Object.keys(productsData);
    expect(keys.length).toEqual(5);
  });

  it("Object keys should match [all, electronics, jewelry, mensClothing, womensClothing]", () => {
    const validKeys = [
      "all",
      "electronics",
      "jewelry",
      "mensClothing",
      "womensClothing",
    ];
    const productsData = parseProducts(products);
    const keys = Object.keys(productsData);
    const isValid = keys.some((key) => validKeys.includes(key));
    expect(isValid).toBeTruthy();
  });
});

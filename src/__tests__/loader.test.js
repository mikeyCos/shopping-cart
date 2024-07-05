import { beforeEach, describe, expect, it, vi } from "vitest";
import loader from "../routes/loader";
import { fetchMock, categories, products } from "./mocks";
import parseProducts from "../utilities/parseProducts";

beforeEach(() => {
  vi.mock("../utilities/parseProducts");
});

describe("Loader module", () => {
  it("The mock function, fetchMock, is called twice", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    fetchSpy.mockResolvedValue({
      json: vi
        .fn()
        .mockReturnValueOnce(categories)
        .mockReturnValueOnce(products),
    });
    loader();

    expect(fetchSpy).toBeCalledTimes(2);
  });

  it("The mock function, parseProductsMock, is called once", () => {
    fetchMock();
    expect(parseProducts).toBeCalledTimes(1);
  });
});

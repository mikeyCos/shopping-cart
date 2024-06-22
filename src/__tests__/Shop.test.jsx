import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { fetchMock } from "./mocks";
import Shop from "../components/Shop";
import parseProducts from "../utilities/parseProducts";

/* Optional
 * Define fetchMock here
 * expect(fetchMock).toBeCalledTimes
 */
/* const fetchMock = vi.fn(() => {
  json: vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products);
});
vi.stubGlobal("fetch", fetchMock);
vi.mock("../utilities/parseProducts");
 */

beforeEach(() => {
  vi.mock("../utilities/parseProducts");
  fetchMock();
});

describe("Shop component", () => {
  it("The mock function, fetchMock, is called twice", () => {
    const spyFetch = vi.spyOn(globalThis, "fetch");
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Shop />
      </MemoryRouter>
    );

    expect(spyFetch).toBeCalledTimes(2);
  });

  it("The mock function, parseProductsMock, is called once", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );

    expect(parseProducts).toBeCalledTimes(1);
  });

  it("The Shop component is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    );
    const shopSection = await screen.findByText("Shop section");
    expect(shopSection).toBeInTheDocument();
  });

  it("Renders correct text while API request is in progress", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Shop />
      </MemoryRouter>
    );
    const categories = screen.getByTitle("Loading");
    expect(categories).toBeInTheDocument();
    await waitForElementToBeRemoved(() => screen.getByTitle("Loading"));
  });

  it("Renders correct text when fetch fails", async () => {
    window.fetch.mockImplementationOnce(() =>
      Promise.reject({ message: "API is down" })
    );

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Shop />
      </MemoryRouter>
    );

    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });

  it("The 'All' category is first in the categories list", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Shop />
      </MemoryRouter>
    );

    const categoriesList = await screen.findByRole("list");
    const categoriesListItems = categoriesList.children;
    const firstCategory = categoriesListItems[0];
    expect(firstCategory.textContent).match(/all/i);
  });
});

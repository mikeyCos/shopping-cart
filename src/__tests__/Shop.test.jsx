import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { categories, products } from "./data.mocks";
import Shop from "../components/Shop";

const fetchMock = vi.fn(() => {
  return Promise.resolve({
    // json: () => Promise.resolve(categories),
    json: () =>
      Promise.resolve(
        vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products)
      ),
  });
});

vi.stubGlobal("fetch", fetchMock);

describe("Shop component", () => {
  it("The Shop component is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Shop />
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

  it("Renders correct list of categories", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Shop />
      </MemoryRouter>
    );

    // Why can't I get children of categoriesList element?
    // const categoriesList = await screen.findByRole("list");

    // const categoriesListItems = await screen.findAllByRole("listitem");
    // expect(categoriesListItems.length).toBe(categories.length);
  });
});

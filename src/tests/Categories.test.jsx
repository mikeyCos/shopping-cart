import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "../components/Categories";

// const categories = [
//   "electronics",
//   "jewelery",
//   "men's clothing",
//   "women's clothing",
// ];

// window.fetch = vi.fn(() => {
//   return Promise.resolve({
//     json: () => Promise.resolve(categories),
//   });
// });

describe("Categories component", () => {
  it("The Categories component is rendered", async () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Categories />
      </MemoryRouter>
    );
    const categoriesComponent = await screen.findByRole("article");
    expect(categoriesComponent).toBeInTheDocument();
  });

  // it("Renders correct text while API request is in progress", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/shop"]}>
  //       <Categories />
  //     </MemoryRouter>
  //   );
  //   const categoriesComponentLoading = screen.getByTitle("Loading");
  //   expect(categoriesComponentLoading).toBeInTheDocument();

  //   await waitForElementToBeRemoved(() => screen.getByTitle("Loading"));
  // });

  // it("Renders correct list of categories", async () => {
  //   render(
  //     <MemoryRouter initialEntries={["/shop"]}>
  //       <Categories />
  //     </MemoryRouter>
  //   );
  //   const categoriesList = await screen.findByRole("list");
  //   const categoriesListItems = categoriesList.children;
  //   expect(categoriesListItems.length).toBe(categories.length);
  // });

  // it("Renders correct text when fetch fails", async () => {
  //   window.fetch.mockImplementationOnce(() =>
  //     Promise.reject({ message: "API is down" })
  //   );

  //   render(
  //     <MemoryRouter initialEntries={["/shop"]}>
  //       <Categories />
  //     </MemoryRouter>
  //   );

  //   const errorMessage = await screen.findByText("API is down");
  //   expect(errorMessage).toBeInTheDocument();
  // });
});

// Examples for fetching categories data from an API
/*
End result, after fetch and parse
[
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]
*/

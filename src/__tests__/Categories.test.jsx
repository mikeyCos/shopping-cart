import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "../components/Categories";
import { categories } from "./data.mocks";

describe("Categories component", () => {
  it("The Categories component with categories prop matches snapshot", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Categories categories={categories} />
      </MemoryRouter>
    );

    // const categoriesComponent = await screen.findByRole("article");
    // expect(categoriesComponent).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("The Categories component without categories prop renders Loading component", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Categories />
      </MemoryRouter>
    );

    const categories = screen.getByTitle("Loading");
    expect(categories).toBeInTheDocument();
  });

  it("The categories list should have 5 items", () => {
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Categories categories={categories} />
      </MemoryRouter>
    );

    const categoriesList = screen.getByRole("list");
    expect(categoriesList.children.length).toEqual(categories.length);
  });
});

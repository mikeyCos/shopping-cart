import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Categories from "../components/Categories";
import { categories } from "./mocks";

describe("Categories component", () => {
  it("The Categories component with categories prop matches snapshot", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Categories categories={categories} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
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

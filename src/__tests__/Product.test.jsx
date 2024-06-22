import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "../components/Product";
import { product } from "./mocks";

describe("Product component", () => {
  it("Product component matches snapshot", () => {
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const productCard = screen.getByRole("article");
    expect(productCard).toMatchSnapshot();
  });
});

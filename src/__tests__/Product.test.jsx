import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "../components/Product";
import { product } from "./data.mocks";

describe("Product component", () => {
  it("Product component matches inline snapshot", () => {
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

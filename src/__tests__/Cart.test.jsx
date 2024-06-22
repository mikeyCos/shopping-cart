import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../components/Cart";

describe("Cart component", () => {
  const initialEntries = [
    { pathname: "/", state: { previousLocation: "/shop" } },
  ];

  it("The Cart component is rendered", () => {
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Cart />
      </MemoryRouter>
    );
    const cartSection = screen.getByText("Cart");
    expect(cartSection).toBeInTheDocument();
  });
});

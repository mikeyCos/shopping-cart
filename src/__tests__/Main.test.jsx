import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main from "../components/Main";
import { CartProvider } from "../components/Cart";

describe("Main component", () => {
  it("The Main component is rendered", () => {
    const initialEntries = [
      { pathname: "/cart", state: { previousLocation: "/shop/cart" } },
    ];

    render(
      <CartProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Main />
        </MemoryRouter>
      </CartProvider>
    );
    const main = screen.getByRole("main");

    expect(main).toBeInTheDocument();
  });
});

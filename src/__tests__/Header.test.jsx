import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { CartContext } from "../components/Cart";
/* Testing components that renders a <Link> or a <Route>
 * https://v5.reactrouter.com/web/guides/testing
 */

describe("Header component", () => {
  // Cannot test header with Link components from react-router-dom
  it("The Header component is rendered", () => {
    render(
      <CartContext.Provider value={{ cart: [] }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartContext.Provider>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("A nav element is rendered", () => {
    render(
      <CartContext.Provider value={{ cart: [] }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartContext.Provider>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("There are exactly 2 list elements inside the nav element", () => {
    render(
      <CartContext.Provider value={{ cart: [] }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartContext.Provider>
    );
    const lists = screen.getAllByRole("list");
    expect(lists.length).equal(2);
  });

  it("The cart will have a notification bubble with the value '2", () => {
    render(
      <CartContext.Provider value={{ cart: [{}, {}] }}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const cartNumber = screen.getByText("2");
    expect(cartNumber.textContent).toMatch(/2/);
  });
});

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Cart from "../components/Cart";
import CartProvider, { CartContext } from "../context/CartContext";
import { product, products } from "./mocks";
import userEvent from "@testing-library/user-event";

describe("Cart component", () => {
  const initialEntries = [
    { pathname: "/cart", state: { previousLocation: "/shop/cart" } },
  ];

  it("'Cart is empty' is rendered", () => {
    render(
      <CartProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Cart />
        </MemoryRouter>
      </CartProvider>
    );
    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading.textContent).toMatch(/Cart is empty/i);
  });

  it("Cart component matches snapshot", () => {
    const initialEntries = [
      { pathname: "/cart", state: { previousLocation: "/shop/cart" } },
    ];

    const { container } = render(
      <CartContext.Provider value={{ cart: [{ ...product, quantity: 1 }] }}>
        <MemoryRouter initialEntries={initialEntries}>
          <Cart />
        </MemoryRouter>
      </CartContext.Provider>
    );

    expect(container).matchSnapshot();
  });

  it("There are 20 products in the cart", () => {
    const initialEntries = [
      { pathname: "/cart", state: { previousLocation: "/shop/carts" } },
    ];

    const cartProducts = products.map((product) => ({
      ...product,
      quantity: Math.floor(Math.random() * 5) + 1,
    }));
    render(
      <CartContext.Provider value={{ cart: cartProducts }}>
        <MemoryRouter initialEntries={initialEntries}>
          <Cart />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const productCards = screen.getAllByRole("article");
    expect(productCards.length).toBe(20);
  });

  it("The delete button's onClick handler fires and is provided with it's respective productID", async () => {
    const user = userEvent.setup();
    const initialEntries = [
      { pathname: "/cart", state: { previousLocation: "/shop/carts" } },
    ];

    const cartProducts = products.map((product) => ({
      ...product,
      quantity: Math.floor(Math.random() * 5) + 1,
    }));

    const removeFromCart = vi.fn((productID) => {});

    render(
      <CartContext.Provider
        value={{
          cart: cartProducts,
          removeFromCart,
        }}
      >
        <MemoryRouter initialEntries={initialEntries}>
          <Cart />
        </MemoryRouter>
      </CartContext.Provider>
    );

    const deleteButtons = screen.getAllByRole("button", { name: "Delete" });

    await user.click(deleteButtons[2]);
    expect(removeFromCart).toBeCalledWith(3);
  });
});

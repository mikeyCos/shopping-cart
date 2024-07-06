import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "../components/Product";
import { product } from "./mocks";
import userEvent from "@testing-library/user-event";
import { CartProvider } from "../components/Cart";

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

  it("Initial quantity input is 1", () => {
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const quantityInput = screen.getByRole("textbox");
    expect(quantityInput.value).toBe("1");
  });

  it("10 is typed into the quantity input", async () => {
    const user = userEvent.setup();
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const quantityInput = screen.getByRole("textbox");

    await user.clear(quantityInput);
    await user.type(quantityInput, "10");

    expect(quantityInput.value).toBe("10");
  });

  it("Quantity input will have focus after clicking it", async () => {
    const user = userEvent.setup();
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const quantityInput = screen.getByRole("textbox");

    await user.click(quantityInput);

    expect(quantityInput).toHaveFocus();
  });

  it("Clicking the incrementButton increases the quantity input's value by 1 ", async () => {
    const user = userEvent.setup();
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <CartProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Product />
        </MemoryRouter>
      </CartProvider>
    );

    const quantityInput = screen.getByRole("textbox");
    const incrementButton = screen.getByLabelText("increment quantity");

    await user.click(incrementButton);
    expect(quantityInput.value).toBe("2");
  });

  it("The up arrow increases the quantity input's value by 1", async () => {
    const user = userEvent.setup();
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const quantityInput = screen.getByRole("textbox");

    await user.click(quantityInput);
    await user.keyboard("[ArrowUp]");
    expect(quantityInput.value).toBe("2");
  });
});

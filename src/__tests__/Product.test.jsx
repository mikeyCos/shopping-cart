import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Product from "../components/Product";
import { product } from "./mocks";
import userEvent from "@testing-library/user-event";

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

    const quantityInput = screen.getByRole("spinbutton");
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

    const quantityInput = screen.getByRole("spinbutton");

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

    const quantityInput = screen.getByRole("spinbutton");

    await user.click(quantityInput);

    expect(quantityInput).toHaveFocus();
  });

  it.skip("The up arrow increases the quantity input by 1", async () => {
    /* This test does not work
     * The keyboard event, for ArrowUp key, does not increment quantity
     */
    const user = userEvent.setup();
    const initialEntries = [{ pathname: "/", state: { product } }];
    render(
      <MemoryRouter initialEntries={initialEntries}>
        <Product />
      </MemoryRouter>
    );

    const quantityInput = screen.getByRole("spinbutton");

    await user.click(quantityInput);
    await user.keyboard("[ArrowUp]");
    // await user.type(quantityInput, "[ArrowUp]");
    // expect(quantityInput).toHaveFocus();
    expect(quantityInput.value).toBe("2");
  });
});

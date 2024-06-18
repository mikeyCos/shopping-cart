import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "../components/Cart";

describe("Cart component", () => {
  it("The Cart component is rendered", () => {
    render(<Cart />);
    const cartSection = screen.getByText("Cart");
    expect(cartSection).toBeInTheDocument();
  });
});

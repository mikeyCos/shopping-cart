import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

describe("Home component", () => {
  it("The Home component is rendered", () => {
    // Instead, get heading role for the home section
    render(<Home />);
    const homeSection = screen.getByText("Home section");
    expect(homeSection).toBeInTheDocument();
  });
});

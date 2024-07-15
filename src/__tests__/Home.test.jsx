import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "../components/Home";

describe("Home component", () => {
  it("The Home component is rendered", () => {
    // Instead, get heading role for the home section
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});

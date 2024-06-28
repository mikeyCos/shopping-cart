import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavAnchor from "../components/NavAnchor";

describe("NavAnchor component", () => {
  it("NavAnchor component matches snapshot", () => {
    const pathname = "placeholder";
    const { container } = render(
      <MemoryRouter>
        <NavAnchor pathname={pathname} />
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  it("NavAnchor textContent is 'home ", () => {
    const pathname = "home";
    render(
      <MemoryRouter>
        <NavAnchor pathname={pathname} />
      </MemoryRouter>
    );

    const anchor = screen.getByRole("link");
    expect(anchor.textContent).toMatch(/home/i);
  });
});

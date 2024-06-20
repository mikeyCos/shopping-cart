import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
/* Testing components that renders a <Link> or a <Route>
 * https://v5.reactrouter.com/web/guides/testing
 */

describe("Header component", () => {
  // Cannot test header with Link components from react-router-dom
  it("The Header component is rendered", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("A nav element is rendered", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("There are exactly 2 list elements inside the nav element", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const lists = screen.getAllByRole("list");
    expect(lists.length).equal(2);
  });
});

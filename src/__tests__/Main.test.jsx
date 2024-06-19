import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Main from "../components/Main";

describe("Main component", () => {
  it("The Main component is rendered", () => {
    render(<Main />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();
  });
});

import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Placeholder_01 from "../components/Placeholder_01";

describe("Placeholder_01 component", () => {
  it("The Placeholder_01 component is rendered", () => {
    render(<Placeholder_01 />);
    const placeholder_01Section = screen.getByText("Placeholder_01");
    expect(placeholder_01Section).toBeInTheDocument();
  });
});

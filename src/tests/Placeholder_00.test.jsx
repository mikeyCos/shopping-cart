import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Placeholder_00 from "../components/Placeholder_00";

describe("Placeholder_00 component", () => {
  it("The Placeholder_00 component is rendered", () => {
    render(<Placeholder_00 />);
    const placeholder_00Section = screen.getByText("Placeholder_00");
    expect(placeholder_00Section).toBeInTheDocument();
  });
});

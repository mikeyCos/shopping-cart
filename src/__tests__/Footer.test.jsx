import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  it("The Footer component matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});

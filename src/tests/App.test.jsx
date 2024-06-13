import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("The App component is rendered", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});

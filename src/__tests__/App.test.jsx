import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "../routes/routes";

describe("App component", () => {
  it("The App component matches snapshot", () => {
    const router = createBrowserRouter(routes, { initialEntries: ["/"] });
    const { container } = render(<App router={router} />);
    expect(container).toMatchSnapshot();
  });

  it("Renders splash screen on load and while API request is in progress", () => {
    const router = createBrowserRouter(routes, { initialEntries: ["/"] });
    render(<App router={router} />);
    const loading = screen.getByTitle("Loading");
    expect(loading).toBeInTheDocument();
  });
});

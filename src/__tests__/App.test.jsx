import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import routes from "../routes/routes";

beforeEach(() => {
  window.scrollTo = vi.fn();
});

describe("App component", () => {
  it("The App component matches snapshot", async () => {
    const router = createBrowserRouter(routes);
    const { container } = render(<App router={router} />);

    await waitForElementToBeRemoved(() => screen.getByTitle("Loading"));
    expect(container).toMatchSnapshot();
  });

  it("Renders splash screen on load and while API request is in progress", () => {
    const router = createBrowserRouter(routes, { initialEntries: ["/"] });
    render(<App router={router} />);
    const loading = screen.getByTitle("Loading");
    expect(loading).toBeInTheDocument();
  });
});

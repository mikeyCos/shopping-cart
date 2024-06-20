import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../components/ErrorPage";

describe("ErrorPage component", () => {
  it("The ErrorPage component is rendered", () => {
    render(<ErrorPage />);
    // Why can't I use getByRole('region')?
    // const errorPageSection = screen.getByText("Error");
    const errorPageSection = screen.getByRole("region");
    expect(errorPageSection).toBeInTheDocument();
  });

  it('The ErrorPage component text is "404 Page not found"', () => {
    const errorMessage = "404 Page not found";
    render(<ErrorPage errorMessage={errorMessage} />);
    expect(screen.getByText(errorMessage)).toHaveTextContent(errorMessage);
  });
});

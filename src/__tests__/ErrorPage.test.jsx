import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorPage from "../components/ErrorPage";

describe("ErrorPage component", () => {
  it("The ErrorPage component is rendered", () => {
    render(<ErrorPage />);
    const errorPageSection = screen.getByText("Error");
    expect(errorPageSection).toBeInTheDocument();
  });
});

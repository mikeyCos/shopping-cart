import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Loading from "../components/Loading";

describe("Loading component", () => {
  it("The Loading component is rendered", () => {
    render(<Loading />);
    const loadingComponent = screen.getByTitle("Loading");
    expect(loadingComponent).toBeInTheDocument();
  });
});

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import routes from "../routes/routes";

describe("ErrorPage component", () => {
  it("The ErrorPage component is rendered", () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/foo"] });

    render(
      <RouterProvider router={router}>
        <ErrorPage />
      </RouterProvider>
    );

    const errorPageSection = screen.getByRole("region");

    expect(errorPageSection).toBeInTheDocument();
  });

  it('The ErrorPage component text is "404 Page not found"', async () => {
    const errorMessage = "404 - Page not found";
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    fetchSpy.mockResolvedValue({
      status: 404,
      message: errorMessage,
    });

    const router = createMemoryRouter(routes, { initialEntries: ["/"] });

    render(<RouterProvider router={router} />);
    const errorPageSection = await screen.findByRole("region");

    expect(errorPageSection).toHaveTextContent(errorMessage);
  });
});

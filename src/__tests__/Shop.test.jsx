import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { fetchMock } from "./mocks";
import { CartProvider } from "../components/Cart";
import routes from "../routes/routes";

/* Optional
 * Define fetchMock here
 * expect(fetchMock).toBeCalledTimes
 */
/* const fetchMock = vi.fn(() => {
  json: vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products);
});
vi.stubGlobal("fetch", fetchMock);
vi.mock("../utilities/parseProducts");
 */

beforeEach(() => {
  vi.mock("../utilities/parseProducts");
  fetchMock();
});

describe("Shop component", () => {
  it("The Shop component is rendered", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );
    const shopSection = await screen.findByText("Shop section");
    expect(shopSection).toBeInTheDocument();
  });

  it("Renders correct text when fetch fails", async () => {
    const rejectCause = { status: 404 };
    window.fetch.mockRejectedValue(
      new Error("API is down", { cause: { ...rejectCause } })
    );
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );

    const errorMessage = await screen.findByText("API is down");
    expect(errorMessage).toBeInTheDocument();
  });

  it("The 'All' category is first in the categories list", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );

    const lists = await screen.findAllByRole("list");
    const categoriesListItems = lists.find((list) =>
      list.textContent.match(/all/i)
    ).children;

    const firstCategory = categoriesListItems[0];
    expect(firstCategory.textContent).match(/all/i);
  });
});

import { beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import routes from "../routes/routes";
import { fetchMock, parsedProducts } from "./mocks";
import { CartProvider } from "../components/Cart";

/* Optional
 * Define fetchMock here
 * expect(fetchMock).toBeCalledTimes
 */
/* const fetchMock = vi.fn(() => {
  json: vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products);
});
vi.stubGlobal("fetch", fetchMock);
// Why and how does mocking the module fix testing issues?
vi.mock("../utilities/parseProducts");
 */

beforeEach(() => {
  window.scrollTo = vi.fn();
  fetchMock();
});

describe("Category component (Outlet)", () => {
  // How to test Outlet component?
  // https://stackoverflow.com/questions/70654872/how-to-test-react-router-v6-outlet-using-testing-library-react
  it("Category component is rendered", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    const { container } = render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );

    expect(container).matchSnapshot();
  });

  it("20 products are listed for the 'all' category", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    const allProducts = parsedProducts["all"]; // length of 20
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );

    const productsList = await screen.findByRole("region");
    expect(productsList.children.length).toBe(allProducts.length);
  });

  it("4 products are listed for the 'jewelry' category", async () => {
    const category = "jewelery";
    const jewelry = parsedProducts[category]; // length of 4
    // console.log(jewelry);
    const router = createMemoryRouter(routes, {
      initialEntries: [`/shop/category/${category}`],
    });
    render(
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );

    const jewelryList = await screen.findByRole("region");
    expect(jewelryList.children.length).toBe(jewelry.length);
  });
});

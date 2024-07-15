import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { createMemoryRouter } from "react-router-dom";
import routes from "../routes/routes";
import { fetchMock, parsedProducts } from "./mocks";
import App from "../App";

/* Waiting for an SVG element to be removed throws a "Timed out in waitForElementToBeRemoved" error
 * https://github.com/testing-library/dom-testing-library/issues/1204#issuecomment-1605359381
 */

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
    const router = createMemoryRouter(routes, {
      initialEntries: ["/shop"],
    });

    const { container } = render(<App router={router} />);
    await waitForElementToBeRemoved(() => screen.queryByTitle("Loading"), {
      timeout: 2000,
    });

    expect(container).matchSnapshot();
  });

  it("20 products are listed for the 'all' category", async () => {
    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });
    const allProducts = parsedProducts["all"]; // length of 20

    render(<App router={router} />);
    await waitForElementToBeRemoved(() => screen.queryByTitle("Loading"), {
      timeout: 2000,
    });

    const productsList = await screen.findByRole("region");

    expect(productsList.children.length).toBe(allProducts.length);
  });

  it("4 products are listed for the 'jewelry' category", async () => {
    const category = "jewelery";
    const jewelry = parsedProducts[category]; // length of 4

    const router = createMemoryRouter(routes, {
      initialEntries: [`/shop/category/${category}`],
    });

    render(<App router={router} />);
    await waitForElementToBeRemoved(() => screen.queryByTitle("Loading"), {
      timeout: 2000,
    });

    const jewelryList = await screen.findByRole("region");

    expect(jewelryList.children.length).toBe(jewelry.length);
  });
});

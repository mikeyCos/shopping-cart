import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import {
  createBrowserRouter,
  MemoryRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { categories, products } from "./data.mocks";
import Category from "../components/Category";
import Shop from "../components/Shop";

const fetchMock = vi.fn(() => {
  return Promise.resolve({
    // json: () => Promise.resolve(categories),
    json: () =>
      Promise.resolve(
        vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products)
      ),
  });
});

vi.stubGlobal("fetch", fetchMock);

describe("Category component (Outlet)", () => {
  // How to test Outlet component?
  it("Category component is rendered", async () => {
    render(
      // <MemoryRouter initialEntries={["/shop/"]}>
      //   <Outlet context={[products]} />
      //   <Shop />
      // </MemoryRouter>
      <MemoryRouter initialEntries={["/shop/"]}>
        {/* <Routes>
          <Route element={<Shop />} path="/shop" />
        </Routes> */}
        <Shop />
      </MemoryRouter>
    );

    const categorySection = await screen.findByText("Category");
  });
});

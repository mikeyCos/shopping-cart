import { describe, expect, it, vi } from "vitest";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MemoryRouter, Route, Routes, useParams } from "react-router-dom";
import { categories, parsedProducts, products } from "./data.mocks";
import Shop from "../components/Shop";

const fetchMock = vi.fn(() => {
  return Promise.resolve({
    json: () =>
      Promise.resolve(
        vi.fn().mockReturnValueOnce(categories).mockReturnValueOnce(products)
      ),
  });
});

vi.stubGlobal("fetch", fetchMock);
// Why and how does mocking the module fix testing issues?
vi.mock("../utilities/parseProducts");

const Category = () => {
  const { category = "all" } = useParams();
  return (
    <section>
      <h2>Category</h2>
      {category && <h3>{category}</h3>}
      {products && (
        <section role="region">
          {parsedProducts[category].map((product) => (
            <article key={product.id}>
              <picture>
                <img src={product.image} />
              </picture>
              <div className="info">
                <h4>{product.title}</h4>
              </div>
            </article>
          ))}
        </section>
      )}
    </section>
  );
};

describe("Category component (Outlet)", () => {
  // How to test Outlet component?
  // https://stackoverflow.com/questions/70654872/how-to-test-react-router-v6-outlet-using-testing-library-react
  it("Category component is rendered", async () => {
    window.history.pushState({}, "Shop", "/shop/");
    const { container } = render(
      // <MemoryRouter initialEntries={["/shop"]}>
      //   <Routes>
      //     <Route path="/shop" element={<Shop />}>
      //       <Route path="/shop" element={<Category />} />
      //       <Route path="/shop/:category" element={<Category />} />
      //     </Route>
      //   </Routes>
      // </MemoryRouter>
      <MemoryRouter initialEntries={[`/shop`]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop/" element={<Category />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    await screen.findByRole("heading", { level: 3 });
    expect(container).matchSnapshot();
  });

  it("Category's heading text should be 'electronics'", async () => {
    const category = "electronics";
    const regExp = new RegExp(category); // regular expression: /electronics/
    render(
      <MemoryRouter initialEntries={[`/shop/category/${category}`]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop" element={<Category />} />
            <Route path="/shop/category/:category" element={<Category />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const categoryElectronics = await screen.findByRole("heading", {
      level: 3,
    });
    expect(categoryElectronics.textContent).toMatch(regExp);
  });

  it("20 products are listed for the 'all' category", async () => {
    const allProducts = parsedProducts["all"]; // length of 20
    render(
      <MemoryRouter initialEntries={[`/shop`]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop" element={<Category />} />
            <Route path="/shop/category/:category" element={<Category />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const productsList = await screen.findByRole("region");
    expect(productsList.children.length).toBe(allProducts.length);
  });

  it("20 products are listed for the 'electronics' category", async () => {
    const category = "electronics";
    const electronics = parsedProducts[category]; // length of 6
    render(
      <MemoryRouter initialEntries={[`/shop/category/${category}`]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop" element={<Category />} />
            <Route path="/shop/category/:category" element={<Category />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const electronicsList = await screen.findByRole("region");
    expect(electronicsList.children.length).toBe(electronics.length);
  });
});

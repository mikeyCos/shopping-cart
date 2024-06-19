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
  Route,
  RouterProvider,
  Routes,
  useOutlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { categories, products } from "./data.mocks";
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

const Category = () => {
  const { category = "all" } = useParams();
  return (
    <section>
      <h2>Category</h2>
      {category && <h3>{category}</h3>}
      {products && (
        <ul>
          {products[category].map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

describe("Category component (Outlet)", () => {
  // How to test Outlet component?
  // https://stackoverflow.com/questions/70654872/how-to-test-react-router-v6-outlet-using-testing-library-react
  it("Category component is rendered", async () => {
    window.history.pushState({}, "Shop", "/shop/");
    render(
      <MemoryRouter basename="/" initialEntries={["/shop"]}>
        <Routes>
          <Route path="/shop" element={<Shop />}>
            <Route path="/shop" element={<Category />} />
            <Route path="/shop/:category" element={<Category />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    const categorySection = await screen.findByText("Category");
    expect(categorySection).toBeInTheDocument();
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

  it("Children length for the category's products should be 20", async () => {
    const category = "electronics";
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

    const [categories, productsList] = await screen.findAllByRole("list");
    console.log(productsList.children);
    // expect(productsList.children.length).toBe(products.length);
  });
});

/*
products = {
  electronics: [],
  jewelry: [],
  mens-clothing: [],
  womens-clothing: [],
}

"men's clothing" => "mens_Clothing"


const replacer = (match, offSet, string) => {
    return match === `'` ? '' : '_'
}

"men's clothing".replace(/'|\s/g, replacer)

const replacer = (match, offSet, string) => {
    console.log("match:", match);
    console.log("offSet:", offSet);
    console.log("string:", string);
    return match === `'` ? '' : '_'
}

const regExp = /'|\s/g;
"men's clothing".replace(regExp, replacer)

const replacer = (match, offSet, string) => {
    console.log("match:", match);
    console.log("offSet:", offSet);
    console.log("string:", string);
    if (match === `'`) {
      return '';
    }
    return `_${string[offSet + 1].toUpperCase()}`;
}

const regExp = /'|\s/g;
"men's clothing".replace(regExp, replacer)
*/

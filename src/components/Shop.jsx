import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Categories from "./Categories";
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import parseProducts from "../utilities/parseProducts";
import parseCategory from "../utilities/parseCategory";
import styles from "../styles/Shop.module.css";

const Shop = () => {
  const [categories, setCategories] = useState(null);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const { category } = useParams();
  useEffect(() => {
    // Fetch categories here or in the Categories component?
    // Fetch categories from:
    //  https://fakestoreapi.com/products/categories
    // Fetch products from:
    //  https://fakestoreapi.com/products
    // Need to send data into Outlet and/or Categories component(s)
    Promise.all([
      fetch("https://fakestoreapi.com/products/categories"),
      fetch("https://fakestoreapi.com/products"),
      // fetch(""),
      // fetch(""),
    ])
      .then(([resCategories, resProducts]) => {
        // How to mock response status codes >= 400?
        if (resCategories.status >= 400) throw new Error("ERROR");
        return Promise.all([resCategories.json(), resProducts.json()]);
      })
      .then(([dataCategories, dataProducts]) => {
        const parsedProducts = parseProducts(dataProducts);
        setCategories(["all", ...dataCategories]);
        // setCategories(dataCategories);
        setProducts(parsedProducts);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <ErrorPage errorMessage={error} />;
  return (
    <section id="shop">
      Shop section
      {categories ? (
        <>
          <Categories categories={categories} />
          <Outlet context={[products]} />
        </>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Shop;

/*
  - Shop
    - Make use of https://fakestoreapi.com/
    - Individual card elements for each product
      - Is it possible to have clickable images that render a modal?
        - Each images is wrapped around a Link component
        - This will need a route
        - The modal's content is an outlet that renders the information of the product
      - Input quantity (type number)
        - (OPTIONAL), create custom increment and decrement buttons
        - Need to hide the inner-spin-button
        - https://stackoverflow.com/questions/75879418/how-to-remove-arrows-in-input-type-number-inside-the-input
      - Title
      - "Add To Cart" button

  - Going to the shop page
    - Creates a list of categories
      - Need to fetch categories from API
        - Should only fetch when shop page is loaded(?)
        - https://fakestoreapi.com/products/categories
      - These are links
      - This should always be visible on the shop page
      - "electronics", "jewelery", "men's clothing", "women's clothing"
      - Clicking "jewelery" sends path from /shop/ to /shop/jewelery
        - Fetch https://fakestoreapi.com/products/category/${category}
          - In this example, category = 'jewelery'
        - The path should now be /shop/category/${category}
    - Index should be the all products

  - When does it make sense to fetch data from an API?
    - If I fetch from an API on load, when the application/website first loads
      - The application will need to use more resources on load
      - All data is fetched one time
    - If I fetch from an API only when it is needed
      - The application will sparingly use resources
      - Data is fetched more than one time
*/

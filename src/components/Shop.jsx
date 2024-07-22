import { Outlet, useRouteLoaderData } from "react-router-dom";
import Categories from "./Categories";
import styles from "../styles/Shop.module.css";

const Shop = () => {
  const { categories, products } = useRouteLoaderData("root");
  return (
    <section id={styles["shop"]}>
      <Categories categories={categories} />
      <Outlet context={[products]} />
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

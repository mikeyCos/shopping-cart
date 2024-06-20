import { useLocation } from "react-router-dom";
import DefaultRoutes, { ProductRoutes } from "./routes/routes";
import styles from "./styles/App.module.css";

const App = () => {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  return (
    <div id={styles.app}>
      <DefaultRoutes location={previousLocation || location} />
      {previousLocation && <ProductRoutes />}
    </div>
  );
};

export default App;

/*
Navigation bar
  - Logo Link
    - Goes to root
  - Home Link
    - Goes to root
  - Shop Link
    - Goes to shop page
  - Shopping cart Link
    - If cart has an item, show a number near the cart icon
    - Goes to a checkout page
Two pages
  - Home
    - Contain filler content
  - Shop
    - Make use of https://fakestoreapi.com/
    - Individual card elements for each product
      - Input quantity (type number)
        - (OPTIONAL), create custom increment and decrement buttons
        - Need to hide the inner-spin-button
        - https://stackoverflow.com/questions/75879418/how-to-remove-arrows-in-input-type-number-inside-the-input
      - Title
      - "Add To Cart" button
*/

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import styles from "./styles/App.module.css";

const router = createBrowserRouter(routes);

const App = () => {
  return (
    <div id={styles.app}>
      <RouterProvider router={router} />
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
  - Shopping cart Link
    - If cart has an item, show a number near the cart icon
    - Goes to a checkout page
Two pages
  - Home
    - Can contain filler content
  - Shop
    - Make use of https://fakestoreapi.com/
    - 
*/

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import Loading from "./components/Loading";
import CartProvider from "./context/CartContext";
import styles from "./styles/App.module.css";

// const App = () => {
//   const router = createBrowserRouter(routes);
//   return (
//     <div id={styles.app}>
//       <CartProvider>
//         <RouterProvider router={router} />
//       </CartProvider>
//     </div>
//   );
// };

/* Splash screen with react-router
 * https://www.saurabhmisra.dev/react-router-splash-screen/
 * https://www.youtube.com/watch?v=s2-mZBf-LVE
 * For initial load or page refresh, how to render a splash screen with Suspense and Await?
 */
const App = ({ router }) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const splashScreenInterval = setInterval(() => {
      const navState = router.state.navigation.state;
      if (navState == "idle") {
        setShowSplashScreen(false);
        clearInterval(splashScreenInterval);
      }
    }, 1000);

    () => clearInterval(splashScreenInterval);
  });

  return (
    <div id={styles.app}>
      {showSplashScreen ? (
        <Loading />
      ) : (
        <>
          <CartProvider>
            <RouterProvider router={router} />
          </CartProvider>
        </>
      )}
    </div>
  );
};

App.propTypes = {
  router: PropTypes.object.isRequired,
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
- BrowserRouter does not support the react-router-dom data APIs
*/

import { Link } from "react-router-dom";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "./Cart";
import NavAnchor from "./NavAnchor";
import CartIcon from "../assets/icons/cart-variant.svg?react";
import AppLogo from "../assets/illustrations/undraw_shopping_app.svg?react";
import GitHubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import styles from "../styles/Header.module.css";
import iconStyles from "../styles/icons.module.css";
import illustrationsStyles from "../styles/illustrations.module.css";

const Header = () => {
  const cartNumberRef = useRef(null);
  const { cart, isUpdatingCart } = useContext(CartContext);

  useEffect(() => {
    // Is there another way to achieve this without the useEffect hook?
    if (isUpdatingCart) {
      const tempStyles = styles["cart-number-changing"];
      cartNumberRef.current?.classList.add(tempStyles);
      setTimeout(() => {
        cartNumberRef.current?.classList.remove(tempStyles);
      }, 500);
    }
  });

  return (
    <header className={styles["header"]}>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-left"]}>
          <li>
            <Link to="/">
              <AppLogo className={illustrationsStyles["logo"]} />
              <h1>Shopping Cart App</h1>
            </Link>
          </li>
        </ul>

        <ul className={styles["nav-right"]}>
          <li>
            <NavAnchor pathname="/home" text="home" />
          </li>

          <li>
            <NavAnchor pathname="/shop" text="shop" />
          </li>

          <li>
            <Link to="/cart" className={styles["cart-anchor"]}>
              <span ref={cartNumberRef} className={styles["cart-number"]}>
                {cart.length}
              </span>
              <CartIcon
                className={`cart ${iconStyles["icon"]} ${styles["anchor-no-decoration"]}`}
              />
            </Link>
          </li>

          <li>
            <a href="#" target="_blank">
              <GitHubIcon
                className={`${iconStyles["icon"]} ${iconStyles["icon-github"]}`}
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

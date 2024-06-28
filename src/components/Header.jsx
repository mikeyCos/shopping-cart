import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Cart";
import NavAnchor from "./NavAnchor";
import CartIcon from "../assets/icons/cart-variant.svg?react";
import GitHubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import styles from "../styles/Header.module.css";
import iconStyles from "../styles/icons.module.css";

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <nav className={styles["nav"]}>
        <ul className={styles["nav-left"]}>
          <li>
            <Link to="/">
              <img src="#" alt="#" />
              <h1>Logo</h1>
            </Link>
          </li>
        </ul>

        <ul className={styles["nav-right"]}>
          <li>
            <NavAnchor pathname="home" />
          </li>

          <li>
            <NavAnchor pathname="shop" />
          </li>

          <li>
            <Link to="/cart" className={styles["cart-anchor"]}>
              <span className={styles["cart-number"]}>{cart.length}</span>

              <CartIcon
                className={`cart ${iconStyles.icon} ${styles["anchor-no-decoration"]}`}
              />
            </Link>
          </li>

          <li>
            <a href="#" target="_blank">
              <GitHubIcon className={`github ${iconStyles.icon}`} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

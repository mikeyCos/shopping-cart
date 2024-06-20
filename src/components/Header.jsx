import { Link } from "react-router-dom";
import CartIcon from "../assets/icons/cart-variant.svg?react";
import GitHubIcon from "../assets/icons/github-mark/github-mark.svg?react";
import styles from "../styles/Header.module.css";
import iconStyles from "../styles/icons.module.css";

const Header = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <ul className={styles.navLeft}>
          <li>
            <Link className={styles.anchorNoDecoration} to="/">
              <img src="#" alt="#" />
              <h1>Logo</h1>
            </Link>
          </li>
        </ul>

        <ul className={styles.navRight}>
          <li>
            <Link className={styles.anchorNoDecoration} to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className={styles.anchorNoDecoration} to="/shop">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/cart">
              <CartIcon
                className={`cart ${iconStyles.icon} ${styles.anchorNoDecoration}`}
              />
            </Link>
          </li>

          <li>
            <a className={styles.anchorNoDecoration} href="#" target="_blank">
              <GitHubIcon className={`github ${iconStyles.icon}`} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

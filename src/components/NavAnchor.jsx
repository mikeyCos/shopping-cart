import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavAnchor.module.css";

const NavAnchor = ({ pathname, text }) => {
  return (
    <NavLink
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? `${styles["active"]} ${styles["active-link"]}` : "",
          isTransitioning ? "transitioning" : "",
          styles["link"],
        ]
          .filter((item) => item)
          .join(" ")
      }
      to={`${pathname}`}
    >
      {text}
    </NavLink>
  );
};

NavAnchor.propTypes = {
  pathname: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default NavAnchor;

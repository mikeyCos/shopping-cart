import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavAnchor.module.css";

const NavAnchor = ({ pathname }) => {
  return (
    <NavLink
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? styles["active"] : "",
          isTransitioning ? "transitioning" : "",
        ]
          .filter((item) => item)
          .join(" ")
      }
      to={`/${pathname}`}
    >
      {pathname}
    </NavLink>
  );
};

NavAnchor.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default NavAnchor;

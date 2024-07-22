import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddShoppingCartIcon from "../assets/icons/add_shopping_cart.svg?react";
import styles from "../styles/QuickActions.module.css";

const QuickActions = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const onClickHandler = () => addToCart(product);

  return (
    <div className={`quick-actions ${styles["quick-actions"]}`}>
      <button aria-label="add to cart" onClick={onClickHandler}>
        <AddShoppingCartIcon />
      </button>
    </div>
  );
};

QuickActions.propTypes = {
  product: PropTypes.object.isRequired,
};

export default QuickActions;

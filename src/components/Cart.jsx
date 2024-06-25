import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);
  return <section id="cart">Cart</section>;
};

/*
 *https://react.dev/learn/passing-data-deeply-with-context#
 */
const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export { Cart as default, CartContext, CartProvider };

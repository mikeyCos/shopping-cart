import PropTypes from "prop-types";
import { createContext, useState } from "react";

/* React's Context API createContext
 * https://react.dev/learn/passing-data-deeply-with-context
 */
const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isUpdatingCart, setIsUpdatingCart] = useState(false);
  /* Removing item from cart
   * Check if item is in cart
   * If item is in cart
   *  Reduce cart and add quantities of item
   * Else
   *  Add item to cart
   *
   * Update item's quantity
   */
  const addToCart = (product, quantity = 1) => {
    const { id } = product;
    /* // Option 1:
    const newCart = productInCart
      ? cart.map((productInCart) => {
          if (productInCart.id === id)
            return {
              ...productInCart,
              quantity: productInCart.quantity + quantity,
            };
          return productInCart;
        })
      : [...cart, { ...product, quantity }];
    setCart(newCart); */

    let isInCart = false;
    const newCart = cart.map((productInCart) => {
      if (productInCart.id === id) {
        isInCart = true;
        return {
          ...productInCart,
          quantity: productInCart.quantity + quantity,
        };
      }

      return productInCart;
    });

    setIsUpdatingCart(!isInCart);
    setCart(isInCart ? newCart : [...cart, { ...product, quantity }]);

    /* // Option 2:
    setCart((prevCart) => {
      const isInCart = prevCart.some((cartItem) => cartItem.id === product.id);

      return isInCart
        ? prevCart.reduce((accumulator, currentCartItem) => {
            return [
              ...accumulator,
              currentCartItem.id === product.id
                ? {
                    ...currentCartItem,
                    quantity: currentCartItem.quantity + quantity,
                  }
                : currentCartItem,
            ];
          }, [])
        : [...prevCart, { ...product, quantity }];
    }); */
  };

  const removeFromCart = (productID) => {
    setIsUpdatingCart(true);
    setTimeout(() => {
      setCart((prevCart) => {
        return prevCart.filter((product) => product.id !== productID);
      });
      setIsUpdatingCart(false);
    }, 250);
  };

  const setQuantity = (productID, quantity) => {
    if (quantity == 0) {
      removeFromCart(productID);
    } else {
      setIsUpdatingCart(false);
      setCart((prevCart) =>
        prevCart.map((product) => {
          return product.id === productID ? { ...product, quantity } : product;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, isUpdatingCart, removeFromCart, setQuantity }}
    >
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

export { CartProvider as default, CartContext };

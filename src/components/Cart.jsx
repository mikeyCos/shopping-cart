import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import InputQuantity from "./InputQuantity";
import formatPrice from "../utilities/formatPrice";

const Cart = () => {
  const location = useLocation();
  const { cart, removeFromCart, setQuantity } = useContext(CartContext);

  const subTotal = cart.reduce((accumulator, currentCartItem) => {
    return accumulator + currentCartItem.price * currentCartItem.quantity;
  }, 0);

  return (
    <section id="cart" role="region">
      Cart
      {cart.length === 0 && <h4>Cart is empty</h4>}
      {cart.length > 0 && (
        <>
          {cart.map((item) => {
            return (
              <article key={item.id}>
                <h4>{item.title}</h4>
                <picture>
                  <img
                    style={{ width: "200px" }}
                    src={item.image}
                    loading="lazy"
                    alt="#"
                  />
                </picture>
                <form
                  noValidate={true}
                  onSubmit={(e) => {
                    e.preventDefault();
                    removeFromCart(item.id);
                  }}
                >
                  <p>{formatPrice(item.price)}</p>
                  <InputQuantity
                    quantity={item.quantity}
                    setQuantity={(newQuantity) => {
                      console.log("previous quantity", item.quantity);
                      setQuantity(item.id, newQuantity);
                    }}
                    incrementHandler={() => {
                      const newQuantity = +item.quantity + 1;
                      newQuantity <= 999 && setQuantity(item.id, newQuantity);
                    }}
                    decrementHandler={() => {
                      const newQuantity = item.quantity - 1;
                      newQuantity >= 0 && setQuantity(item.id, newQuantity);
                    }}
                  />
                  <button type="submit">Delete</button>
                </form>
              </article>
            );
          })}
          <p>
            Subtotal: <span>{formatPrice(subTotal)}</span>
          </p>
        </>
      )}
    </section>
  );
};

/* React hook createContext
 * https://react.dev/learn/passing-data-deeply-with-context
 */
const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  /* Removing item from cart
   * Check if item is in cart
   * If item is in cart
   *  Reduce cart and add quantities of item
   * Else
   *  Add item to cart
   *
   * Update item's quantity
   */
  const addToCart = (product, quantity) => {
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
    setTimeout(() => {
      setCart((prevCart) => {
        return prevCart.filter((product) => product.id !== productID);
      });
    }, 250);
  };

  const setQuantity = (productID, quantity) => {
    if (quantity == 0) {
      removeFromCart(productID);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) => {
          return product.id === productID ? { ...product, quantity } : product;
        })
      );
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setQuantity }}
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

export { Cart as default, CartContext, CartProvider };

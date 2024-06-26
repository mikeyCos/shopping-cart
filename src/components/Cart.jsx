import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  // console.log(cart);

  /* Remove item from cart when:
   *  - Quantity input is 0
   *  - Delete button is clicked
   */

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
                {/* <form noValidate={true} onSubmit={addToCartHandler}> */}
                <p>${item.price}</p>
                <div className="form-item">
                  <label htmlFor="quantity"></label>
                  <input
                    id="quantity"
                    name="quantity"
                    type="number"
                    value={item.quantity}
                    min={0}
                    max={100}
                    onChange={(e) => {
                      updateQuantity(item.id, +e.target.value);
                    }}
                  />
                </div>
                <button type="button" onClick={() => removeFromCart(item.id)}>
                  Delete
                </button>
                {/* </form> */}
              </article>
            );
          })}
          <p>
            Subtotal: <span>${subTotal}</span>
          </p>
        </>
      )}
    </section>
  );
};

/*
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
    const productInCart = getProductFromCart(id);
    /* if (productInCart) {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: productInCart.quantity + quantity },
      ]);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity }]);
    } */

    /* const newCart = productInCart
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

    // setCart((prevCart) => {
    //   const isInCart = prevCart.some((cartItem) => cartItem.id === product.id);

    //   return isInCart
    //     ? prevCart.reduce((accumulator, currentCartItem) => {
    //         return [
    //           ...accumulator,
    //           currentCartItem.id === product.id
    //             ? {
    //                 ...currentCartItem,
    //                 quantity: currentCartItem.quantity + quantity,
    //               }
    //             : currentCartItem,
    //         ];
    //       }, [])
    //     : [...prevCart, { ...product, quantity }];
    // });
    console.log(cart);
  };

  const removeFromCart = (productID) => {
    setCart((prevCart) => {
      return prevCart.filter((product) => product.id !== productID);
    });
  };

  const updateQuantity = (productID, quantity) => {
    if (quantity === 0) {
      removeFromCart(productID);
    } else {
      setCart((prevCart) =>
        prevCart.map((product) => {
          return product.id === productID ? { ...product, quantity } : product;
        })
      );
    }
  };

  const getProductFromCart = (productID) => {
    return cart.find((product) => product.id === productID);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
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

import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import FormQuantity from "./FormQuantity";
import InputQuantity from "./InputQuantity";
import formatPrice from "../utilities/formatPrice";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, setQuantity } = useContext(CartContext);

  /* const subTotal = cart.reduce((accumulator, currentCartItem) => {
    return accumulator + currentCartItem.price * currentCartItem.quantity;
  }, 0); */

  const { subTotal, subQuantity } = cart.reduce(
    (accumulator, currentCartItem) => {
      return {
        subTotal:
          accumulator.subTotal +
          currentCartItem.price * currentCartItem.quantity,
        subQuantity: accumulator.subQuantity + currentCartItem.quantity,
      };
    },
    { subTotal: 0, subQuantity: 0 }
  );

  const headingText =
    cart.length === 0 ? "Your cart is empty" : "Shopping cart";
  return (
    <section id={styles["cart"]} role="region">
      <header className={styles["cart-header"]}>
        <h4>{headingText}</h4>
      </header>
      {cart.length > 0 && (
        <>
          <section role="region" className={styles["cart-container"]}>
            {cart.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  className={styles["cart-product-card"]}
                >
                  <ProductCard.Heading title={item.title} />
                  <Link
                    to={`/shop/product/view/${encodeURIComponent(item.title)}`}
                    state={{ product: item }}
                  >
                    <ProductCard.Picture
                      src={item.image}
                      alt="#"
                      className={styles["product-picture"]}
                    />
                  </Link>
                  <FormQuantity submitForm={() => removeFromCart(item.id)}>
                    <p>{formatPrice(item.price)}</p>
                    <div className="form-controls">
                      <InputQuantity
                        quantity={item.quantity}
                        setQuantity={(newQuantity) => {
                          console.log("previous quantity", item.quantity);
                          setQuantity(item.id, newQuantity);
                        }}
                        incrementHandler={() => {
                          const newQuantity = +item.quantity + 1;
                          newQuantity <= 999 &&
                            setQuantity(item.id, newQuantity);
                        }}
                        decrementHandler={() => {
                          const newQuantity = item.quantity - 1;
                          newQuantity >= 0 && setQuantity(item.id, newQuantity);
                        }}
                      />
                      <FormQuantity.SubmitButton text="Delete" />
                    </div>
                  </FormQuantity>
                </ProductCard>
              );
            })}
          </section>

          <p className={styles["subtotal"]}>
            Subtotal ({subQuantity} items): <span>{formatPrice(subTotal)}</span>
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

export { Cart as default, CartContext, CartProvider };

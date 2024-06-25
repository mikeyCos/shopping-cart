import { useLocation } from "react-router-dom";
import { CartContext } from "./Cart";
import { useContext, useState } from "react";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  const [cart, setCart] = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = (e) => {
    e.preventDefault();
    console.log(product);
    setCart((prevCart) => {
      const isInCart = prevCart.some((cartItem) => cartItem.id === product.id);

      return isInCart
        ? prevCart.reduce((accumulator, currentCartItem) => {
            /* if (currentCartItem.id === product.id) {
              return [
                ...accumulator,
                {
                  ...currentCartItem,
                  quantity: currentCartItem.quantity + quantity,
                },
              ];
            } else {
              return [...accumulator, currentCartItem];
            } */
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
    });
  };

  const quantityHandler = (e) => {
    const newQuantity = +e.target.value;
    setQuantity(newQuantity);
  };

  console.log("cart", cart);
  console.log("location state", state);
  return (
    <article>
      <h4>{product.title}</h4>
      <picture>
        <img
          style={{ width: "200px" }}
          src={product.image}
          loading="lazy"
          alt="#"
        />
      </picture>
      <form noValidate={true} onSubmit={addToCartHandler}>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <div className="form-item">
          <label htmlFor="quantity"></label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            value={quantity}
            min={1}
            max={100}
            onChange={quantityHandler}
          />
        </div>
        <button type="submit">Add to cart</button>
      </form>
    </article>
  );
};

export default Product;

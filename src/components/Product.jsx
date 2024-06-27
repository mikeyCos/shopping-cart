import { useLocation } from "react-router-dom";
import { CartContext } from "./Cart";
import { useContext, useState } from "react";
import InputQuantity from "./InputQuantity";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = (e) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

  const onChangeQuantityHandler = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const incrementQuantityHandler = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantityHandler = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      return newQuantity === 0 ? prevQuantity : newQuantity;
    });
  };

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
        <InputQuantity
          quantity={quantity}
          setQuantity={onChangeQuantityHandler}
          incrementHandler={incrementQuantityHandler}
          decrementHandler={decrementQuantityHandler}
        />
        <button type="submit">Add to cart</button>
      </form>
    </article>
  );
};

export default Product;

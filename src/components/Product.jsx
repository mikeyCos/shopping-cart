import { useLocation } from "react-router-dom";
import { CartContext } from "./Cart";
import { useContext, useState } from "react";
import InputQuantity from "./InputQuantity";
import formatPrice from "../utilities/formatPrice";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [quantityValidity, setQuantityValidity] = useState(true);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const isQuantityValid = validateQuantity(quantity, setQuantityValidity);
    isQuantityValid && addToCart(product, quantity);
  };

  const onChangeQuantityHandler = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const incrementQuantityHandler = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = +prevQuantity + 1;
      !quantityValidity && validateQuantity(newQuantity, setQuantityValidity);
      return newQuantity <= 999 ? newQuantity : prevQuantity;
    });
  };

  const decrementQuantityHandler = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity - 1;
      return newQuantity <= 0 ? prevQuantity : newQuantity;
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
      <form noValidate={true} onSubmit={onSubmitHandler}>
        <p>{product.description}</p>
        <p>{formatPrice(product.price)}</p>
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

const onInputValidate = (e) => {
  validateQuantity(e.target.value);
};

const validateQuantity = (quantity, callBack) => {
  const isQuantityValid = /^(?!^0)\d{1,3}$/.test(quantity);
  const input = document.querySelector(".quantity-input");
  const errorMessage = document.querySelector(".error-message");
  console.log("validateQuantity firing!");
  if (!isQuantityValid) {
    errorMessage.textContent =
      "Do not leave blank. Enter a number between 1 and 999.";
    input.addEventListener("input", onInputValidate);
    callBack && callBack(false);
  } else {
    errorMessage.textContent = "";
    input.removeEventListener("input", onInputValidate);
    callBack && callBack(true);
  }

  return isQuantityValid;
};

export default Product;

import { useLocation } from "react-router-dom";
import { CartContext } from "./Cart";
import { useContext, useState } from "react";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const addToCartHandler = (e) => {
    e.preventDefault();
    addToCart(product, quantity);
  };

  const quantityHandler = (e) => {
    const newQuantity = +e.target.value;
    setQuantity(newQuantity);
  };

  // console.log("location state", state);
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

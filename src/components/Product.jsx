import { useLocation, useOutletContext } from "react-router-dom";

const Product = () => {
  const { state } = useLocation();
  const { product, cart, setCart } = state;

  const addToCartHandler = (e) => {
    e.preventDefault();
    console.log(product);
  };
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
          <input id="quantity" name="quantity" type="number" />
        </div>
        <button type="submit">Add to cart</button>
      </form>
    </article>
  );
};

export default Product;

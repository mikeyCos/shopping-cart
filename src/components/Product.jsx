import { useLocation, useOutletContext } from "react-router-dom";

const Product = () => {
  const { state } = useLocation();
  const { product } = state;
  console.log(state);
  return (
    <section>
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
        <div>
          <p>{product.description}</p>
        </div>
      </article>
    </section>
  );
};

export default Product;

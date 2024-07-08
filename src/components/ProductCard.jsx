import PropTypes from "prop-types";
import formatPrice from "../utilities/formatPrice";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({
  children,
  className = styles["product-card-default"],
}) => {
  return <article className={className}>{children}</article>;
};

const ProductHeading = ({ title }) => {
  return <h4>{title}</h4>;
};

const ProductPicture = ({ src, alt, className }) => {
  return (
    <picture className={className}>
      <img
        src={src}
        loading="lazy"
        alt={alt}
        className={styles["product-img"]}
      />
    </picture>
  );
};

const ProductInfo = ({ title, price, className }) => {
  const formattedPrice = formatPrice(price);
  return (
    <div className={className}>
      <h4>{title}</h4>
      <p>{formattedPrice}</p>
    </div>
  );
};

ProductCard.Heading = ProductHeading;
ProductCard.Picture = ProductPicture;
ProductCard.Info = ProductInfo;

ProductCard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  className: PropTypes.string,
};

ProductPicture.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ProductInfo.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  className: PropTypes.string,
};

ProductHeading.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ProductCard;

/* {
  // Category
  <article className={styles["product-card"]} key={product.id}>
    <Link
      to={`${pathname}/product/view/${encodeURIComponent(product.title)}`}
      state={{ product, previousLocation: pathname }}
    >
      <picture>
        <img
          className={styles["product-img"]}
          src={product.image}
          loading="lazy"
          alt="#"
        />
      </picture>
    </Link>

    <div className="info">
      <h4>{product.title}</h4>
      <p>{formatPrice(product.price)}</p>
    </div>
  </article>;
} */

/* {
  // Product
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
    <FormQuantity submitForm={() => onSubmitHandler()}>
      <p>{product.description}</p>
      <p>{formatPrice(product.price)}</p>
      <InputQuantity
        quantity={quantity}
        setQuantity={onChangeQuantityHandler}
        incrementHandler={incrementQuantityHandler}
        decrementHandler={decrementQuantityHandler}
      />
      <FormQuantity.SubmitButton text="Add to cart" />
    </FormQuantity>
  </article>;
} */

/* {
  // Cart
  <article key={item.id}>
    <h4>{item.title}</h4>
    <Link
      to={`/product/view/${encodeURIComponent(item.title)}`}
      state={{ product: item }}
    >
      <picture>
        <img
          style={{ width: "200px" }}
          src={item.image}
          loading="lazy"
          alt="#"
        />
      </picture>
    </Link>
    <FormQuantity submitForm={() => removeFromCart(item.id)}>
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
      <FormQuantity.SubmitButton text="Delete" />
    </FormQuantity>
  </article>;
} */

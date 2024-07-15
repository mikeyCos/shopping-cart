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

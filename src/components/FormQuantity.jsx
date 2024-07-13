import PropTypes from "prop-types";
import styles from "../styles/FormQuantity.module.css";

const FormQuantity = ({ submitForm, children }) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form
      noValidate={true}
      onSubmit={onSubmitHandler}
      className={styles["form-quantity"]}
    >
      {children}
    </form>
  );
};

const SubmitButton = ({ text }) => (
  <button type="submit" className={styles["submit-btn"]}>
    {text}
  </button>
);

FormQuantity.SubmitButton = SubmitButton;

FormQuantity.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  submitForm: PropTypes.func.isRequired,
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormQuantity;

/* 
// Product.jsx
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
</form>; */

/* 
// Cart.jsx
<form
  noValidate={true}
  onSubmit={(e) => {
    e.preventDefault();
    removeFromCart(item.id);
  }}
>
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
  <button type="submit">Delete</button>
</form>; */

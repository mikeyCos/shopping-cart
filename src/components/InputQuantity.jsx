import PropTypes from "prop-types";
import isPressedKeyValid from "../utilities/isPressedKeyValid";
import IncrementIcon from "../assets/icons/increment.svg?react";
import DecrementIcon from "../assets/icons/decrement.svg?react";
import styles from "../styles/InputQuantity.module.css";

const InputQuantity = ({
  quantity,
  setQuantity,
  incrementHandler,
  decrementHandler,
}) => {
  const onChangeHandler = (e) => {
    const value = +e.target.value;
    setQuantity(value);
  };

  const onKeyDownHandler = (e) => {
    const { key } = e;
    switch (true) {
      case /^arrowup$/i.test(key):
        e.preventDefault();
        incrementHandler();
        break;
      case /^arrowdown$/i.test(key):
        e.preventDefault();
        decrementHandler();
        break;
      case isPressedKeyValid(key):
      case !isNaN(key):
        break;
      default:
        e.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor="quantity"></label>
      <div className={`input-container ${styles["input-btn-container"]}`}>
        <button
          type="button"
          onClick={decrementHandler}
          aria-label="decrement quantity"
          className={styles["input-btn-left"]}
        >
          <DecrementIcon />
        </button>

        <input
          id="quantity"
          name="quantity"
          type="text"
          value={quantity}
          minLength={1}
          maxLength={3}
          autoComplete="off"
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          className={`quantity-input ${styles.input}`}
        />
        <button
          type="button"
          onClick={incrementHandler}
          aria-label="increment quantity"
          className={styles["input-btn-right"]}
        >
          <IncrementIcon />
        </button>
      </div>
      <p className={`error-message ${styles["input-error"]}`}></p>
    </div>
  );
};

InputQuantity.propTypes = {
  minValue: PropTypes.number,
  quantity: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setQuantity: PropTypes.func.isRequired,
  incrementHandler: PropTypes.func.isRequired,
  decrementHandler: PropTypes.func.isRequired,
};

export default InputQuantity;

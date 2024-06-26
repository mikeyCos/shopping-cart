import PropTypes from "prop-types";
import isPressedKeyValid from "../utilities/isPressedKeyValid";
import styles from "../styles/InputQuantity.module.css";

const InputQuantity = ({
  quantity,
  setQuantity,
  incrementHandler,
  decrementHandler,
}) => {
  const onChangeHandler = (e) => {
    const value = e.target.value;
    setQuantity(value);
  };

  return (
    <div>
      <label htmlFor="quantity"></label>
      <div className={styles["input-btn-container"]}>
        <button
          type="button"
          onClick={decrementHandler}
          className={styles["input-btn-left"]}
        >
          -
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
          onKeyDown={(e) => {
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
          }}
          className={`quantity-input ${styles.input}`}
        />
        <button
          type="button"
          onClick={incrementHandler}
          className={styles["input-btn-right"]}
        >
          +
        </button>
      </div>
      <p className="error-message"></p>
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

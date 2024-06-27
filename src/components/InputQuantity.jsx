import PropTypes from "prop-types";
import styles from "../styles/InputQuantity.module.css";

const InputQuantity = ({
  quantity,
  setQuantity,
  incrementHandler,
  decrementHandler,
}) => {
  const onChangeHandler = (e) => {
    const newQuantity = +e.target.value;
    setQuantity(newQuantity);
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
          inputMode="numeric"
          value={quantity.toString()}
          minLength={1}
          maxLength={3}
          pattern="/\d{1,3}/"
          onChange={onChangeHandler}
          onKeyDown={(e) => {
            const { key } = e;
            switch (true) {
              case !isNaN(key):
              case /backspace$/i.test(key):
                break;
              default:
                e.preventDefault();
            }
          }}
          className={styles.input}
        />
        <button
          type="button"
          onClick={incrementHandler}
          className={styles["input-btn-right"]}
        >
          +
        </button>
      </div>
    </div>
  );
};

InputQuantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  incrementHandler: PropTypes.func.isRequired,
  decrementHandler: PropTypes.func.isRequired,
};

export default InputQuantity;

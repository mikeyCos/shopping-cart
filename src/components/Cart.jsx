import { useContext, useMemo } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import FormQuantity from "./FormQuantity";
import InputQuantity from "./InputQuantity";
import formatPrice from "../utilities/formatPrice";
import { CartContext } from "../context/CartContext";
import styles from "../styles/Cart.module.css";

const Cart = () => {
  const { cart, removeFromCart, setQuantity } = useContext(CartContext);

  const { subTotal, subQuantity } = useMemo(() => {
    return cart.reduce(
      (accumulator, currentCartItem) => {
        return {
          subTotal:
            accumulator.subTotal +
            currentCartItem.price * currentCartItem.quantity,
          subQuantity: accumulator.subQuantity + currentCartItem.quantity,
        };
      },
      { subTotal: 0, subQuantity: 0 }
    );
  }, [cart]);

  const headingText =
    cart.length === 0 ? "Your cart is empty" : "Shopping cart";

  return (
    <section id={styles["cart"]} role="region">
      <header className={styles["cart-header"]}>
        <h4>{headingText}</h4>
      </header>
      {cart.length > 0 && (
        <>
          <section role="region" className={styles["cart-container"]}>
            {cart.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  className={styles["cart-product-card"]}
                >
                  <ProductCard.Heading title={item.title} />
                  <Link
                    to={`/shop/product/view/${encodeURIComponent(item.title)}`}
                    state={{ product: item }}
                  >
                    <ProductCard.Picture
                      src={item.image}
                      alt="#"
                      className={styles["product-picture"]}
                    />
                  </Link>
                  <FormQuantity submitForm={() => removeFromCart(item.id)}>
                    <p>{formatPrice(item.price)}</p>
                    <div className="form-controls">
                      <InputQuantity
                        quantity={item.quantity}
                        setQuantity={(newQuantity) => {
                          setQuantity(item.id, newQuantity);
                        }}
                        incrementHandler={() => {
                          const newQuantity = +item.quantity + 1;
                          newQuantity <= 999 &&
                            setQuantity(item.id, newQuantity);
                        }}
                        decrementHandler={() => {
                          const newQuantity = item.quantity - 1;
                          newQuantity >= 0 && setQuantity(item.id, newQuantity);
                        }}
                      />
                      <FormQuantity.SubmitButton text="Delete" />
                    </div>
                  </FormQuantity>
                </ProductCard>
              );
            })}
          </section>

          <p className={styles["subtotal"]}>
            Subtotal ({subQuantity} items): <span>{formatPrice(subTotal)}</span>
          </p>
        </>
      )}
    </section>
  );
};

export default Cart;

import { useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  console.log(location);
  return <section id="cart">Cart</section>;
};

export default Cart;

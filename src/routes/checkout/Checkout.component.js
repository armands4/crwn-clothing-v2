import "./Checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import CheckoutItem from "../../components/checkout-item/Checkout-item.component";

const Checkout = () => {
  const { cartItems, priceTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <span className="header-block">Product</span>
        <span className="header-block">Description</span>
        <span className="header-block">Quantity</span>
        <span className="header-block">Price</span>
        <span className="header-block">Remove</span>
      </div>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <span className="total">Total: {priceTotal}</span>
    </div>
  );
};

export default Checkout;

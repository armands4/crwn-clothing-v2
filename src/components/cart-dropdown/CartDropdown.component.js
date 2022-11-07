import "./CartDropdown.styles.scss";
import Button from "../button/Button.component";
import CartItem from "../cart-item/CartItem.component";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";
import { Navigate, useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const checkoutHandler = function () {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>

      <Button onClick={checkoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

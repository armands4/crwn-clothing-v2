import { useContext } from "react";
import { ReactComponent as ShopingCartIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../Context/Cart.context";

import "./CartIcon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartTotal } = useContext(CartContext);

  const toggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div onClick={toggle} className="cart-icon-container">
      <ShopingCartIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  );
};

export default CartIcon;

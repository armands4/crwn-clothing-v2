import "./CartItem.styles.scss";

const CartItem = function (props) {
  const { cartItem } = props;
  return (
    <div className="cart-item-container">
      <img src={cartItem.imageUrl} />
      <div className="item-details">
        <span className="name">{cartItem.name}</span>
        <span className="price">
          {cartItem.quantity} x ${cartItem.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

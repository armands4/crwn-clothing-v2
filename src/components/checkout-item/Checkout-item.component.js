import "./Checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";

const CheckoutItem = (props) => {
  const { addItem, removeItem, deleteItem } = useContext(CartContext);

  const { name, imageUrl, quantity, price } = props.item;

  const removeHandler = () => {
    removeItem(props.item);
  };

  const addHandler = () => {
    addItem(props.item);
  };

  const deleteHandler = () => {
    deleteItem(props.item);
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <spam className="value">{quantity}</spam>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </div>
      <span className="price">{price * quantity}</span>
      <div className="remove-button" onClick={deleteHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

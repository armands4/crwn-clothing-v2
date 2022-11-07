import Button from "../button/Button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../Context/Cart.context";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItem } = useContext(CartContext);

  const addHandler = () => {
    addItem(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addHandler} buttonType="inverted">
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;

import Button from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container ">
      <img src={imageUrl} alt={name}></img>

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button onClick={addToCart} buttonType="inverted">
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;

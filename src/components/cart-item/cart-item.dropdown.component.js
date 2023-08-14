import "./cart-item.dropdown.styles.scss";
const CartItemDropdown = ({ cartItems }) => {
  const { imageUrl, price, name, quantity } = cartItems;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
        <span></span>
      </div>
    </div>
  );
};

export default CartItemDropdown;

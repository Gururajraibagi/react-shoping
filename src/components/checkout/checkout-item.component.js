import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import "./checkout-item.styles.scss";
const CheckoutItems = ({ cartItem, index }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { cartItems, removeItemFromCart, addItemToCart, decreaseItemToCart } =
    useContext(CartContext);

  const increaseItemCount = (event) => {
    const idToAdd = parseInt(event.target.getAttribute("data-index"));

    addItemToCart(cartItems[idToAdd]);
  };

  const decreaseItemCount = (event) => {
    const idToRemove = parseInt(event.target.getAttribute("data-index"));

    decreaseItemToCart(cartItems[idToRemove]);
  };
  const deleteRow = (event) => {
    const idToDelete = parseInt(event.target.getAttribute("data-index"));

    removeItemFromCart(idToDelete);

    /*     const itemToDelete = cartItems.find(
      (item) => item.id !== idToDelete && setCartItems(item)
    ); */
    /*    const updatedCartItems = [
      ...cartItems.slice(0, idToDelete),
      ...cartItems.slice(idToDelete + 1),
    ];
    //const existingCartItem = cartItem.find((item) => item.id === productToAdd.id);
    setCartItems(updatedCartItems); */
    //console.log(itemToDelete);
  };
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name}></img>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        {" "}
        <div className="arrow" data-index={index} onClick={decreaseItemCount}>
          {" "}
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div className="arrow" data-index={index} onClick={increaseItemCount}>
          {" "}
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" data-index={index} onClick={deleteRow}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItems;

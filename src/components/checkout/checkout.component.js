import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CheckoutItems from "./checkout-item.component";
import "./checkout.syles.scss";
const Checkout = () => {
  const { cartItems, cardTotal } = useContext(CartContext);
  //  const { imageUrl, price, name, quantity } = cartItems;

  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">Product</div>
          <div className="header-block">Description</div>
          <div className="header-block">Quantity</div>
          <div className="header-block">Price</div>
          <div className="header-block">Remove</div>
        </div>

        {cartItems.map((items, index) => (
          <CheckoutItems
            key={items.id}
            cartItem={items}
            index={index}
          ></CheckoutItems>
        ))}

        <span className="total"> Total : {cardTotal}</span>
      </div>
    </>
  );
};

export default Checkout;

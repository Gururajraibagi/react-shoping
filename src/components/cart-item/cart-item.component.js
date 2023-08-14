import "./cart-item.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItemDropdown from "./cart-item.dropdown.component";

export function CartItems({ dropdownValue }) {
  console.log("dropdownvalue", dropdownValue);
  const { cartItems } = useContext(CartContext);

  console.log("cart", cartItems);
  return (
    dropdownValue && (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {" "}
          {cartItems.map((item) => (
            <CartItemDropdown key={item.id} cartItems={item}></CartItemDropdown>
          ))}
        </div>
        <Button>Checkout</Button>
      </div>
    )
  );
}

import "./cart-item.styles.scss";
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import CartItemDropdown from "./cart-item.dropdown.component";
import { Link } from "react-router-dom";

export function CartItems({ dropdownValue }) {
  const { cartItems, dropdownSet } = useContext(CartContext);

  return (
    dropdownValue && (
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {" "}
          {cartItems.map((item) => (
            <CartItemDropdown key={item.id} cartItems={item}></CartItemDropdown>
          ))}
        </div>
        <Link to="/checkout">
          {" "}
          <Button
            onClick={() => {
              dropdownSet(!dropdownValue);
            }}
          >
            Checkout
          </Button>
        </Link>
      </div>
    )
  );
}

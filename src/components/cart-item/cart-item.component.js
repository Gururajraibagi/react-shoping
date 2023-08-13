import "./cart-item.styles.scss";
import Button from "../button/button.component";

export function CartItems({ dropdownValue }) {
  console.log("dropdownvalue", dropdownValue);
  return (
    dropdownValue && (
      <div className="cart-dropdown-container">
        <div className="cart-items"></div>
        <Button>Checkout</Button>
      </div>
    )
  );
}

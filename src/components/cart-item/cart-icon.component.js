import "./cart-icon.styles.scss";
import { ReactComponent as CartIconSvg } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import { useContext } from "react";
export function CartIcon() {
  const { dropdownValue, dropdownSet } = useContext(CartContext);
  return (
    <div
      className="cart-icon-container"
      onClick={() => {
        dropdownSet(!dropdownValue);
        console.log("clickefd");
      }}
    >
      <CartIconSvg className="shopping-icon"></CartIconSvg>
      <span className="item-count">0</span>
    </div>
  );
}

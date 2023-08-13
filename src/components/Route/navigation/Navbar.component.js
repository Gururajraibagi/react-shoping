import { Outlet, Link } from "react-router-dom";
import SignIn from "../../signin/signin.component";
import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { CartContext } from "../../../context/cart.context";
import { handleSignoutFirebase } from "../../../utils/firebase/firebase.utils";
import { CartIcon } from "../../cart-item/cart-icon.component";
import { CartItems } from "../../cart-item/cart-item.component";

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { dropdownValue, dropdownSet } = useContext(CartContext);

  const handleSignout = async () => {
    await handleSignoutFirebase();
    setCurrentUser(null);
  };

  //console.log("From navigation currentUser", currentUser);
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          {currentUser ? (
            <span onClick={handleSignout} className="nav-link">
              Sign out {dropdownValue}
            </span>
          ) : (
            <>
              <Link to="/auth" className="nav-link">
                SignIn
              </Link>
            </>
          )}
          <CartIcon
            onClick={() => {
              dropdownSet(true);
              console.log("clickefd");
            }}
          ></CartIcon>
        </div>
        <CartItems dropdownValue={dropdownValue}></CartItems>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;

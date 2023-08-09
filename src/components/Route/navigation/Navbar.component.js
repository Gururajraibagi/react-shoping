import { Outlet, Link } from "react-router-dom";
import SignIn from "../../signin/signin.component";
import { useContext } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import { UserContext } from "../../../context/user.context";
import { handleSignoutFirebase } from "../../../utils/firebase/firebase.utils";
const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

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
              Sign out
            </span>
          ) : (
            <Link to="/auth" className="nav-link">
              SignIn
            </Link>
          )}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;

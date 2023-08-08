import { Outlet, Link } from "react-router-dom";
import SignIn from "../../signin/signin.component";

import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";

const Navbar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo"></CrownLogo>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            {" "}
            Shop
          </Link>
          <Link to="/auth" className="nav-link">
            {" "}
            SignIn{" "}
          </Link>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;

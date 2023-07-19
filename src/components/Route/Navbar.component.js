import { Outlet,Link } from "react-router-dom"

import { ReactComponent as CrownLogo } from "../../assets/crown.svg"

const Navbar = () =>{
    return (
      <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrownLogo className='logo'></CrownLogo>
        </Link>
        <div className="nav-links-container">
            <Link to='/shop' className="nav-link"> Shop</Link>
        </div>
      </div>
      <Outlet></Outlet>
      </>
    )
  }

  export default Navbar
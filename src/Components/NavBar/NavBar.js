import React from 'react';
import { Link} from 'react-router-dom'
import logo from '../../images/logo.png'
import { FaShoppingCart } from "react-icons/fa";



const NavBar = props => {
    return(
    //     <div>
    //     <nav className="navbar" role="navigation" aria-label="main navigation">
    //       <div className="navbar-brand">
    //         <a className="navbar-item" href="https://bulma.io">
    //       <img className="logo" src={logo}width={112} height={28} alt="Top View Logo" />
    //   </a>

    //    <ul className="navbar-start">
    //      <li className="navbar-item"><Link to="/">Home</Link></li>
    //       <li className="navbar-item"><Link to="/products">Rentals</Link></li>
    //       <li className="navbar-end"><FaShoppingCart/></li>
    //       </ul>
    //   </div>
    // </nav>  
  
    //   </div>

<nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
     <img className="logo" src={logo}width={112} height={28} alt="Top View Logo" />
    </a>
  </div>
  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <li className="navbar-item"> <Link to="/">Home</Link></li>
      <li className="navbar-item"><Link to="/products">Rentals</Link></li>
      </div>
      </div>
    <div className="navbar-end">
      <div className="navbar-item cart">
      <FaShoppingCart />
      </div>
      </div>
</nav>

    )
}

export default NavBar;
import React from "react";
import logo from "../images/logo.svg";

// Icons
import burger from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__toggle">
        <img src={burger} alt="Navbar Toggle Icon" />
      </div>
      <div className="nav__logo">
        <img className="nav__img" src={logo} alt="Navbar Logo" />
      </div>
      <ul className="nav__items">
        <li className="nav__item">
          <span className="nav__link">home</span>
          <span className="nav__link">shop</span>
          <span className="nav__link">about</span>
          <span className="nav__link">contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

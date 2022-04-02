import React from "react";
import { useState } from "react/cjs/react.development";

// Icons
import logo from "../images/logo.svg";
import burger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import { Fade } from "react-reveal";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className={toggle ? "nav" : "nav-active"}>
      <Fade top>
        <div
          className={toggle ? "nav__hamburger" : "nav__close"}
          onClick={() => setToggle(!toggle)}
        ></div>

        <div className="nav__logo">
          <img className="nav__img" src={logo} alt="Navbar Logo" />
        </div>

        <ul className={toggle ? "nav__items" : "nav__items-mobile"}>
          <li className="nav__item">
            <span className="nav__link">home</span>
            <span className="nav__link">shop</span>
            <span className="nav__link">about</span>
            <span className="nav__link">contact</span>
          </li>
        </ul>
      </Fade>
    </nav>
  );
};

export default Navbar;

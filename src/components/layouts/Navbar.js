import React from "react";
import Logo from "../layouts/spacex_logo_white.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <Link to='/'>
        <img src={Logo} style={{ width: "180px", height: "22px" }} />
      </Link>
      <ul
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {/*
        <li>
          <Link to='/about'>About </Link>
        </li> */}
        <li></li>

        <li>
          <Link to='/about' style={{ fontSize: "12px" }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

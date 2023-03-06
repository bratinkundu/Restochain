import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={logo} className="logo-container" />
    </Link>
    <div className="options">
      <Link className="option" to="/signin">
        SIGN IN
      </Link>
      <Link className="option" to="/">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;

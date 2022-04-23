import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";
import logo from "../../img/logo.svg";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  return (
    <header className={menuState ? "show-menu" : ""}>
      <div className="logo">
        <img src={logo} alt="logo" width="217" />
      </div>
      <ul>
        <li>
          <Link to="/login" className="sign-up">Login</Link>
        </li>
      </ul>
      <button
        type="button"
        className="menu-button"
        onClick={() => setMenuState(!menuState)}
      >
        <i></i>
      </button>
    </header>
  );
};

export default Header;

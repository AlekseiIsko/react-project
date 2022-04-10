import React from "react";
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Book</a>
        </li>
        <li>
          <a href="#">Join our team</a>
        </li>
        <li>
          <a href="#" className="sign-up">
            Sign up
          </a>
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

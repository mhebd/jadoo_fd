import React, { useState } from 'react';
import bar from '../../../assets/icon/icons8-menu-64.png';
import logo from '../../../assets/images/Logo.png';

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="" />
      </div>

      <div className={`menu-wrapper ${showMenu ? 'show' : ''}`}>
        <ul className="nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Destinations
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Hotels
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Flights
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Bookings
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-end">
        <ul className="buttons">
          <li className="nav-item">
            <a href="/" className="nav-btn login-btn">
              Login
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-btn signup-btn">
              Sign Up
            </a>
          </li>
        </ul>

        <form action="/" className="language-form">
          <select name="language" id="language">
            <option value="en">EN</option>
            <option value="bn">BN</option>
          </select>
        </form>

        <button className="navbar-toggler" type="button" onClick={(e) => setShowMenu(!showMenu)}>
          <img src={bar} alt="" />
        </button>
      </div>
    </nav>
  );
}

export default Nav;

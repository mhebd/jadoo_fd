import React from 'react';
import heroImg from '../../../assets/images/Image.png';
import logo from '../../../assets/images/Logo.png';

function Hero() {
  return (
    <div className="hero section">
      {/* <!-- Navbar section --> */}
      <nav className="navbar">
        <div className="logo-wrapper">
          <img src={logo} alt="" />
        </div>

        <div className="menu-wrapper">
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
        </div>
      </nav>

      {/* <!-- Hero content section --> */}
      <div className="hero-content">
        <div className="description">
          <img src="images/Decore 11.png" alt="" className="bg-img" />
          <p className="tag-line">Best Destinations around the world</p>
          <h2 className="heading">Travel, enjoy and live a new and full life</h2>
          <p className="desc">
            Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it
            engrossed listening. Park gate sell they west hard for the.
          </p>

          <div className="buttons">
            <button className="btn btn-more" type="button">
              Find Out More
            </button>
            <button className="btn btn-play" type="button">
              <img src="icon/Play button.png" alt="play btn" /> Play Demo
            </button>
          </div>
        </div>
        <div className="image">
          <img src={heroImg} alt="hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

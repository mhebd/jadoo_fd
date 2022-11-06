import React from 'react';
import icon4 from '../../../assets/icon/Google Play.svg';
import icon5 from '../../../assets/icon/Play Store.png';
import icon1 from '../../../assets/icon/Social-1.svg';
import icon3 from '../../../assets/icon/Social.svg';
import icon2 from '../../../assets/icon/Social3.png';
import img1 from '../../../assets/images/Jadoo..png';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={img1} alt="logo" />
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>

        <div className="footer-navs">
          <div className="nav">
            <div className="nav-title">Company</div>
            <ul className="fn-menu">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Career
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className="nav">
            <div className="nav-title">Contact</div>
            <ul className="fn-menu">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Career
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
          <div className="nav">
            <div className="nav-title">More</div>
            <ul className="fn-menu">
              <li className="menu-item">
                <a href="/" className="menu-link">
                  About
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Career
                </a>
              </li>
              <li className="menu-item">
                <a href="/" className="menu-link">
                  Mobile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-social">
          <ul className="social-menu">
            <li className="menu-item">
              <a href="/" className="menu-link">
                <img src={icon1} alt="" />
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <img src={icon2} alt="" />
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <img src={icon3} alt="" />
              </a>
            </li>
          </ul>
          <h5>Discover our app</h5>
          <div className="app-icons">
            <a href="/">
              <img src={icon4} alt="" />
            </a>
            <a href="/">
              <img src={icon5} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All rights reserved@jadoo.co</p>
      </div>
    </footer>
  );
}

export default Footer;

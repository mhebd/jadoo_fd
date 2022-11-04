import React from 'react';

function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <div className="footer-logo">
          <img src="images/Jadoo..png" alt="logo" />
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
                <img src="icon/Social-1.svg" alt="" />
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <img src="icon/Social3.png" alt="" />
              </a>
            </li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                <img src="icon/Social.svg" alt="" />
              </a>
            </li>
          </ul>
          <h5>Discover out app</h5>
          <div className="app-icons">
            <a href="/">
              <img src="icon/Google Play.svg" alt="" />
            </a>
            <a href="/">
              <img src="icon/Play Store.png" alt="" />
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

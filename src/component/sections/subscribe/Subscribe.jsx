import React from 'react';
import img2 from '../../../assets/icon/Group 77.svg';
import icon from '../../../assets/icon/Vector 1.svg';
import img1 from '../../../assets/images/Group_78.png';

function Subscribe() {
  return (
    <div className="subscribe section">
      <img src={img1} alt="" className="bg-overlay" />
      <img src={img2} alt="" className="s-after" />
      <h2 className="subs-heading">
        Subscribe to get information, latest news and other <br />
        interesting offers about Cobham
      </h2>

      <form action="/" className="subs-form">
        <div className="input-group">
          <div className="input-group-append">
            <img src={icon} alt="" />
          </div>
          <input type="email" className="email" placeholder="Your Email" />
        </div>
        <button type="submit" className="btn">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscribe;

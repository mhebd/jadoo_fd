import React from 'react';

function Subscribe() {
  return (
    <div className="subscribe section">
      <img src="images/Group_78.png" alt="" className="bg-overlay" />
      <img src="icon/Group 77.svg" alt="" className="s-after" />
      <h2 className="subs-heading">
        Subscribe to get information, latest news and other <br />
        interesting offers about Cobham
      </h2>

      <form action="/" className="subs-form">
        <div className="input-group">
          <div className="input-group-append">
            <img src="icon/Vector 1.svg" alt="" />
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

import React from 'react';
import icon1 from '../../../assets/icon/Group 48.svg';
import icon4 from '../../../assets/icon/Group 49.svg';
import icon3 from '../../../assets/icon/Group 50.svg';
import icon2 from '../../../assets/icon/Group 51.svg';

function Service() {
  return (
    <div className="service section">
      {/* <!-- Section Heading --> */}
      <div className="sec-heading">
        <p className="tag-line">CATEGORY</p>
        <h2 className="heading">We Offer Best Services</h2>
      </div>

      <div className="bg-overlay" />

      <div className="categories">
        <div className="card">
          <img src={icon1} alt="" className="card-img" />
          <h4 className="card-title">Calculated Weather</h4>
          <p className="card-desc">Built Wicket longer admire do barton vanity itself do in it.</p>
        </div>
        <div className="card">
          <img src={icon2} alt="" className="card-img" />
          <h4 className="card-title">Best Flights</h4>
          <p className="card-desc">Engrossed listening. Park gate sell they west hard for the.</p>
        </div>
        <div className="card">
          <img src={icon3} alt="" className="card-img" />
          <h4 className="card-title">Local Events</h4>
          <p className="card-desc">
            Barton vanity itself do in it. Preferd to men it engrossed listening.
          </p>
        </div>
        <div className="card">
          <img src={icon4} alt="" className="card-img" />
          <h4 className="card-title">Customization</h4>
          <p className="card-desc">
            We deliver outsourced aviation services for military customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Service;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import img1 from '../../../assets/images/Rectangle 14-1.png';
import img2 from '../../../assets/images/Rectangle 14-2.png';
import img3 from '../../../assets/images/Rectangle 14.png';

function Destination() {
  return (
    <div className="destination section">
      {/* <!-- Section Heading --> */}
      <div className="sec-heading">
        <p className="tag-line">Top Selling</p>
        <h2 className="heading">Top Destinations</h2>
      </div>

      <div className="destinations">
        <div className="card">
          <img src={img1} alt="Destination image" className="card-img" />
          <div className="card-body">
            <div className="card-info">
              <p className="location">Rome, Italy</p>
              <p className="price">$5.42K</p>
            </div>
            <div className="card-footer">
              <div className="day">
                <img src="icon/navigation 1.svg" alt="" /> 10 Days Trip
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img2} alt="Destination image" className="card-img" />
          <div className="card-body">
            <div className="card-info">
              <p className="location">London, UK</p>
              <p className="price">$4.2K</p>
            </div>
            <div className="card-footer">
              <div className="day">
                <img src="icon/navigation 1.svg" alt="" /> 12 Days Trip
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={img3} alt="Destination image" className="card-img" />
          <div className="card-body">
            <div className="card-info">
              <p className="location">Full Europe</p>
              <p className="price">$15K</p>
            </div>
            <div className="card-footer">
              <div className="day">
                <img src="icon/navigation 1.svg" alt="" /> 28 Days Trip
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;

/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import playBtn from '../../../assets/icon/Play button.png';
import heroImg from '../../../assets/images/Image.png';
import Nav from './Nav';

function Hero() {
  return (
    <div className="hero section">
      {/* <!-- Navbar section --> */}
      <Nav />

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
              <img src={playBtn} alt="play btn" /> Play Demo
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

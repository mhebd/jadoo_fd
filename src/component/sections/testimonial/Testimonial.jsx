import React from 'react';

function Testimonial() {
  return (
    <div className="testimonial section">
      <div className="testi-nav">
        {/* <!-- Section Heading --> */}
        <div className="sec-heading">
          <p className="tag-line">TESTIMONIALS</p>
          <h2 className="heading">What people say about Us.</h2>
        </div>

        <div className="dots">
          <div className="dot active" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </div>

      <div className="testimonials">
        <div className="card">
          <img src="images/Image 111.png" alt="avatar" className="card-img" />
          <p className="opinion">
            “On the Windows talking painted pasture yet its express parties use. Sure last upon he
            same as knew next. Of believed or diverted no.”
          </p>

          <div className="reviewer-info">
            <h4 className="name">Mike Taylor</h4>
            <p className="location">Lahore, Pakistan</p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="prev" type="button">
          <img src="icon/Vector 1.svg" alt="" />
        </button>
        <button className="next" type="button">
          <img src="icon/Vector 1.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;

import React from 'react';

function Booking() {
  return (
    <div className="booking section">
      <div className="booking-todo">
        {/* <!-- Section Heading --> */}
        <div className="sec-heading">
          <p className="tag-line">Easy and Fast</p>
          <h2 className="heading">Book your next trip in 3 easy steps</h2>
        </div>

        <div className="todo-list">
          <div className="todo">
            <div className="todo-img">
              <img src="icon/Group 7.svg" alt="" />
            </div>
            <div className="todo-info">
              <h5>Choose Destination</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
          <div className="todo">
            <div className="todo-img">
              <img src="icon/Group 12.svg" alt="" />
            </div>
            <div className="todo-info">
              <h5>Make Payment</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
          <div className="todo">
            <div className="todo-img">
              <img src="icon/Group 11.svg" alt="" />
            </div>
            <div className="todo-info">
              <h5>Reach Airport on Selected Date</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur <br />
                adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="booking-info">
        <div className="card">
          <img src="images/Rectangle 17.jpg" alt="" className="card-img" />
          <h2 className="card-title">Trip To Greece</h2>
          <p className="info">
            <span className="date">14-29 June</span> | by
            <span className="guide">Robin Roy</span>
          </p>
          <div className="icons">
            <img src="icon/LEAF.svg" alt="" />
            <img src="icon/map 1.svg" alt="" />
            <img src="icon/send 2.svg" alt="" />
          </div>
          <div className="card-footer">
            <div className="info">
              <img src="icon/Group-22.png" alt="" />
              24 people going
            </div>
            <div className="icon">
              <img src="icon/Group.svg" alt="" />
            </div>
          </div>
          <div className="overlay-card">
            <img src="images/image 32.png" alt="" />
            <div className="info">
              <p className="tag-line">Ongoing</p>
              <h5>Trip to rome</h5>
              <p className="status">
                <span>40%</span> complete
              </p>

              <div className="progress-bar">
                <div className="complete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;

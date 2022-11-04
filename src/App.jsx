/* eslint-disable jsx-a11y/img-redundant-alt */
import './assets/css/style.min.css';
import Booking from './component/sections/booking/Booking';
import Destination from './component/sections/destination/Destination';
import Footer from './component/sections/footer/Footer';
import Hero from './component/sections/hero/Hero';
import Logos from './component/sections/logos/Logos';
import Service from './component/sections/service/Service';
import Subscribe from './component/sections/subscribe/Subscribe';
import Testimonial from './component/sections/testimonial/Testimonial';

function App() {
  return (
    <>
      <img src="images/Decore.png" alt="" className="after" />
      <img src="images/Ellipse 8.png" alt="" className="before" />
      <Hero />

      <Service />

      <Destination />

      <Booking />

      <Testimonial />

      <Logos />

      <Subscribe />

      <Footer />
    </>
  );
}

export default App;

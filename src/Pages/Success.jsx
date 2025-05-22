import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Style/Success.css';
const Success = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="success-container" data-aos="zoom-in">
      <div className="success-box">
        <div className="checkmark">✔</div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for ordering with <strong>FoodGo</strong>. Your delicious meal is on the way 🍽️</p>
        <Link to="/" className="home-btn">Go to Home</Link>
      </div>
    </div>
  );
};

export default Success;

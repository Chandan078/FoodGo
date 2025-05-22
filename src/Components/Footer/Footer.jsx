import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';
import logo from "../../assets/images/logo.jpeg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={logo} alt="FoodGo Logo" />
          <h2>FoodGo</h2>
          <p>Delicious meals delivered fast at your door.</p>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">About Us</Link></li>
            <li><Link to="/">Contact Us</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">FAQ</Link></li>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Terms of Service</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>
          <ul>
            <li><a href="https://wa.me/8102905305" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            <li><a href="mailto:chandan.kumar01@indiamart.com">Email</a></li>
            <li><a href="https://github.com/chandan078" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div>
        &copy; 2025 FoodGo. All rights reserved. 
        </div>
        <div>
           Developed by
        <a href="https://wa.me/8102905305" target="_blank" rel="noopener noreferrer"> @Chandan Kumar</a>
          </div>
      </div>
    </footer>
  )
}

export default Footer

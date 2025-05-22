import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import { CgProfile } from "react-icons/cg";
import { FaFilter, FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../../assets/images/logo.jpeg';
import './Header.css';
import CartModal from "../Cart/CartModal";
import { useCart } from '../../Context/CartContext';
import { useSearch } from '../../Context/SearchContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);
  const { searchTerm, setSearchTerm } = useSearch();

  const handleKeyDown = (e) => {
  if (e.key === "Enter") {
    setSearchTerm(searchTerm);
    const foodSection = document.getElementById("food-section");
    if (foodSection) {
      foodSection.scrollIntoView({ behavior: "smooth" });
    }
  }
};


  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="FoodGo Logo" />
          <h1>FoodGo</h1>
        </Link>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/dineout" onClick={() => setMenuOpen(false)}>Dineout</Link>
          <Link to="/help" onClick={() => setMenuOpen(false)}>Help</Link>
          <Link to="/booking" onClick={() => setMenuOpen(false)}>Order Now</Link>
        </nav>

        <div className="navbar-actions">
           {/* <div className="navbar-search-wrapper">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search food by name..."
        className="navbar-search"
        value={searchTerm}
         onKeyDown={handleKeyDown}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div> */}
          {/* <div className="tooltip">
            <button className="navbar-btn"><HiMiniAdjustmentsHorizontal /></button>
            <span className="tooltiptext">Filter</span>
          </div> */}

          <div className="tooltip">
            <button className="navbar-btn" onClick={() => setShowCart(!showCart)}>
              <FaShoppingCart />  {cartItems.length}
            </button>
            <span className="tooltiptext">Cart  ({cartItems.length}) </span>
          </div>

          <div className="tooltip">
            <button className="navbar-btn"><CgProfile /></button>
            <span className="tooltiptext">Sign In</span>
          </div>
        </div>

        <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      {/* Conditionally render the CartModal */}
      {showCart && <CartModal onClose={() => setShowCart(false)} />}
    </header>
  );
};

export default Navbar;

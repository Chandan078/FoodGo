import React, { useState } from "react";
import { useCart } from "../Context/CartContext"; 
import "../Style/Booking.css";
import { useNavigate } from "react-router-dom";

const BookingPage = () => {
  const { cartItems, incrementQuantity, decrementQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = "Enter a valid 10-digit number.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) return;

    clearCart();
    navigate("/success");
  };

  return (
    <div className="booking-page">
      <h2>Booking Details</h2>

      <form className="address-form" onSubmit={(e) => e.preventDefault()}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </label>

        <label>
          Delivery Address:
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your full address"
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter contact number"
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>
      </form>

      <div className="cart-summary">
        <h3>Your Order</h3>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item) => (
                <li key={item._id} className="booking-cart-item">
                  <img src={item.image} alt={item.name} />
                  <span>{item.name}</span>
                  <div className="quantity">
                    <button onClick={() => decrementQuantity(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                  <span>= ₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h4>Total Price: ₹{totalPrice}</h4>
            <button onClick={handleConfirmOrder} className="confirm-btn">
              Confirm Order
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;

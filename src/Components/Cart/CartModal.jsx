// src/Components/Cart/CartModal.jsx
import React from 'react';
import { useCart } from '../../Context/CartContext'; 
import './CartModal.css'; 
import { useNavigate } from 'react-router-dom';

const CartModal = ({ onClose }) => {
  const { cartItems, incrementQuantity, decrementQuantity } = useCart(); 
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/booking');
    onClose(); // Close modal after checkout
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p>₹{item.price}</p>
                  <div className="quantity">
                    <button onClick={() => decrementQuantity(item._id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item._id)}>+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="cart-total">
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        )}

        <div className="cart-actions">
          <button className="close-btn" onClick={onClose}>Close</button>
          {cartItems.length > 0 && (
            <button className="checkout-btn" onClick={handleCheckout}>Proceed to Checkout</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

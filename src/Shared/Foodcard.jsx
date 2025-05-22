import React from "react";
import "../Style/FoodCard.css";
import { useCart } from "../Context/CartContext.js";

const Foodcard = ({ food }) => {
  const { cartItems, addToCart, incrementQuantity, decrementQuantity } = useCart();

  const cartItem = cartItems.find(item => item._id === food._id);
  const isInCart = Boolean(cartItem);

  return (
    <div className="food-card">
      <img src={food.image} alt={food.name} />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <div className="food-details">
        <span>₹{food.price}</span>

        {!isInCart ? (
          <button onClick={() => addToCart(food)}>Add to Cart</button>
        ) : (
          <div className="quantity-controls">
            <button onClick={() => decrementQuantity(food._id)}>-</button>
            <span>{cartItem.quantity}</span>
            <button onClick={() => incrementQuantity(food._id)}>+</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Foodcard;

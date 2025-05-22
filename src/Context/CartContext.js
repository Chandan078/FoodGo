// src/context/CartContext.js
import { createContext, useContext, useReducer } from "react";

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.cartItems.find(item => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item._id === action.payload._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item._id !== action.payload),
      };

    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item._id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item._id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0),
      };

    case "CLEAR_CART":
      return { ...state, cartItems: [] };

    default:
      return state;
  }
}

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = item => dispatch({ type: "ADD_TO_CART", payload: item });
  const removeFromCart =_id => dispatch({ type: "REMOVE_FROM_CART", payload:_id });
  const incrementQuantity =_id => dispatch({ type: "INCREMENT_QUANTITY", payload:_id });
  const decrementQuantity =_id => dispatch({ type: "DECREMENT_QUANTITY", payload:_id });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return state + 1;
    case "REMOVE_FROM_CART":
      return state - 1;
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartCount, dispatch] = useReducer(cartReducer, 0);

  return (
    <CartContext.Provider value={{ cartCount, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

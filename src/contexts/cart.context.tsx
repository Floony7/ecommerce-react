import React, { ReactNode, createContext, useReducer } from "react";

// Define action types
export const SHOW_CART = "SHOW_CART";

interface ShowCartAction {
  type: typeof SHOW_CART;
  payload: boolean;
}

// Define reducer function
const cartReducer = (state: boolean, action: ShowCartAction): boolean => {
  switch (action.type) {
    case SHOW_CART:
      return action.payload;
    default:
      return state;
  }
};

// Define context type
interface CartContextType {
  isCartOpen: boolean;
  dispatch: React.Dispatch<ShowCartAction>;
}

// Create context
export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  dispatch: () => {},
});

// Provider component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, dispatch] = useReducer(cartReducer, false);

  return (
    <CartContext.Provider value={{ isCartOpen, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

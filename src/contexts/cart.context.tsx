import { ReactNode, createContext, useEffect, useState } from "react";

export interface IItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}
export interface CartItemType extends IItem {
  quantity: number;
}
interface CartContextType {
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItemType[];
  addItemToCart: (product: IItem) => void;
  clearCart: () => void;
  totalQuantity: number;
}

export const addCartItem = (cartItems: CartItemType[], productToAdd: IItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  clearCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalQuantity(itemCount);
  }, [cartItems]);

  const addItemToCart = (product: IItem) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const clearCart = () => setCartItems([]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    clearCart,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// import React, { ReactNode, createContext, useReducer } from "react";

// // Define action types
// export const SHOW_CART = "SHOW_CART";

// interface ShowCartAction {
//   type: typeof SHOW_CART;
//   payload: boolean;
// }
// interface CartState {

// }

// // Define reducer function
// const cartReducer = (state: CartState, action: ShowCartAction): boolean => {
//   switch (action.type) {
//     case SHOW_CART:
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export type CartItem = {
//   id: string;
//   product: string;
//   quantity: number;
// };

// const addCartItem = (cartItems: CartItem[], productToAdd: CartItem) => {
//   const cartItem = cartItems.find((item) => item.id === productToAdd.id);

//   if (cartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// // Define context type
// interface CartContextType {
//   isCartOpen: boolean;
//   cartItems: CartItem[];
//   dispatch: React.Dispatch<ShowCartAction>;
// }

// // Create context
// export const CartContext = createContext<CartContextType>({
//   isCartOpen: false,
//   cartItems: [],
//   dispatch: () => {},
// });

// // Provider component
// export const CartProvider = ({ children }: { children: ReactNode }) => {
//   const [isCartOpen, dispatch] = useReducer(cartReducer, false);

//   return (
//     <CartContext.Provider value={{ isCartOpen, cartItems, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

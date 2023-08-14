import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  dropdownValue: false,
  dropdownSet: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cardCount: 0,
});

const addCartItem = (cartItem, productToAdd) => {
  const existingCartItem = cartItem.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {
    return cartItem.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContextProvider = ({ children }) => {
  const [dropdownValue, dropdownSet] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cardCount, setcardCount] = useState(0);

  useEffect(() => {
    const newCardCount = cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );
    setcardCount(newCardCount);
    console.log("increased cart count", newCardCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    console.log(productToAdd);
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = {
    dropdownValue,
    dropdownSet,
    cartItems,
    addItemToCart,
    cardCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

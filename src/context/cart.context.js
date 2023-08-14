import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  dropdownValue: false,
  dropdownSet: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cardCount: 0,
  removeItemFromCart: () => {},
  decreaseItemToCart: () => {},
  cardTotal: 0,
});

const addCartItem = (cartItem, productToAdd) => {
  const existingCartItem = cartItem.find((item) => item.id === productToAdd.id);
  if (existingCartItem) {
    return cartItem.map((item) =>
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }
  return [...cartItem, { ...productToAdd, quantity: 1 }];
};

export const CartContextProvider = ({ children }) => {
  const [dropdownValue, dropdownSet] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cardCount, setcardCount] = useState(0);
  const [cardTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCardCount = cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity,
      0
    );
    setcardCount(newCardCount);

    const newCardTotal = cartItems.reduce(
      (total, cartitem) => total + cartitem.quantity * cartitem.price,
      0
    );
    setCartTotal(newCardTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const decreaseItemToCart = (CartItemToRemove) => {
    setCartItems(decreaseItemFromCart(cartItems, CartItemToRemove));
  };
  const decreaseItemFromCart = (cartitems, CartItemToRemove) => {
    const existingItem = cartitems.find(
      (cartitem) => cartitem.id === CartItemToRemove.id
    );

    if (existingItem.quantity === 1)
      return cartitems.filter(
        (cartitem) => cartitem.id !== CartItemToRemove.id
      );

    return cartitems.map((cartitem) =>
      cartitem.id === CartItemToRemove.id
        ? { ...cartitem, quantity: cartitem.quantity - 1 }
        : cartitem
    );
  };
  const removeItemFromCart = (idtoremove) => {
    /*    const updatedCartItems = [
      ...cartItems.slice(0, idtoremove),
      ...cartItems.slice(idtoremove + 1),
    ]; */
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(idtoremove, 1);

    //const existingCartItem = cartItem.find((item) => item.id === productToAdd.id);
    setCartItems(updatedCartItems);
  };
  const value = {
    dropdownValue,
    dropdownSet,
    cartItems,
    addItemToCart,
    cardCount,
    removeItemFromCart,
    decreaseItemToCart,
    cardTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

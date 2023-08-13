import { createContext, useState } from "react";

export const CartContext = createContext({
  dropdownValue: false,
  dropdownSet: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [dropdownValue, dropdownSet] = useState(false);
  const value = { dropdownValue, dropdownSet };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

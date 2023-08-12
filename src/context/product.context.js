import { createContext, useState } from "react";

import PRODUCT_DATA from "../components/Route/shop/shop-data.json";

export const ProductContext = createContext({
  id: 0,
  name: "",
  imageUrl: "",
  price: 0,
});

export const ProductContextProvider = ({ children }) => {
  const [value, setValue] = useState(PRODUCT_DATA);

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

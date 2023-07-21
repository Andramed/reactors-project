'use client'

import { createContext, useContext, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider(props) {
  const { children } = props;

  const [cartItem, setCartItem] = useState([]);

  const key = 'Cart';
  // window.localStorage.setItem(key, JSON.stringify(cartItem));

  return (
    <ProductContext.Provider value={{ cartItem, setCartItem }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const productContext = useContext(ProductContext);

  if (productContext === undefined) {
    throw Error("useProductContext should be used inside ProductProvider");
  }

  return productContext;
}

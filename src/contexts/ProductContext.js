import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const login = async input => {
    return await axios.post('http://localhost:8888/auth/login', input);
  };
  return (
    <ProductContext.Provider value={{ login }}>
      {children}
    </ProductContext.Provider>
  );
}

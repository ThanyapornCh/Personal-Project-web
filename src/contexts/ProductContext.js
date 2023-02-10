import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState(null);

  // console.log(products);

  useEffect(() => {
    const run = async () => {
      const res = await axios.get('/products/allproducts');
      const products = res.data;
      setProducts(products.products);
    };
    run();
  }, []);
  // const login = async input => {
  //   return await axios.post('http://localhost:8888/auth/login', input);
  // };
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

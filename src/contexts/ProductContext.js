import { createContext, useEffect, useState } from 'react';
import * as productApi from '../apis/product-api';
export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState();
  // const [counter, setCounter] = useState(false);

  // console.log(products);

  useEffect(() => {
    const run = async () => {
      const res = await productApi.getAllProductApi();
      setProducts(res.data.products);
    };
    run();
  }, []);
  console.log(products);

  // const login = async input => {
  //   return await axios.post('http://localhost:8888/auth/login', input);
  // };
  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}

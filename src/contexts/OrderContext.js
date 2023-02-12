import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const run = async () => {
      // const res = await axios.post(`/order/${productId}`);
      // console.log(res.data.orderItems);
      // const intOrder = res.data?.OrderItems;
      // setOrder(intOrder);
    };
    run();
  }, []);

  const handleAddCart = async productId => {
    const res = await axios.post(`/order/${productId}`);
    console.log(res.data.orderItems);
    const newOrder = res.data?.OrderItems;
    setOrder(newOrder);
  };
  console.log(order);
  return (
    <OrderContext.Provider value={{ handleAddCart, order }}>
      {children}
    </OrderContext.Provider>
  );
}

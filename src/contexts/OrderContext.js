import axios from '../config/axios';
import { createContext, useEffect, useState } from 'react';

export const OrderContext = createContext();

export default function OrderContextProvider({ children }) {
  const [order, setOrder] = useState([]);
  const fetchOrder = async () => {
    const res = await axios.get('/order/');
    console.log(res.data.orders.OrderItems);
    // const intOrder = res.data?.OrderItems;
    setOrder(res.data.orders.OrderItems);
  };
  useEffect(() => {
    fetchOrder();
  }, []);

  const handleAddCart = async productId => {
    const res = await axios.post(`/order/${productId}`);
    // console.log(res.data.orderItems);
    const newOrder = res.data?.OrderItems;
    setOrder(newOrder);
  };
  const handleUpdateCart = async (orderItemsId, input, quantity) => {
    const res = await axios.put(`/order/${orderItemsId}`, input);
    setOrder(res.data.order.OrderItems);
  };
  return (
    <OrderContext.Provider
      value={{ handleAddCart, order, setOrder, fetchOrder, handleUpdateCart }}
    >
      {children}
    </OrderContext.Provider>
  );
}

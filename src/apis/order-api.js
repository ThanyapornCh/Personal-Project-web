import axios from '../config/axios';

export const deleteOrder = (OrdersId, ProductId) =>
  axios.delete(`/order/${OrdersId}/product/${ProductId}`);

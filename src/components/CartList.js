import { TrashIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as orderApi from '../apis/order-api';
import useOrder from '../hooks/useOrder';

export default function CartList({ orderList }) {
  console.log(orderList);
  const [count, setCount] = useState(0);
  // const { ordersId, ProductId } = useParams();
  const ctx = useOrder();
  const { order, setOrder, fetchOrder, handleUpdateCart } = ctx;
  console.log(ctx);

  const handleClickButton = async (ordersId, productId) => {
    await orderApi.deleteOrder(ordersId, productId);
    fetchOrder();
  };

  return (
    <>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <img
          className="flex justify-center object-cover"
          src={orderList.Product.productImage}
          width="60px"
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {orderList.Product.productName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {orderList.Product.productPrice}
      </td>
      <td>
        <td>
          <button
            type="button"
            onClick={() => {
              handleUpdateCart(
                orderList.id,
                { methode: 'add' },
                orderList.productQuantity
              );
            }}
            className="w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
          >
            +
          </button>
          {orderList.productQuantity}
          <button
            type="button"
            onClick={() => {
              handleUpdateCart(
                orderList.id,
                { methode: 'minus' },
                orderList.productQuantity
              );
            }}
            className="w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
          >
            -
          </button>
        </td>
      </td>
      <td>
        {/* <DeleteAction /> */}
        <div className="flex space-x-2 justify-center">
          <button
            onClick={() =>
              handleClickButton(orderList.ordersId, orderList.productId)
            }
            type="button"
            className="w-[30px] h-[30px] py-2 px-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <TrashIcon className="h-4 w-4 text-white flex flex-justify items-center" />
          </button>
        </div>
      </td>
    </>
  );
}

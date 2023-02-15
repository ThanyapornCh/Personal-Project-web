import React, { useState } from 'react';
import CleanserPic from '../assets/images/cleanser.png';
import useOrder from '../hooks/useOrder';
import ModalEditProducts from './ModalEditProducts';

export default function ProductList({ index, name, price, quantity, image }) {
  const [show, setShow] = useState(false);
  const handleOnClick = e => {
    e.preventDefault();
    setShow(true);
  };
  const ctx = useOrder();
  const { order, setOrder, fetchOrder, handleUpdateCart } = ctx;
  // const handleClickButton = async (ordersId, productId) => {
  //   await orderApi.deleteOrder(ordersId, productId);
  //   fetchOrder();
  // };
  // console.log(ordersId);

  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {index + 1}
      </td>

      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        <img
          className="flex justify-center object-cover"
          src={image}
          width="60px"
        />
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {name}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {price}
      </td>
      <td>{quantity}</td>
      <td>
        <div className="flex space-x-2 justify-center">
          {/* <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleOnClick}
          >
            Edit
            <ModalEditProducts show={show} setClose={setShow} />
          </button> */}

          <button
            onClick={handleOnClick}
            type="button"
            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

import CleanserPic from '../assets/images/cleanser.png';
import React, { useState } from 'react';
import axios from 'axios';
import useOrder from '../hooks/useOrder';
import CartItems from './CartItems';

export default function CartOrders() {
  const [count, setCount] = React.useState(0);
  const ctx = useOrder();
  const { order } = ctx;
  console.log(order);

  const handleInputChange = input => e => {
    return function (e) {};
    e.preventDefault();
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Products
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map(el => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.ordersId}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <img
                          className="flex justify-center object-cover"
                          src={el.Product.productImage}
                          width="60px"
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el.Product.productName}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {el.Product.productPrice}
                      </td>
                      <td>
                        <td>
                          <button
                            onClick={() => {
                              setCount(count + 1);
                            }}
                            className="w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
                          >
                            +
                          </button>
                          <input
                            className="w-[25px] border-spacing-1 align-text-center "
                            onChange={handleInputChange}
                            count="count"
                          />
                          <button
                            onClick={() => {
                              if (count > 0) setCount(count - 1);
                            }}
                            className="w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
                          >
                            -
                          </button>
                        </td>
                      </td>
                      <td>
                        <div className="flex space-x-2 justify-center">
                          <button
                            type="button"
                            className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    1
                  </td>

                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Mark
                    <img
                      className="flex justify-center object-cover"
                      src={CleanserPic}
                      width="60px"
                    />
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Otto
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @mdo
                  </td>
                  <td>
                    <td>
                      <button
                        onClick={() => {
                          setCount(count + 1);
                        }}
                        className="w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
                      >
                        +
                      </button>
                      <input
                        className="w-[25px] border-spacing-1 align-text-center "
                        onChange={handleInputChange}
                        count="count"
                      />
                      <button
                        onClick={() => {
                          if (count > 0) setCount(count - 1);
                        }}
                        className="w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
                      >
                        -
                      </button>
                    </td>
                  </td>
                  <td>
                    <div className="flex space-x-2 justify-center">
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    2
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Jacob
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Thornton
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @fat
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      className="w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
                    >
                      +
                    </button>
                    <input
                      className="w-[25px] border-spacing-1 align-text-center "
                      onChange={handleInputChange}
                      count="count"
                    />
                    <button
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                      className="w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <div className="flex space-x-2 justify-center">
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    3
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Larry
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    Wild
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    @twitter
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        setCount(count + 1);
                      }}
                      className="w-5 h-5 mx-2 bg-green-600 text-white font-medium text-lg rounded-sm"
                    >
                      +
                    </button>
                    <input
                      className="w-[25px] border-spacing-1 align-text-center "
                      onChange={handleInputChange}
                      count="count"
                    />
                    <button
                      onClick={() => {
                        if (count > 0) setCount(count - 1);
                      }}
                      className="w-5 h-5 mx-2 bg-red-600 text-white font-medium text-lg rounded-sm"
                    >
                      -
                    </button>
                  </td>
                  <td>
                    <div className="flex space-x-2 justify-center">
                      <button
                        type="button"
                        className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-center ">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xl">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Total
                </h5>
                <div className="col-1 text-right"></div>
                <button
                  type="button"
                  className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
                  onClick={() => alert('Implement Checkout!')}
                >
                  Buy Now
                </button>
              </div>
            </div>
            {/* </>
            )}  */}
          </div>
        </div>
      </div>
    </div>
  );
}

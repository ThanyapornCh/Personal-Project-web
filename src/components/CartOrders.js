import CleanserPic from '../assets/images/cleanser.png';
import React, { useState } from 'react';
import axios from 'axios';
import useOrder from '../hooks/useOrder';
import CartList from './CartList';
import { Link } from 'react-router-dom';
import { navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CartOrders() {
  // const [count, setCount] = React.useState(0);
  ///comitttt
  const ctx = useOrder();

  const { order } = ctx;
  console.log(order);

  const handleInputChange = input => e => {
    e.preventDefault();
    return function (e) {};
  };
  // const navigate = useNavigate();
  // navigate('/paymentpage');

  function calTotal(lists) {
    let totalPrice = 0;
    for (let product of lists) {
      let price = Number(product.Product.productPrice);
      let quantity = product.productQuantity;
      totalPrice += price * quantity;
      console.log(price, quantity);
    }
    return totalPrice;
    console.log(totalPrice);
  }

  let total = calTotal(order);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 mb-56 ">
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
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {order &&
                  order.map((el, idx) => (
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {idx + 1}
                      </td>
                      <CartList orderList={el} />
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="flex justify-center ">
              <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xl">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                  Total
                </h5>
                <p>{total}</p>
                <div className="col-1 text-right"></div>
                <Link to={{ pathname: '/paymentpage' }}>
                  <button
                    type="button"
                    className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
                    onClick={() => alert('Implement Checkout!')}
                  >
                    Buy Now
                  </button>
                </Link>
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

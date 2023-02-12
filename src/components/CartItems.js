import React from 'react';
import CleanserPic from '../assets/images/cleanser.png';

export default function CartItems() {
  const [count, setCount] = React.useState(0);

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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

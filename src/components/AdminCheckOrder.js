import { useEffect, useState } from 'react';
import { getAllOrderStatusApi } from '../apis/admin-api';

export default function AdminCheckOrder() {
  const [checkOrder, setCheckOrder] = useState();
  useEffect(() => {
    const getCheckStatus = async () => {
      const result = await getAllOrderStatusApi();
      console.log(result.data);
      setCheckOrder(result.data.checkOrder);
    };
    getCheckStatus();
  }, []);
  if (!checkOrder) {
    return <></>;
  }

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
                  >
                    Orders
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
                  >
                    User Id
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
                  >
                    Total Price
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 pl-6 py-4 text-left"
                  >
                    Order Status
                  </th>
                </tr>
              </thead>
              {checkOrder.map((el, idx) => {
                return (
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="pl-7 selection:pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.id}
                      </td>
                      <td className="pl-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.userId}
                      </td>
                      <td className="pl-7 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
                        {el.totalPrice}
                      </td>
                      <td className="pl-10 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                        {el.orderStatus}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

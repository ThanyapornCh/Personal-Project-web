import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import lllLogo from '../assets/icons/lll.png';
import { getAllBillApi } from '../apis/auth-api';
import useOrder from '../hooks/useOrder';
import { useEffect, useState } from 'react';

export default function OrderStatusPage() {
  // const [order,setOrder] = useState()
  // const fetchOrder = async () => {
  //   const res = await getAllBillApi()
  //   setOrder(res.data)
  // }
  // const ctx = useOrder();

  // const { order } = ctx;
  // console.log(order);
  const [billOrder, setBillOrder] = useState();
  useEffect(() => {
    const getSlipPayment = async () => {
      const result = await getAllBillApi();
      console.log(result.data);
      setBillOrder(result.data.billOrder);
    };
    getSlipPayment();
  }, []);
  if (!billOrder) {
    return <></>;
  }

  return (
    <>
      <HeaderCart />
      <div
        className="py-16 flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <div className="w-full h-[400px] max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-5">
          <form>
            <div className="flex justify-center">
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-2xl">
                LALA
                <br />
                Shop
              </span>
            </div>
            <h5 className="text-md font-medium text-gray-900 dark:text-white">
              LALA SHOP Bill
            </h5>
            <div className="m-auto">
              <tbody>
                <tr className="border-b  dark:border-neutral-500 px-10">
                  <td className="whitespace-nowrap   pr-48 py-2 font-normal text-sm">
                    Order Id:
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal text-sm">
                    {billOrder.id}
                  </td>
                </tr>
                <tr className="border-b  dark:border-neutral-500 px-10">
                  <td className="whitespace-nowrap  pr-48 py-2 font-normal text-sm">
                    User Id:
                  </td>
                  <td className="whitespace-nowrap px-6 py-2 font-normal text-sm">
                    {billOrder.userId}
                  </td>
                </tr>
              </tbody>
            </div>
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 pr-16 py-2 text-left"
                >
                  Product Name
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 pl-6 py-2 text-left"
                >
                  Product Price
                </th>
              </tr>
            </thead>
            <hr />
            <tbody>
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="pr-32 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {billOrder.productName}
                </td>
                <td className="pl-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {billOrder.productPrice}
                </td>
              </tr>
              <tr>
                <td className="pr-32 py-2  text-sm text-blue-700 hover:underline dark:text-blue-500">
                  Total Price:
                </td>
                <td className="pl-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                  {/* {total} */}123 B
                </td>
              </tr>
            </tbody>
          </form>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

import CleanserPic from '../assets/images/cleanser.png';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
import ProductList from '../components/ProductList';
import ModalAddProducts from '../components/ModalAddProducts';
import { useEffect, useState } from 'react';
import { getAllProductApi } from '../apis/product-api';
import ModalEditProducts from '../components/ModalEditProducts';
import useProduct from '../hooks/useProduct';
export default function CartOrdersAdmin() {
  // const ctx = useOrder();
  // const { order } = ctx;
  // console.log(ctx);
  const { products, fetchProduct } = useProduct();
  const [edit, setEdit] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [show, setShow] = useState(false);
  const [product, setProduct] = useState([]);
  const handleClick = () => {
    setShow(true);
  };

  // const fetchProduct = async () => {
  //   const res = await getAllProductApi();
  //   setProduct(res.data.products);
  // };

  useEffect(() => {
    const run = async () => {
      await fetchProduct();
    };
    run();

    console.log(edit);
  }, [trigger]);
  const list = [
    { name: 'cleanser', price: '100', quantity: 5 },
    { name: 'larniage', price: '150', quantity: 9 },
  ];

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
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item, index, idx) => (
                  <ProductList
                    index={index}
                    id={item.id}
                    name={item.productName}
                    price={item.productPrice}
                    image={item.productImage}
                    quantity={item.productQuantity}
                    edit={edit}
                    setEdit={setEdit}
                    setTrigger={setTrigger}
                  />
                ))}
              </tbody>
            </table>
            <div className="w-full py-8 flex justify-center items-center">
              <PlusCircleIcon
                onClick={handleClick}
                className="h-8 w-8 text-green-500 mx-3"
              />
            </div>
          </div>
        </div>
      </div>
      <ModalAddProducts
        show={show}
        setClose={setShow}
        setTrigger={setTrigger}
      />
    </div>
  );
}

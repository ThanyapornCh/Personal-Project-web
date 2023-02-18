import React, { useState } from 'react';
import CleanserPic from '../assets/images/cleanser.png';
import * as productApi from '../apis/product-api';
import useOrder from '../hooks/useOrder';
import ModalEditProducts from './ModalEditProducts';
import { useParams } from 'react-router-dom';
import useProduct from '../hooks/useProduct';
export default function ProductList({
  id,
  name,
  price,
  quantity,
  image,
  edit,
  setEdit,
}) {
  const [show, setShow] = useState(false);
  const handleOnClick = e => {
    e.preventDefault();
    setShow(true);
  };
  // console.log(id, 'id at prodlist');
  // const ctx = useOrder();

  // const { productId } = useParams();
  const handleClickButton = async id => {
    await productApi.deleteProducts(id);
    setEdit(!edit);
  };
  console.log(id);

  return (
    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        {id}
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
          <button
            type="button"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleOnClick}
          >
            Edit
            <ModalEditProducts
              name={name}
              price={price}
              image={image}
              quantity={quantity}
              show={show}
              setClose={setShow}
              id={id}
            />
          </button>

          <button
            onClick={() => handleClickButton(id)}
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

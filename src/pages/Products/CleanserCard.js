import CleanserPic from '../../assets/images/cleanser.png';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useOrder from '../../hooks/useOrder';

export default function CleanserCard({
  name,
  descriptions,
  productPicture,
  id,
}) {
  const [addCart, setAddCart] = useState('');
  const ctx = useOrder();

  const { handleAddCart } = ctx;
  const navigate = useNavigate();

  const handleClick = () => {
    handleAddCart(id);
    setAddCart(true);
    navigate('/cartsPage');
  };

  console.log(addCart);

  return (
    <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
      <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm ">
        <img
          class="z-index-[-10] h-40 w-40 flex justify-center  rounded-lg   "
          src={productPicture ?? CleanserPic}
          alt="cleanser01"
        />
      </div>
      <div class="p-2">
        <h5 class="text-gray-900  text-lg font-medium mb-2">{name}</h5>
        <p class="text-gray-700 text-sm mb-4">{descriptions}</p>
        <div className="flex flex-wrap gap-9">
          <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
            Buy Now
          </button>

          <button
            onClick={handleClick}
            className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm "
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

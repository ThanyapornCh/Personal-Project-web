import SunscreenPic from '../../assets/images/sunscreen.png';
import React from 'react';

export default function SunscreenCard({ name, discricptions, productPicture }) {
  return (
    <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
      <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
        <img
          class="h-40 w-40 flex justify-center object-cover rounded-lg   "
          src={productPicture ?? SunscreenPic}
          alt="cleanser01"
        />
      </div>
      <div class="p-2">
        <h5 class="text-gray-900  text-lg font-medium mb-2">{name}</h5>
        <p class="text-gray-700 text-sm mb-4">{discricptions}</p>
        <div className="flex flex-wrap gap-9">
          <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
            Buy Now
          </button>
          <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

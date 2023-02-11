import FooterUser from '../../components/FooterUser';
// import SearchBar from '../../components/SearchBar';
import CleanserPic from '../../assets/images/cleanser.png';
import CleanserCard from './CleanserCard';
import useProduct from '../../hooks/useProduct';
// import { Card } from 'flowbite-react';

export default function CleanserPage() {
  const { products } = useProduct();
  return (
    <div className="w-full h-auto flex justify-center items-center flex-wrap px-10 gap-8">
      {/* <h1 className=" flex flex-col ">Facial Cleanser</h1> */}
      {/* Card */}
      <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
      <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
      <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
      <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
      <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
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
      {/* <div className="w-[300px] h-[400px] flex flex-col items-center shadow-lg p-3 rounded-lg">
        <div class="w-60 h-80 p-5 rounded-xl  bg-white max-w-sm transform transition-all hover: -translate-y-2 duation-300">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img
              class="h-40 w-40 flex justify-center object-cover rounded-lg   "
              src={CleanserPic}
              alt="cleanser01"
            />
          </a>
        </div>
        <div class="p-2">
          <h5 class="text-gray-900  text-lg font-medium mb-2">
            Facial Cleanser
          </h5>
          <p class="text-gray-700 text-sm mb-4">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div className="flex flex-wrap gap-9">
            <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
              Buy Now
            </button>
            <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
              Add To Cart
            </button>
          </div>
        </div>
      </div> */}
      {products &&
        products.map(el => (
          <CleanserCard
            name={el.productName}
            discricptions={el.productDescription}
            productPicture={el.productImage}
            key={el.id}
            id={el.id}
          />
        ))}
    </div>
  );
}

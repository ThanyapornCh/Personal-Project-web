import { Carousel } from 'flowbite-react';
// import { Card } from 'flowbite-react';
import FooterUser from '../components/FooterUser';
import SearchBar from '../components/SearchBar';
import bg01Pic from '../assets/images/bg01.png';
import bg02Pic from '../assets/images/bg02.png';
import bg03Pic from '../assets/images/bg03.png';
import bg04Pic from '../assets/images/bg04.png';
import bg05Pic from '../assets/images/bg05.png';
import CleanserPage from './Products/CleanserPage';
import useProduct from '../hooks/useProduct';
// import { ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function Homepage() {
  return (
    <>
      <SearchBar />
      <div className="h-auto w-screen mt-4 flex flex-col gap-10">
        <div className="h-100 w-full">
          <Carousel className="h-56 w-full">
            <img src={bg01Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg02Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg03Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg04Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg05Pic} alt="..." className="h-56 w-full object-cover" />
          </Carousel>
        </div>
        <CleanserPage />

        {/* <div className="w-full h-auto flex justify-center items-center flex-wrap px-10 gap-8">
          <div className="w-[300px] h-[400px] flex justify items-center">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-sm text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise
              </p>

              <div className="flex flex-wrap gap-9">
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
                  Buy Now
                </button>
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
                  Add To Cart
                </button>
              </div>
            </Card>
          </div>

          <div className="w-[300px] h-[450px] flex justify items-center">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise
              </p>
              <div className="flex flex-wrap gap-9">
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
                  Buy Now
                </button>
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
                  Add To Cart
                </button>
              </div>
            </Card>
          </div>

          <div className="w-[300px] h-[450px] flex justify items-center">
            <Card
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
            >
              <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise
              </p>
              <div className="flex flex-wrap gap-9">
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
                  Buy Now
                </button>
                <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
                  Add To Cart
                </button>
              </div>
            </Card>
          </div>

          <div className="w-full h-auto flex justify-center items-center flex-row px-10 gap-8 ">
            <div className="w-[300px] h-[450px] flex justify items-center">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise
                </p>
                <div className="flex flex-wrap gap-9">
                  <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
                    Buy Now
                  </button>
                  <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
                    Add To Cart
                  </button>
                </div>
              </Card>
            </div>
            <div className="w-[300px] h-[450px] flex justify items-center">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise
                </p>
              </Card>
            </div>
            <div className="w-[300px] h-[450px] flex justify items-center">
              <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
              >
                <h5 className="text-sm font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise
                </p>
                <div className="flex flex-wrap gap-9">
                  <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-br from-purple-500 to-pink-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full shadow-xl  text-sm ">
                    Buy Now
                  </button>
                  <button className="transition ease-in-out delay-200 justify-center p-2 mx-2 bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300  text-white bold-3  rounded-full  shadow-xl  text-sm ">
                    Add To Cart
                  </button>
                </div>
              </Card>
            </div>
          </div> */}
        {/* </div> */}
        {/* </div> */}
        <FooterUser />
      </div>
    </>
  );
}

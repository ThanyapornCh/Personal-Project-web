import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import lllLogo from '../assets/icons/lll.png';

export default function orderStatus() {
  return (
    <>
      <HeaderCart />
      <div
        className="py-16 flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-5">
          <form className="space-y-6" action="#">
            <div className="flex justify-center">
              <span className="bg-clip-text text-transparent font-bold bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-2xl">
                LALA
                <br />
                Shop
              </span>
            </div>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              LALA SHOP Bill
            </h5>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Order Id
              </label>
            </div>
            <div className="flex items-start">
              <label
                htmlFor="remember"
                className=" text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                User Id
              </label>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
            </div>
            {/* <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Id
              </label>
            </div> */}
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Price
              </label>
            </div>

            <div className="flex items-start">
              <a
                href="#"
                className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Total Price:
              </a>
            </div>
          </form>
        </div>
      </div>
      <FooterUser />
    </>
  );
}

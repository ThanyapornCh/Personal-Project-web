import FooterUser from '../components/FooterUser';
import HeaderCart from '../layouts/HeaderCart';
import lllLogo from '../assets/icons/lll.png';

export default function orderStatus() {
  return (
    <>
      <HeaderCart />
      <div
        className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <div className="flex justify-center">
              <img
                className="flex justify-center object-cover"
                src={lllLogo}
                width="60px"
              />
            </div>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              LALA SHOP
            </h5>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Order Id
              </label>
            </div>
            <div className="flex items-start">
              <label
                for="remember"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                User Id
              </label>
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Name
              </label>
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Product Id
              </label>
            </div>
            <div>
              <label
                for="password"
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

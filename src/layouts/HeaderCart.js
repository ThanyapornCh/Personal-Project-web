import { ChevronLeftIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';

export default function HeaderCart() {
  return (
    <nav className="sticky top-0 w-screen backdrop-blur-md bg-white/40 drop-shadow-lg space-y-5 px-10 pl-2">
      <form className="flex items-center my-2 ">
        <button>
          <ChevronLeftIcon className="h-8 w-8 text-pink mx-3" />
        </button>
        <h4 className="text-pink font-bold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            LALA Shop
          </span>
        </h4>
        <div className="rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
          Add To Cart
        </div>

        <div className="flex flex-row  w-fit py-2 text-3xl mx-2 border-2 border-slate-300 hover:border-pink-300 rounded-full relative">
          <ShoppingBagIcon className="h-6 w-6 text-pink-500 mx-3" />
          <div className="absolute -top-2 -right-1.5 bottom-auto left-auto w-6 h-6 py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-500  text-white  text-sm rounded-full">
            7
          </div>
        </div>
      </form>
    </nav>
  );
}

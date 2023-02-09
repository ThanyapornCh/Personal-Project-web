export default function CartTotal() {
  return (
    <div className="flex justify-center ">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xl">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Total
        </h5>
        <p className="text-gray-700 text-base mb-4">Some quick example text</p>
        <button
          type="button"
          className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

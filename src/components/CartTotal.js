export default function CartTotal() {
  return (
    <div className="flex justify-center ">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-xl">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          Total
        </h5>
        <div className="col-1 text-right">
          <strong>${totalPrice.toFixed(2)}</strong>
        </div>
        <button
          type="button"
          className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
          onClick={() => alert('Implement Checkout!')}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

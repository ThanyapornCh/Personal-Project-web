export default function DataPersonalPage() {
  // let prevButton = null;
  // const wrapper = document.getElementById('wrapper');
  // const isButton = e.target.nodeName === 'BUTTON';
  // wrapper.addEventListener('click', e => {
  //   if (!isButton) {
  //     return;
  //   }
  //   e.target.classList.add('active'); // Add .active CSS Class
  //   if (prevButton !== null) {
  //     prevButton.classList.remove('active'); // Remove .active CSS Class
  //   }
  //   prevButton = e.target;
  // });

  return (
    // Start Data skin Type (check)
    <>
      <div
        className="w-screen h-screen flex justify-center flex-col 
    bg-gradient-to-br from-purple-700 to-amber-700 "
      >
        <form className="flex justify-center p-8">
          <span
            className=" flex justify-center m-3xl rounded-3xl px-10 py-2  text-white text-3xl  box-border md:box-content
             duration-300 ease-in"
            type="submit"
          >
            Check Skin Types
          </span>
        </form>
        <form className="p-10 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5">
          <h1 className="text-center text-3xl text-black">Skin Types</h1>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
            onClick={wrapper}
          >
            Dry Skin
          </button>

          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            Combination Skin
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            Oily Skin
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            Sensitive Skin
          </button>
        </form>
      </div>
      {/* End Data SkinType (check) start Problem (check) */}
      <div
        className="w-screen h-screen flex justify-center flex-col grid-xl items-center
    bg-gradient-to-br from-purple-700 to-amber-700 "
      >
        <form className="flex justify-center p-10">
          <span
            className=" flex justify-center m-3xl rounded-3xl px-10 py-2  text-white text-3xl  box-border md:box-content duration-300 ease-in"
            type="submit"
          >
            Check Skin Types
          </span>
        </form>
        <form
          className="p-10 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5"
          action=""
        >
          <h1 className="text-center text-2xl text-black">
            facial skin problems
          </h1>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            acne
          </button>

          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            melasma
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            blemish
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            wrinklespore
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            dark circles
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            pore
          </button>
        </form>
      </div>
      {/* End  Problem (check) */}
      {/* start skin care routine */}
      <div
        className="w-screen h-screen flex justify-center flex-col grid-xl items-center
    bg-gradient-to-br from-purple-700 to-amber-700 "
      >
        <form className="flex justify-center p-10">
          <span
            className=" flex justify-center m-3xl rounded-3xl px-10 py-2  text-white text-3xl  box-border md:box-content
             duration-300 ease-in"
            type="submit"
          >
            Skin Care Products
          </span>
        </form>
        <form
          className="p-10 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5"
          action=""
        >
          <h1 className="text-center text-2xl text-black">skin care</h1>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            facial cleanser
          </button>

          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            serum
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            moisturizer
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            Sunscreen
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            sleeping mask
          </button>
          <button
            className="w-full rounded-3xl px-10 py-2 bg-pink-600 text-white 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in"
            type="submit"
            id="wrapper"
          >
            {' '}
            eye cream
            {/* facial cleanser */}
          </button>
        </form>
      </div>
    </>
  );
}

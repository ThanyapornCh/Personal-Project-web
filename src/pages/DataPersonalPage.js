// import input from '../components/Input';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DataPersonalPage() {
  const initialProblem = {
    acne: false,
    malasma: false,
    blemish: false,
    wrinklespore: false,
    darkCircles: false,
    pore: false,
  };
  const [problems, setProblems] = useState({});
  const handleClickProblem = e => {
    setProblems({ ...problems, [e.target.name]: !problems[e.target.name] });
  };

  const initialProduct = {
    facialCleanser: false,
    serum: false,
    moisturizer: false,
    sunscreen: false,
    sleepingMask: false,
    eyeCream: false,
  };
  const [products, setProducts] = useState(initialProduct);
  const handleClickProduct = e => {
    setProducts({ ...products, [e.target.name]: !products[e.target.name] });
  };
  useEffect(() => {
    console.log(products);
  }, [products]);
  const initialTypes = {
    drySkin: false,
    combinationSkin: false,
    oilySkin: false,
    sensitiveSkin: false,
  };

  const [types, setTypes] = useState(initialTypes);
  function checkRadio(e) {
    setTypes({ [e.target.name]: !types[e.target.name] });
  }

  const navigate = useNavigate();
  function toHomepage() {
    navigate('/homepage');
  }

  return (
    // Start Data skin Type (check)
    <>
      <div
        className="w-screen h-screen flex justify-center flex-col 
    bg-gradient-to-br from-purple-700 to-amber-700 "
      >
        <form className="flex justify-center p-6 ">
          <span
            className=" flex justify-center m-3xl rounded-3xl px-10 py-2  text-white text-3xl  box-border md:box-content
             duration-300 ease-in"
            type="submit"
          >
            Check Skin Types
          </span>
        </form>
        <form
          className="p-6 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5 mx-5"
          action=""
        >
          <h1 className="text-center text-3xl text-black">Skin Types</h1>
          <button
            onClick={checkRadio}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              types.drySkin
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md '
                : ''
            }`}
            type="button"
            name="drySkin"
          >
            Dry Skin
          </button>

          <button
            onClick={checkRadio}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              types.combinationSkin
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md '
                : ''
            }`}
            type="button"
            name="combinationSkin"
          >
            Combination Skin
          </button>
          <button
            onClick={checkRadio}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              types.oilySkin
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md '
                : ''
            }`}
            type="button"
            name="oilySkin"
          >
            Oily Skin
          </button>
          <button
            onClick={checkRadio}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              types.sensitiveSkin
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md '
                : ''
            }`}
            type="button"
            name="sensitiveSkin"
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
        <form
          className="p-6 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5 mx-5"
          action=""
        >
          <h1 className="text-center text-2xl text-black">
            facial skin problems
          </h1>
          <button
            name="acne"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in `}
            type="button"
          >
            acne
          </button>

          <button
            name="melasma"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md  ${
              problems.melasma
                ? 'text-white hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in'
                : 'bg-white'
            }`}
            type="button"
          >
            melasma
          </button>
          <button
            name="blemish"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              problems.blemish
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
                : 'bg-white text-black'
            }`}
            type="button"
          >
            blemish
          </button>
          <button
            name="wrinklespore"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              problems.wrinklespore
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
                : 'bg-white text-black'
            }`}
            type="button"
          >
            wrinklespore
          </button>
          <button
            name="darkCircles"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              problems.darkCircles
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
                : 'bg-white text-black'
            }`}
            type="button"
          >
            dark circles
          </button>
          <button
            name="pore"
            onClick={handleClickProblem}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              problems.pore
                ? ' bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
                : 'bg-white text-black'
            }`}
            type="button"
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
        <form className="flex justify-center p-6">
          <span
            className=" flex justify-center m-3xl rounded-3xl px-10 py-2  text-white text-3xl  box-border md:box-content
             duration-300 ease-in"
            type="submit"
          >
            Skin Care Products
          </span>
        </form>
        <form
          className="p-6 backdrop-blur-md bg-white/40 rounded-xl drop-shadow-lg space-y-5 mx-5"
          action=""
        >
          <h1 className="text-center text-2xl text-black">skin care</h1>
          <button
            name="facialCleanser"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
              products.facialCleanser
                ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
                : 'bg-white text-black'
            }`}
            type="button"
          >
            facial cleanser
          </button>

          <button
            name="serum"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
            products.serum
              ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
              : 'bg-white text-black'
          }`}
            type="button"
          >
            serum
          </button>
          <button
            name="moisturizer"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black 
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
            products.moisturizer
              ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
              : 'bg-white text-black'
          }`}
            type="button"
          >
            moisturizer
          </button>
          <button
            name="sunscreen"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
            products.sunscreen
              ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
              : 'bg-white text-black'
          }`}
            type="button"
          >
            sunscreen
          </button>
          <button
            name="sleepingMask"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
            products.sleepingMask
              ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white'
              : 'bg-white text-black'
          }`}
            type="button"
          >
            sleeping mask
          </button>
          <button
            name="eyeCream"
            onClick={handleClickProduct}
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in ${
            products.eyeCream
              ? 'bg-gradient-to-r from-green-400 to-blue-500 drop-shadow-md text-white '
              : 'bg-white text-black'
          }`}
            type="button"
          >
            {' '}
            eye cream
            {/* facial cleanser */}
          </button>
        </form>
        <br />
        <button
          className=" backdrop-blur-md bg-white/40 rounded-full drop-shadow-lg"
          type="button"
          onClick={toHomepage}
        >
          <ChevronRightIcon className="h-8 w-8 text-white mx-3" />
        </button>
      </div>
    </>
  );
}

import { Bars3Icon } from '@heroicons/react/24/solid';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { Dropdown } from 'flowbite-react';
import { Link } from 'react-router-dom';
import MenuBar from '../components/MenuBar';
import { useContext, useState } from 'react';
import React from 'react';
import useOrder from '../hooks/useOrder';
// import { ProductContext } from '../../contexts/ProductContext';
// import Dropdown from '../layouts/Dropdown';

export default function SearchBar() {
  const [showDropdown, setShowDropDown] = useState(false);
  const ctx = useOrder();
  const { order } = ctx;
  const countorder = order.length;
  console.log(countorder);
  const [addCart, setAddCart] = useState('');
  const handleClick = () => {
    setAddCart(true);
  };
  console.log(addCart);

  // const [products, setProducts] = useContext(ProductContext);
  return (
    <nav className="absolute sticky top-0 w-screen backdrop-blur-md bg-white/40 drop-shadow-lg space-y-5 px-10 pl-2">
      <div className="flex items-center my-2">
        {/* <button
          id="multiLevelDropdownButton"
          data-dropdown-toggle="dropdown"
          type="button"
        >
          <Bars3Icon className="h-8 w-8 text-black mx-3" />
        </button> */}
        {/* <Dropdown />s */}
        <button>
          <Bars3Icon
            className="h-8 w-8 text-black mx-3"
            onClick={() => setShowDropDown(!showDropdown)}
          />
          {showDropdown && (
            <Dropdown
              arrowIcon={false}
              dismissonClick={false}
              onClick={MenuBar}
              inline={true}
              label={<MenuBar />}
            >
              <Dropdown.Item>
                <Link to={'/homepage'}>Home</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={'/'}>Products</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={'/'}>Brands</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={'/cartspage'}>Cart</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={'/'}>Payment</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={{ pathname: '/userpage' }}>Users</Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link to={'/'}>Sign Up</Link>
              </Dropdown.Item>
            </Dropdown>
          )}
        </button>

        <h4 className="text-pink font-bold ">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500">
            LALA Shop
          </span>
        </h4>
        <label for="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your keyword to search"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          ></button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-pink-600 text-white 
          hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in rounded-lg "
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>

        <div
          onClick={handleClick}
          className="flex flex-row  w-fit py-2 text-3xl mx-2 border-2 border-slate-300 hover:border-pink-300 rounded-full relative"
        >
          <Link to={{ pathname: '/cartspage' }}>
            <ShoppingBagIcon className="h-6 w-6 text-pink-500 mx-3" />
          </Link>
          <div className="absolute -top-2 -right-1.5 bottom-auto left-auto w-6 h-6 py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-pink-500  text-white  text-sm rounded-full">
            {countorder}
          </div>
        </div>
      </div>
    </nav>
  );
}

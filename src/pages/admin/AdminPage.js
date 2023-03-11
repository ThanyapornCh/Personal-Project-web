import FooterAdmin from '../../components/FooterAdmin';
import { Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div className="w-screen  flex flex-col justify-between bg-gradient-to-br from-purple-700 to-amber-700">
      {/* <div className="flex flex-col gap-2 flex justify-center "> */}
      <div className="flex justify-start  mx-15 mt-28  text-white space-y-2  ml-9 mb-5">
        <Avatar
          src="/docs/images/people/profile-picture-2.jpg"
          rounded={true}
          bordered={true}
        />
        <p className="pl-2">Panny Chame</p>
      </div>
      <form className="divide-y divide-slate-200 p-10 bg-white rounded-3xl drop-shadow-lg space-y-5 mx-5 mb-[100px] ">
        <div className="justify-center ">
          <div>
            <Link to={{ pathname: '/userpage' }}>
              <button className="w-full rounded-full p-2 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
                Data Users
              </button>
            </Link>
          </div>
        </div>

        <div>
          {/* <button className="w-full rounded-full p-2 m-1 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
            My Cart
          </button> */}
          <Link to={{ pathname: '/adminorderstatus' }}>
            <button className="w-full rounded-full p-2 m-1 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
              Order Status
            </button>
          </Link>
        </div>
        <div>
          <Link to={{ pathname: '/cartadminpage' }}>
            <button
              name="product"
              className={`w-full rounded-3xl px-10 py-2 bg-white text-black shadow-lg
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in `}
              type="button"
            >
              Add Product
            </button>
          </Link>
        </div>
        <div>
          {/* <button
            name="acne"
            className={`w-full rounded-3xl px-10 py-2 bg-white text-black shadow-lg
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in `}
            type="button"
          >
            Order List
          </button> */}
        </div>
        <div>
          <button
            name="acne"
            className={`w-full rounded-3xl px-10 py-2 bg-blue-600 text-white shadow-lg
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in `}
            type="button"
          >
            Log out
          </button>
        </div>
      </form>
      {/* </div> */}
      <FooterAdmin />
    </div>
  );
}

import { Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import FooterUser from '../components/FooterUser';

export default function UserPage() {
  return (
    <div className="w-screen h-[95vh] flex flex-col justify-between bg-gradient-to-br from-purple-700 to-amber-700">
      {/* <div className="flex flex-col gap-2 flex justify-center "> */}
      <div className="flex justify-start  mx-15 mt-48  text-white ml-9">
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          bordered={true}
        />
        Sophia Amber
      </div>
      <form className="divide-y divide-slate-200 p-10 bg-white rounded-3xl drop-shadow-lg space-y-5 mx-5 ">
        <div className="justify-center ">
          <div className="flex justify-center ">
            <button className="w-full rounded-full p-2 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
              Data Personal
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center ">
          <button className="w-full rounded-full p-2 m-1 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
            Order Status
          </button>
          {/* <button className="w-full rounded-full p-2 m-1 bg-gradient-to-br from-purple-500 to-pink-400 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
            Paid
          </button> */}
        </div>
        <div>
          <Link to={{ pathname: '/cartspage' }}>
            <button
              name="cart"
              className={`w-full rounded-3xl px-10 py-2 bg-white text-black shadow-lg
            hover:bg-gradient-to-r from-green-400 to-blue-500 hover:drop-shadow-md duration-300 ease-in `}
              type="button"
            >
              My Cart
            </button>
          </Link>
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
      <FooterUser />
    </div>
  );
}

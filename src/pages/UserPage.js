import FooterUser from '../components/FooterUser';
import { Avatar } from 'flowbite-react';

export default function UserPage() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-purple-700 to-amber-700">
      <div className="flex flex-col gap-2 flex justify-center ">
        <div className="flex justify-start  m-20  text-white">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
            bordered={true}
          />
          Sophia Amber
        </div>
        <form className="divide-y divide-slate-200 p-10 bg-white rounded-3xl drop-shadow-lg space-y-5 flex justify-center items-center mx-5 ">
          <div className="flex flex-wrap gap-2 ">
            <div className="flex justify-center">
              <button className="flex justify-center bold-2 shadow-xl rounded-full wx-30 border-2 border-slate-300 hover:border-pink-300">
                <div className="flex justify-center w-10 h-10 rounded-full p-2  m-1  bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl">
                  P
                </div>
                200
              </button>
              <button className="rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xlfont-medium drop-shadow-xl">
                Promotions
              </button>
            </div>
          </div>
        </form>
      </div>
      <FooterUser />
    </div>
  );
}

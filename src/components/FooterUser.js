import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
// import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { CashBag } from '../assets/picture';

export default function FooterUser() {
  return (
    <footer
      className="fixed w-full h-16 bg-white border-t-2 border-white
            sticky absolute left-0 bottom-0 right-0
            
            text-2xl "
    >
      <div className="flex justify-around">
        <Link to={{ pathname: '/homepage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <HomeIcon className="h-8 w-8 text-pink-500 mx-3" />
          </button>
        </Link>

        {/* <Link to={{ pathname: '/homepage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8 text-purple-500 mx-3" />
          </button>
        </Link> */}
        <Link to={{ pathname: '/cartspage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <ShoppingBagIcon className="h-8 w-8 text-pink-500 mx-3" />
          </button>
        </Link>
        <Link to={{ pathname: '/orderstatus' }}>
          <button className="flex-col m-2 p-2 ">
            <div className="w-[30px] h-[30px] fill-pink-500 mx-3">
              <CashBag />
            </div>
          </button>
        </Link>
        <Link to={{ pathname: '/userpage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <UserIcon className="h-8 w-8 text-pink-500 mx-3" />
          </button>
        </Link>
      </div>
    </footer>
  );
}

import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';
// import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import { UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

export default function FooterUser() {
  return (
    <footer
      className="fixed w-full h-16 bg-white border-t-2 border-white
              sticky left-0 bottom-0 right-0
              justify-center grid justify-items-stretch h-[6vh]
              text-2xl"
    >
      <div className="flex justify-around">
        <Link to={{ pathname: '/homepage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <HomeIcon className="h-8 w-8 text-purple-500 mx-3" />
          </button>
        </Link>
        <Link to={{ pathname: '/cartadminpage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <ShoppingBagIcon className="h-8 w-8 text-purple-500 mx-3" />
          </button>
        </Link>
        <Link to={{ pathname: '/adminpage' }}>
          <button className="flex-col m-2 p-2 text-3xl ">
            <UserIcon className="h-8 w-8 text-purple-500 mx-3" />
          </button>
        </Link>
      </div>
    </footer>
  );
}

import { HomeIcon } from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function FooterUser() {
  return (
    <footer
      className="w-full h-16 bg-white border-t-2 border-white
            fixed left-0 bottom-0 right-0
            flex justify-center items-center
            text-2xl"
    >
      <div className="flex justify-center ">
        <button className="flex-col m-2 p-2 text-3xl text-pink ">
          <HomeIcon className="h-8 w-8 text-pink mx-3" />
        </button>
        <button className="flex-col m-2 p-2  text-3xl text-pink">
          <HeartIcon className="h-8 w-8  mx-3" />
        </button>
        <button className="flex-col m-2 p-2 text-3xl text-pink">
          <i className="fa-light fa-solid fa-message" />
        </button>
        <button className="flex-col m-2 p-2 text-3xl text-[0A0707]">
          <i className="fa-light fa-solid fa-basket-shopping" />
        </button>
        <button className="flex-col m-2 p-2 text-3xl text-[0A0707]">
          <i className="fa-light fa-solid fa-user" />
        </button>
      </div>
    </footer>
  );
}

import { Carousel } from 'flowbite-react';
// import { Card } from 'flowbite-react';
import FooterUser from '../components/FooterUser';
import SearchBar from '../components/SearchBar';
import bg01Pic from '../assets/images/bg01.png';
import bg02Pic from '../assets/images/bg02.png';
import bg03Pic from '../assets/images/bg03.png';
import bg04Pic from '../assets/images/bg04.png';
import bg05Pic from '../assets/images/bg05.png';
import CleanserPage from './Products/CleanserPage';
import useProduct from '../hooks/useProduct';
import { createContext, useReducer } from 'react';

export default function Homepage() {
  return (
    <>
      <SearchBar />
      <div className="h-auto w-screen mt-4 flex flex-col gap-10">
        <div className="h-100 w-full">
          <Carousel className="h-56 w-full">
            <img src={bg01Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg02Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg03Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg04Pic} alt="..." className="h-56 w-full object-cover" />
            <img src={bg05Pic} alt="..." className="h-56 w-full object-cover" />
          </Carousel>
        </div>
        <CleanserPage />

        <FooterUser />
      </div>
    </>
  );
}

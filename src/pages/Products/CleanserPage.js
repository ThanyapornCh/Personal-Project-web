import FooterUser from '../../components/FooterUser';
import CleanserPic from '../../assets/images/cleanser.png';
import CleanserCard from './CleanserCard';
import useProduct from '../../hooks/useProduct';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';
// import { Card } from 'flowbite-react';

export default function CleanserPage() {
  const { products, setProducts } = useProduct();
  const clickHandler = () => {
    setProducts(prevcount => prevcount + 1);
  };
  const clickHandlerOne = () => {
    setProducts(prevcount => prevcount - 1);
  };
  console.log(products);

  return (
    <div className="w-full h-auto flex justify-center items-center flex-wrap px-10 gap-8">
      {products &&
        products.map(el => {
          return (
            <CleanserCard
              name={el.productName}
              productPicture={el.productImage}
              key={el.id}
              id={el.id}
            />
          );
        })}
    </div>
  );
}

// descriptions={el.productDescription}

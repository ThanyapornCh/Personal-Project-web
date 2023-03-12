// import FooterUser from '../components/FooterUser';

// import CleanserCard from '../pages/Products/CleanserCard';
// import useProduct from '../hooks/useProduct';
// import { useNavigate } from 'react-router-dom';
// import React, { useContext } from 'react';

// export default function SearchHomePage() {
//   const { products, setProducts, word, setWord } = useProduct();
//   // ประกาศ state ของ product ขึ้นมาแทน จะไม่ใช้รวมกับ product context

//   const clickHandler = () => {
//     setProducts(prevcount => prevcount + 1);
//   };
//   const clickHandlerOne = () => {
//     setProducts(prevcount => prevcount - 1);
//   };
//   console.log(products);

//   const searchHome = product => {
//     return product.filter(el => {
//       return el.productName.toLowerCase().includes(word.toLowerCase());
//     });
//   };
//   return (
//     <>
//       <div className="w-full h-auto flex justify-center items-center flex-wrap px-10 gap-8">
//         {products &&
//           searchHome(products).map(el => {
//             return (
//               <CleanserCard
//                 name={el.productName}
//                 productPicture={el.productImage}
//                 key={el.id}
//                 id={el.id}
//               />
//             );
//           })}
//       </div>
//       <FooterUser />
//     </>
//   );
// }

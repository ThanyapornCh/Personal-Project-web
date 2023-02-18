import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createProductApi,
  getAllBrandApi,
  getAllCategoriesApi,
  updateProductApi,
} from '../apis/product-api';
import useProduct from '../hooks/useProduct';

export default function ModalEditProducts({
  show,
  setClose,
  name,
  price,
  image,
  quantity,
}) {
  const [productName, setProductName] = useState(name);
  const [productPrice, setproductPrice] = useState(price);
  const [productDescription, setproductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState(quantity);
  const [productImage, setProductImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmitForm = async e => {
    // console.log(
    //   productImage,
    //   productName,
    //   productDescription,
    //   productPrice,
    //   productQuantity
    // );
    console.log('sard');
    if (productImage) {
      console.log('yo');
      const formData = new FormData();
      formData.append('productImage', productImage);
      formData.append('productName', productName);
      formData.append('productPrice', productPrice);
      formData.append('productDescription', productDescription);
      const res = await updateProductApi(formData);
      console.log(res.data);
    }
  };
  useEffect(() => {
    const api = async () => {
      const brand = await getAllBrandApi();

      const categories = await getAllCategoriesApi();

      setAllCategories(categories.data.categories);
      setAllBrand(brand.data.brand);
    };
    api();
  }, []);
  const [allBrand, setAllBrand] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  const { handleCreate } = useProduct();

  const handleOnClick = () => {
    handleSubmitForm();
    navigate('/cartadminpage');
  };

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center ${
        show ? ' block ' : ' hidden '
      }`}
      onClick={() => setClose(false)}
    >
      <div className=" flex justify-center items-center">
        <div
          onClick={e => e.stopPropagation()}
          className="block p-6 rounded-lg shadow-lg bg-white max-w-xl"
        >
          <div>
            <select>
              {allBrand?.map(el => (
                <option>{el.productName}</option>
              ))}
            </select>
            <label
              htmlFor="formFile"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Image
            </label>
            <input
              onChange={e => setProductImage(e.target.files[0])}
              // value={productImage}
              className="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-blue-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded-lg
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              type="file"
              id="formFile"
            />
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Name
              </span>
              <input
                className="w-full text-black px-3 py-2 rounded-md border border-slate-400"
                value={productName}
                onChange={e => setProductName(e.target.value)}
                type="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Description
              </span>
              <input
                className="w-full px-3 py-2 text-black rounded-md border border-slate-400"
                value={productDescription}
                onChange={e => setproductDescription(e.target.value)}
                type="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Price
              </span>
              <input
                className="w-full text-black px-3 py-2 rounded-md border border-slate-400"
                value={productPrice}
                onChange={e => setproductPrice(e.target.value)}
                type="name"
              />
            </label>
            <label className="block">
              <span className="block  text-sm font-medium mb-2 text-gray-900 ">
                Quantity
              </span>
              <input
                className="w-full  text-black px-3 py-2 rounded-md border border-slate-400"
                value={productQuantity}
                onChange={e => setProductQuantity(e.target.value)}
                type="name"
              />
            </label>
            <button
              onClick={handleOnClick}
              type="submit"
              className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

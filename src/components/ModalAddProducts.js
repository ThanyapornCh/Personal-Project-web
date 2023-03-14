import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createProductApi,
  getAllBrandApi,
  getAllCategoriesApi,
} from '../apis/product-api';
import useProduct from '../hooks/useProduct';

export default function ModalAddProducts({ show, setClose, setTrigger }) {
  const [productName, setProductName] = useState('');
  const [productPrice, setproductPrice] = useState('');
  const [productDescription, setproductDescription] = useState('');
  const [productQuantity, setProductQuantity] = useState('');
  const [productImage, setProductImage] = useState(null);

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

  const {
    newProduct,
    setNewProduct,
    newProductImage,
    setNewProductImage,
    handleCreate,
    fetchProduct,
  } = useProduct();
  console.log(newProductImage);

  const handleOnclick = async () => {
    await handleCreate();
    setClose(false);
    setTrigger(false);
    // fetchProduct();
    // window.location.reload(false);
  };

  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.3)] ${
        show ? ' block ' : ' hidden '
      }`}
      onClick={() => setClose(false)}
    >
      <div className="w-full h-full flex justify-center items-center">
        <div
          onClick={e => e.stopPropagation()}
          className="block p-6 rounded-lg shadow-lg bg-white max-w-xl"
        >
          <form>
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
              onChange={e => setNewProductImage(e.target.files[0])}
              value={productImage}
              className="form-control block w-full px-3    py-1.5    text-base   font-normal    text-blue-700   bg-white bg-clip-padding   border border-solid border-gray-300   rounded-lg   transition ease-in-out   m-0   focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
              type="file"
              id="formFile"
            />
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Name
              </span>
              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                value={newProduct.productName}
                onChange={e =>
                  setNewProduct({ ...newProduct, productName: e.target.value })
                }
                type="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Description
              </span>
              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                value={newProduct.productDescription}
                onChange={e =>
                  setNewProduct({
                    ...newProduct,
                    productDescription: e.target.value,
                  })
                }
                type="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Price
              </span>
              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                value={newProduct.productPrice}
                onChange={e =>
                  setNewProduct({ ...newProduct, productPrice: e.target.value })
                }
                type="name"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium mb-2 text-gray-900 ">
                Quantity
              </span>
              <input
                className="w-full px-3 py-2 rounded-md border border-slate-400"
                value={newProduct.productQuantity}
                onChange={e =>
                  setNewProduct({
                    ...newProduct,
                    productQuantity: e.target.value,
                  })
                }
                type="name"
              />
            </label>
            <button
              onClick={handleOnclick}
              type="button"
              className=" rounded-full p-2 m-1 bg-gradient-to-br from-pink-500 to-yellow-500 text-white bold-2 shadow-xl font-medium drop-shadow-xl"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import { createContext, useEffect, useState } from 'react';
import * as productApi from '../apis/product-api';
import axios from '../config/axios';
export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [products, setProducts] = useState();
  const [newProduct, setNewProduct] = useState({
    productName: '',
    productPrice: '',
    productDescription: '',
  });
  const [updateproduct, setUpdateProduct] = useState();
  const [newProductImage, setNewProductImage] = useState(null);
  const [updateProductImage, setUpdateProductImage] = useState(null);
  const [trigger, setTrigger] = useState(true);
  const [word, setWord] = useState('');
  const formData = new FormData();
  formData.append('productImage', newProductImage);
  formData.append('productName', newProduct.productName);
  formData.append('productPrice', newProduct.productPrice);
  formData.append('productDescription', newProduct.productDescription);
  formData.append('brandId', 3);
  formData.append('categoriesId', 6);

  const handleCreate = async e => {
    await axios.post('/products/addProducts', formData);
  };

  // const [counter, setCounter] = useState(false);

  // console.log(products);

  const run = async () => {
    const res = await productApi.getAllProductApi();
    setProducts(res.data.products);
  };
  useEffect(() => {
    run();
  }, []);

  const handleUpdateProduct = async id => {
    formData.append('id', id);
    await axios.post('/products/updateProducts', formData);
  };

  const fetchProduct = async () => {
    const res = await productApi.getAllProductApi();
    setProducts(res.data.products);
  };

  function addProduct() {}
  // console.log(products);

  // const login = async input => {
  //   return await axios.post('http://localhost:8888/auth/login', input);
  // };
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        newProduct,
        setNewProduct,
        newProductImage,
        setNewProductImage,
        handleCreate,
        updateproduct,
        setUpdateProduct,
        handleUpdateProduct,
        trigger,
        setTrigger,
        word,
        setWord,
        fetchProduct,
        run,
        updateProductImage,
        setUpdateProductImage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

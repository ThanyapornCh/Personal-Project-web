import axios from '../config/axios';
export const createProductApi = input =>
  axios.post('/products/addProducts', input);

export const getAllCategoriesApi = () => axios.get('/products/addcategories');
export const getAllBrandApi = () => axios.get('/products/addbrand');
export const getAllProductApi = () => axios.get('/products/allproducts');

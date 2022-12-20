import { getProduct, getProductById, getProductBySearch } from '@/redux/slices/products.slice';
import axios from 'axios';

const BASE_URL = "https://dummyjson.com";

const api = {
  allProducts: () => async (dispatch: any) => {
    await axios(
      `${BASE_URL}/products`)
      .then((data) => dispatch(getProduct(data.data.products)))
      .catch((err) => console.log(err));
  },
  getProductById: (id: string) => async (dispatch: any) => {
    await axios(`${BASE_URL}/products/${id}`)
      .then((data) => dispatch(getProductById(data.data)))
      .catch((err) => console.log(err));
  },
  getProductBySearch: (product: string) => async (dispatch: any) => {
    await axios(`${BASE_URL}/products/search?q=${product}`)
      .then((data) => dispatch(getProductBySearch(data.data.products)))
      .catch((err) => console.log(err));
  },
  getAllCategories: async () => {
    const request = await axios(`${BASE_URL}/products/categories`);
    return request.data;
  },
  getProductCategory: async (category: string) => {
    const request = await axios(`${BASE_URL}/products/category/${category}`);
    return request.data.products;
  },
};

export default api;

import axios from 'axios';
import { Product } from '../types/types';

const BASE_URL = "https://dummyjson.com";

const api = {
  allProducts: async (): Promise<Product[]> => {
    const request = await axios(
      `${BASE_URL}/products`);
    return request.data.products;
  },
  getProductById: async (id: string): Promise<Product> => {
    const request = await axios(`${BASE_URL}/products/${id}`);
    return request.data;
  },
  getProductBySearch: async (product: string): Promise<Product> => {
    const request = await axios(`${BASE_URL}/products/search?q=${product}`);
    return request.data.products;
  },
  getAllCategories: async () => {
    const request = await axios(`${BASE_URL}/products/categories`);
    return request.data;
  },
  getProductCategory: async (category: string) => {
    const request = await axios(`${BASE_URL}/products/category/${category}`);
    return request.data.products;
  }
};

export default api;

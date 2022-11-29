import axios from "axios";
import { Params } from "react-router";
import { Product } from "../types/types";

const BASE_URL = "https://dummyjson.com";

const api = {
  allProducts: async (): Promise<Product[]> => {
    const request = await axios(
      `${BASE_URL}/products`);
    return request.data.products    
  },
  getProductById: async (id:string): Promise<Product> => {
    const request = await axios(`${BASE_URL}/products/${id}`)
    return request.data
  }
};

export default api;

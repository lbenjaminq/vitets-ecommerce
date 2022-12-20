import { api } from "@/api";
import { getProductBySearch } from "../slices/products.slice";

export const getProductByCategory = (category: string) => (dispatch: any) => {
  api
    .getProductCategory(category)
    .then((data) => dispatch(getProductBySearch(data)))
    .catch((err) => console.log(err));
};

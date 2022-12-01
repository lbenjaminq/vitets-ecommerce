import { getProduct, getProductById, getProductBySearch } from '../slices/products.slice';
import api from '../../api/api';

export const getProductAction = () => (dispatch: any) => {
  api
    .allProducts()
    .then((data) => dispatch(getProduct(data)))
    .catch((err) => console.log(err));
};

export const getProductByIdAction = (id: string) => (dispatch: any) => {
  api
    .getProductById(id)
    .then((data) => dispatch(getProductById(data)))
    .catch((err) => console.log(err));
}

export const getProductSearchAction = (product: string) => (dispatch: any) => {
  api
    .getProductBySearch(product)
    .then((data) => dispatch(getProductBySearch(data)))
    .catch((err) => console.log(err))
}
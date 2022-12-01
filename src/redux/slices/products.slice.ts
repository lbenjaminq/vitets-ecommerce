import { createSlice } from "@reduxjs/toolkit";
import { ProductState } from "../../types/types";

const initialStateProducts: ProductState = {
  products: [],
  productDetail: null
}


export const productSlice = createSlice({
  name: 'products',
  initialState: initialStateProducts,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
    },
    getProductById: (state, action) => {
      state.productDetail = action.payload;
    },
    getProductBySearch: (state, action) => {
      state.products = action.payload;
    },
    cleanState: (state) => {
      state = initialStateProducts;
    }
  }
})

console.log(initialStateProducts)
export const { getProduct, getProductById, getProductBySearch, cleanState } = productSlice.actions;

export default productSlice.reducer

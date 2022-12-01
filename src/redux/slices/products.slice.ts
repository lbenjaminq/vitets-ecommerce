import { Price } from '@/models';
import { ProductState } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialStateProducts: ProductState = {
  products: [],
  productsClean: [],
  productDetail: null
}

export const productSlice = createSlice({
  name: 'products',
  initialState: initialStateProducts,
  reducers: {
    getProduct: (state, action) => {
      state.products = action.payload;
      state.productsClean = action.payload;
    },

    getProductById: (state, action) => state.productDetail = action.payload,

    getProductBySearch: (state, action) => state.products = action.payload,

    priceFilter: (state, action: PayloadAction<Price>) => {
      if (action.payload === 'cheap') {
        const priceProduct = state.products.sort((a, b) => a.price - b.price);
        state.products = priceProduct;
      } else if (action.payload === 'expensive') {
        const priceProduct = state.products.sort((a, b) => b.price - a.price);
        state.products = priceProduct;
      } else {
        state.products = state.productsClean;
      }
    },

    categoryFilter: (state, action) => state.products = action.payload,

    cleanState: (state) => state = initialStateProducts,
  }
})

export const { getProduct, getProductById, getProductBySearch, priceFilter, categoryFilter, cleanState } = productSlice.actions;

export default productSlice.reducer;

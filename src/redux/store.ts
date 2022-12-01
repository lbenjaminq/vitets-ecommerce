import { configureStore } from "@reduxjs/toolkit";
import { CartProduct, ProductState, UserActive } from "../types/types";
import cartSlice from "./slices/cart.slice";
import productSlice from "./slices/products.slice";
import userSlice from "./slices/user.slice";

export interface AppStore {
  cartProducts: CartProduct[],
  user: UserActive,
  products: ProductState
}
const store = configureStore<AppStore>({
  reducer: {
    cartProducts: cartSlice,
    user: userSlice,
    products: productSlice,
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store;
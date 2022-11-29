import { configureStore } from "@reduxjs/toolkit";
import { CartProduct } from "../types/types";
import cartSlice from "./slices/cart.slice";

export interface AppStore {
  products: CartProduct[]
}
const store = configureStore<AppStore>({
  reducer: {
    products: cartSlice
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store;
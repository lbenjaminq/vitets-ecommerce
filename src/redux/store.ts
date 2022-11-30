import { configureStore } from "@reduxjs/toolkit";
import { CartProduct, UserActive } from "../types/types";
import cartSlice from "./slices/cart.slice";
import userSlice from "./slices/user.slice";

export interface AppStore {
  products: CartProduct[],
  user:UserActive
}
const store = configureStore<AppStore>({
  reducer: {
    products: cartSlice,
    user: userSlice
  }
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>


export default store;
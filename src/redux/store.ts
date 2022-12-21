import { CartProduct, ProductState, UserLocalStorage } from '@/types/types';
import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cart.slice';
import productSlice from './slices/products.slice';
import userSlice from './slices/user.slice';

export interface AppStore {
  cartProducts: CartProduct[],
  user: UserLocalStorage,
  products: ProductState
}
const store = configureStore<AppStore>({
  reducer: {
    cartProducts: cartSlice,
    user: userSlice,
    products: productSlice,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


export default store;
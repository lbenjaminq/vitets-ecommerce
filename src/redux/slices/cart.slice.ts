import { getItem } from '@/utilities/useLocalStorage';
import { CartProduct } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState: CartProduct[] = getItem('cart') || []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartProduct>) => {
      const { title, brand, id, thumbnail, price, stock, amount } = action.payload;
      const itemFind = state.find((item) => item.id === id)
      if (itemFind) {
        return state.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        });
      } else {
        state.push({ title, brand, id, thumbnail, amount, price, stock });
      }
    },
    removeToCart: (state, action: PayloadAction<CartProduct>) => {
      const { id } = action.payload;
      const itemFind = state.find((item) => item.id === id);
      if (itemFind) {
        if (itemFind.amount > 1) {
          return state.map((item) => {
            if (item.id === id) {
              return {
                ...item,
                amount: item.amount - 1
              }
            }
            return item;
          })
        } else {
          return state.filter(item => item.id !== id);
        }
      }
    },
    cleanCart: (state, action) => { }
  }
})

export const { addToCart, removeToCart, cleanCart } = cartSlice.actions

export default cartSlice.reducer;
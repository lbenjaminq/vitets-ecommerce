import { getItem } from '@/localstorage/useLocalStorage';
import { UserActive } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserActive = getItem('user') || { email: "", password: "" };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userActive: (state, action: PayloadAction<UserActive>) => {
      const { email, password } = action.payload;
      state = { email, password };
      return state;
    },

    userSignOut: () => initialState,
  }
})

export const { userActive, userSignOut } = userSlice.actions;
export default userSlice.reducer;
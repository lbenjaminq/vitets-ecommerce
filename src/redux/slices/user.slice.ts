import { getItem } from '@/utilities/useLocalStorage';
import { UserLocalStorage } from '@/types/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: UserLocalStorage = getItem('user') || { email: "", uid: "" };

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userActive: (state, action: PayloadAction<UserLocalStorage>) => {
      const { email, uid } = action.payload;
      state = { email, uid };
      return state;
    },

    userSignOut: () => { return { email: "", uid: "" } },
  }
})

export const { userActive, userSignOut } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../localstorage/useLocalStorage";
import { UserActive } from "../../types/types";

const initialState: UserActive = getItem('user') || { email: "", password: "" }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userActive: (state, action: PayloadAction<UserActive>) => {
      // setItem('user',{email,password})
      const { email, password } = action.payload;
      state = { email, password };
      return state;
    },
    userSignOut: () => {
      return initialState;
    },
  }
})

export const { userActive, userSignOut } = userSlice.actions;
export default userSlice.reducer;
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserAccount } from "../../types/types";

const initialState: UserAccount = {
  email:"",
  password:"",
  address:"",
  cellphone:0
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
    userActive: (state,action:PayloadAction<UserAccount>) => {
      const {email,password,address,cellphone} = action.payload
      state = {email,password,address,cellphone}
      return state
    },
    userSignOut:() => {
      return initialState
    },
  }
})

export const { userActive, userSignOut } = userSlice.actions
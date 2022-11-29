import { CartProduct } from "../types/types"

export const getItem = (key:string) => {
  return JSON.parse(window.localStorage.getItem(key)!)
}

export const setItem = (key:string,data:any) => {
  return window.localStorage.setItem(key,JSON.stringify(data))
}
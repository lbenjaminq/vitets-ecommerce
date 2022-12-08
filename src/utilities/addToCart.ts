import { addToCart } from "@/redux/slices/cart.slice";
import { Product } from "@/types/types";

export const addToCartProduct = (productCart: Product, dispatch: any) => {
  const { id, brand, title, price, thumbnail, stock } = productCart;
  dispatch(addToCart({ id, brand, title, price, thumbnail, stock, amount: 1 }));
};
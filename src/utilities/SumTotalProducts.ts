import { CartProduct } from "@/types/types"

export const sumTotalProducts = (products: CartProduct[]) => {
  return products.reduce((acc, item) => {
    return acc + item.amount
  }, 0)
}
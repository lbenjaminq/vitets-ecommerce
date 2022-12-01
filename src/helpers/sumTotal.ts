import { CartProduct } from '../types/types'

export const sumTotal = (products : CartProduct[]) => {
  return products.reduce((acc, item) => {
    return acc + (item.price * item.amount)
  },0)
}
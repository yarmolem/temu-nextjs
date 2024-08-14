import { IProduct } from './product.types'

export interface IShoppingCardItem {
  id: string
  quantity: number
  product: IProduct
  selected: boolean
}

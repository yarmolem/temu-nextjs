import { create } from 'zustand'
import { nanoid } from 'nanoid'

import type { IProduct } from '@/interface/product.types'
import type { IShoppingCardItem } from '@/interface/shopping-card.types'

interface Values {
  cart: IShoppingCardItem[]
}

interface Actions {
  clearCart: () => void
  removeItem: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  addItem: (product: IProduct) => void
  toggleSelectItem: (id: string) => void
  toggleSelectAll: () => void
  getTotal: (cart: IShoppingCardItem[]) => number
  isAllSelected: (cart: IShoppingCardItem[]) => boolean
  isSomeSelected: (cart: IShoppingCardItem[]) => boolean
}

export const useShoppingCart = create<Values & Actions>((set, get) => ({
  cart: [],
  clearCart: () => set({ cart: [] }),
  removeItem: (id) => {
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id)
    }))
  },
  increaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
    }))
  },
  decreaseQuantity: (id) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 }
        }
        return item
      })
    }))
  },
  addItem: (product) => {
    const { cart, increaseQuantity } = get()
    const cartItem = cart.find((item) => item.product.id === product.id)

    if (cartItem) {
      increaseQuantity(cartItem.id)
      return
    }

    set((state) => ({
      cart: [
        ...state.cart,
        {
          product,
          quantity: 1,
          id: nanoid(),
          selected: true
        }
      ]
    }))
  },
  toggleSelectItem: (id) => {
    set((state) => ({
      cart: state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected }
        }
        return item
      })
    }))
  },
  toggleSelectAll: () => {
    const isAllSelected = get().isAllSelected(get().cart)

    set((state) => ({
      cart: state.cart.map((item) => ({ ...item, selected: !isAllSelected }))
    }))
  },
  getTotal: (cart) => {
    return cart.reduce(
      (acc, item) => acc + item.product.price * item.quantity,
      0
    )
  },
  isAllSelected: (cart) => {
    return cart.every((item) => item.selected)
  },
  isSomeSelected: (cart) => {
    return cart.some((item) => item.selected)
  }
}))

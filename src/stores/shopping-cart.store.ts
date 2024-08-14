import { create } from 'zustand'
import { nanoid } from 'nanoid'

import type { IProduct } from '@/interface/product.types'
import type { IShoppingCardItem } from '@/interface/shopping-card.types'

interface Values {
  cart: IShoppingCardItem[]
}

interface Actions {
  clearCart: () => void
  removeFromCart: (id: string) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  addToCart: (product: IProduct) => void
}

export const useShoppingCart = create<Values & Actions>((set) => ({
  cart: [],
  clearCart: () => set({ cart: [] }),
  removeFromCart: (id) => {
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
  addToCart: (item) => {
    set((state) => ({
      cart: [
        ...state.cart,
        {
          quantity: 1,
          id: nanoid(),
          product: item
        }
      ]
    }))
  }
}))

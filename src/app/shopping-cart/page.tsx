'use client'

import ProductCard from '@/components/shared/product-card'
import { CustomCheckbox } from '@/components/ui/custom-checkbox'
import { useShoppingCart } from '@/stores/shopping-cart.store'
import { MinusIcon, PlusIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const ShoppingCartPage = () => {
  const store = useShoppingCart()

  return (
    <>
      <div className="bg-background p-3">
        <p className="text-center font-semibold mb-3">
          Carrito ({store.cart.length})
        </p>

        <div>
          {store.cart.map((item) => (
            <div key={item.id} className="w-full flex">
              <CustomCheckbox className="mr-2 my-auto" />
              <Image
                src={item.product.cover}
                alt={item.product.title}
                width={104}
                height={104}
                className="mr-1"
              />

              <div className="flex flex-col justify-between  flex-1">
                <p className="text-muted-foreground text-xs">
                  {item.product.title}
                </p>
                <p className="text-muted-foreground text-xs">Blanco</p>

                <div className="mt-auto flex items-center gap-x-1">
                  <p className="text-sm text-primary font-semibold">S/ 59.37</p>
                  <p className="text-muted-foreground text-xs line-through">
                    100.79
                  </p>

                  <div className="border grid grid-cols-3 ml-auto w-24 h-8">
                    <button
                      disabled={item.quantity === 1}
                      onClick={() => store.decreaseQuantity(item.id)}
                      className="bg-muted flex items-center justify-center"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>

                    <span className="text-center text-sm font-semibold my-auto">
                      {item.quantity}
                    </span>

                    <button
                      disabled={item.quantity === 10}
                      onClick={() => store.increaseQuantity(item.id)}
                      className="bg-muted flex items-center justify-center"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ShoppingCartPage

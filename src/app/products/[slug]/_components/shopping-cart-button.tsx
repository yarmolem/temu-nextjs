'use client'

import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { useShoppingCart } from '@/stores/shopping-cart.store'
import { IProduct } from '@/interface/product.types'
import { MinusIcon, PlusIcon } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ShoppingCartButtonProps {
  product: IProduct
}

const ShoppingCartButton = (props: ShoppingCartButtonProps) => {
  const store = useShoppingCart()

  const productInCart = store.cart.find(
    (item) => item.product.id === props.product.id
  )

  return (
    <>
      {!productInCart && (
        <Button className="w-full" onClick={() => store.addItem(props.product)}>
          Añadir al carrito
        </Button>
      )}

      {productInCart && (
        <div className="w-full grid grid-cols-2 gap-x-2">
          <div className="flex items-center gap-x-2">
            <Button
              size="icon"
              variant={'outline'}
              disabled={productInCart.quantity === 1}
              onClick={() => store.decreaseQuantity(productInCart.id)}
            >
              <MinusIcon className="w-4 h-4" />
            </Button>
            <div className="text-center">
              <p className="text-sm font-semibold">
                {productInCart.quantity} añadido
              </p>
              <p className="text-xs">Blanco</p>
            </div>
            <Button
              size="icon"
              variant={'outline'}
              disabled={productInCart.quantity === 10}
              onClick={() => store.increaseQuantity(productInCart.id)}
            >
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
          <Link
            href="/shopping-cart"
            className={cn(buttonVariants(), 'bg-green-500')}
          >
            Ir al carrito
          </Link>
        </div>
      )}
    </>
  )
}

export default ShoppingCartButton

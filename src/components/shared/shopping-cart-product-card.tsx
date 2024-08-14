import React from 'react'
import Image from 'next/image'
import { MinusIcon, PlusIcon } from 'lucide-react'

import { CustomCheckbox } from '../ui/custom-checkbox'
import { IShoppingCardItem } from '@/interface/shopping-card.types'
import Link from 'next/link'

interface ShoppingCartProductCardProps {
  item: IShoppingCardItem
  checked: boolean
  showQuantity?: boolean
  onCheckChange: () => void
  onDecreaseQuantity?: () => void
  onIncreaseQuantity?: () => void
}

const ShoppingCartProductCard = ({
  item,
  checked,
  showQuantity = true,
  onCheckChange,
  onDecreaseQuantity,
  onIncreaseQuantity
}: ShoppingCartProductCardProps) => {
  return (
    <>
      <div className="w-full flex">
        <CustomCheckbox
          className="mr-2 my-auto"
          checked={checked}
          onChange={() => onCheckChange()}
        />
        <Link href={`/products/${item.product.slug}`}>
          <Image
            width={104}
            height={104}
            className="mr-1"
            src={item.product.cover}
            alt={item.product.title}
          />
        </Link>

        <div className="flex flex-col justify-between  flex-1">
          <Link href={`/products/${item.product.slug}`}>
            <p className="text-muted-foreground text-xs">
              {item.product.title}
            </p>
          </Link>
          <p className="text-muted-foreground text-xs">Blanco</p>

          <div className="mt-auto flex items-center gap-x-1">
            <p className="text-sm text-primary font-semibold">
              S/ {item.product.price}
            </p>

            {showQuantity && (
              <div className="border grid grid-cols-3 ml-auto w-24 h-8">
                <button
                  disabled={item.quantity === 1}
                  onClick={() => onDecreaseQuantity?.()}
                  className="bg-muted flex items-center justify-center"
                >
                  <MinusIcon className="w-4 h-4" />
                </button>

                <span className="text-center text-sm font-semibold my-auto">
                  {item.quantity}
                </span>

                <button
                  disabled={item.quantity === 10}
                  onClick={() => onIncreaseQuantity?.()}
                  className="bg-muted flex items-center justify-center"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCartProductCard

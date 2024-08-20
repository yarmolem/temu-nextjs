'use client'

import { IProduct } from '@/interface/product.types'
import { cn } from '@/lib/utils'
import { useShoppingCart } from '@/stores/shopping-cart.store'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useMemo } from 'react'

interface ProductCardProps {
  data: IProduct
  className?: string
}

const ProductCard = (props: ProductCardProps) => {
  const store = useShoppingCart()
  const isWide = useMemo(() => Math.random() > 0.5, [])

  return (
    <div className={cn('', props.className)}>
      <Link href={`/products/${props.data.slug}`}>
        <div
          className={cn(
            'w-full relative rounded overflow-hidden',
            isWide ? 'aspect-[3/4]' : 'aspect-square'
          )}
        >
          <Image fill alt={props.data.title} src={props.data.cover} />
        </div>
      </Link>

      <div className="w-full p-1">
        <Link href={`/products/${props.data.slug}`}>
          <p className="text-sm font-medium line-clamp-1 mb-1">
            {props.data.title}
          </p>
        </Link>
        <div className="flex items-center">
          <p className="text-xs mr-1 font-semibold">
            S/ <span className="text-base">26</span>.78
          </p>
          <p className="line-through text-xs text-muted-foreground">63.99</p>

          <button
            onClick={() => store.addItem(props.data)}
            className="py-1 px-3 border border-foreground rounded-full ml-auto"
          >
            <ShoppingCartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

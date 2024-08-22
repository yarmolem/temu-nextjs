'use client'

import ProductCard from '@/components/shared/product-card'
import { Button } from '@/components/ui/button'
import { products } from '@/data/products'
import { cn, sleep } from '@/lib/utils'
import {
  CheckIcon,
  ChevronRightIcon,
  ClockIcon,
  LoaderIcon
} from 'lucide-react'
import Image from 'next/image'
import React, { memo, useEffect, useState } from 'react'

interface CategoryItemProps {
  category: string
  enabled?: boolean
}

export const containerItemClassName =
  'flex w-full min-h-[calc(100dvh_-_50px_-_48px)]'

const CategoryItem = (props: CategoryItemProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [subCategory, setSubCategory] = useState<string>('Todos')

  useEffect(() => {
    if (props.enabled) {
      sleep(1000).then(() => setIsLoading(false))
    }
  }, [props.enabled])

  if (isLoading) {
    return (
      <div
        className={cn(containerItemClassName, 'items-center justify-center')}
      >
        <LoaderIcon className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className={cn(containerItemClassName, 'flex-col')}>
      <Button
        variant="ghost"
        className="bg-orange-100 flex items-center px-3 py-2 text-foreground rounded-none"
      >
        <CheckIcon className="w-6 h-6 text-green-500 mr-1" />
        <p className="text-sm font-semibold">Envío gratis para ti</p>

        <div className="flex items-center ml-auto text-muted-foreground">
          <p className="text-sm font-semibold ">Oferta exclusiva</p>
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </div>
      </Button>

      <ul className="max-w-[100dvw] pt-3 pb-1 overflow-x-auto no-scroll-indicator flex items-start">
        {[
          'Todos',
          'Ofertas',
          'Joyeria',
          'Ropa interior y pijamas',
          'Vestimenta',
          'Pijamas',
          'Belleza',
          'Calzado',
          'Bolsos',
          'Mujer curvy'
        ].map((subcategory) => (
          <button
            key={subcategory}
            data-ignore-carousel="true"
            className="min-w-[25%] max-w-[25%] flex items-center flex-col"
            onClick={() => setSubCategory(subcategory)}
          >
            <div
              data-ignore-carousel="true"
              className={cn(
                'w-[80%] p-1 border border-transparent flex items-center justify-center aspect-square rounded-full mb-3',
                {
                  'border-foreground': subcategory === subCategory
                }
              )}
            >
              <div
                data-ignore-carousel="true"
                className="relative w-full aspect-square rounded-full overflow-hidden"
              >
                <Image fill alt="" src="https://placehold.co/112x112.png" />
              </div>
            </div>
            <div
              className={cn(
                'text-xs p-1 text-center font-semibold rounded-full hyphens-auto text-muted-foreground',
                {
                  'bg-foreground text-background ': subcategory === subCategory
                }
              )}
            >
              {subcategory}
            </div>
          </button>
        ))}
      </ul>

      <ul className="columns-2 gap-x-1">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            data={product}
            className="w-full break-inside-avoid mb-2"
          />
        ))}
      </ul>
    </div>
  )
}

export default CategoryItem

'use client'

import Image from 'next/image'
import React, { memo, useState } from 'react'
import {
  ClockIcon,
  LoaderIcon,
  HandCoinsIcon,
  ShieldCheckIcon,
  ChevronRightIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import ProductCard from '@/components/shared/product-card'

import { cn } from '@/lib/utils'
import { products } from '@/data/products'
import { subCategories } from '@/data/categories'

const CategoryItemAll = () => {
  const [isLoading] = useState(false)

  if (isLoading) {
    return (
      <div className={cn('h-screen items-center justify-center')}>
        <LoaderIcon className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className={cn('flex-col space-y-2 overflow-y-auto h-screen')}>
      <div className="w-full h-[110px] bg-purple-100 flex justify-center items-center">
        <span>BANNER 01</span>
      </div>

      <section className="w-full bg-background p-3">
        <Button
          size="sm"
          className="bg-green-700 text-background w-full px-2 mb-1"
        >
          <ShieldCheckIcon className="fill-background stroke-green-700 mr-1" />
          <p className="font-bold">Compromisos Temu</p>

          <div className="flex items-center ml-auto">
            <p className="font-semibold">Pagos seguros</p>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </Button>

        <div className="flex items-center">
          <Button variant="link" className="text-foreground px-0 font-semibold">
            <HandCoinsIcon className="w-5 h-5 mr-1" /> Ofertas relámpago{' '}
            <ChevronRightIcon className="w-5 h-5" />
          </Button>

          <p className="ml-auto text-xs font-semibold text-muted-foreground">
            Por tiempo limitado
          </p>
        </div>

        <ul className="max-w-[100dvw] overflow-x-auto no-scroll-indicator flex items-start">
          {Array.from({ length: 10 }).map((_, idx) => (
            <button
              key={idx}
              data-ignore-carousel="true"
              className="min-w-[33%] max-w-[33%] flex items-center flex-col p-1"
            >
              <div
                data-ignore-carousel="true"
                className="relative w-full aspect-square mb-1"
              >
                <Image fill alt="" src="https://placehold.co/112x112.png" />
              </div>
              <div className="flex items-center justify-between w-full mb-2">
                <p className="text-[10px] text-primary font-semibold">
                  S/ <span className="text-sm">26</span>.61
                </p>
                <p className="text-[10px] text-muted-foreground">12K+ ventas</p>
              </div>
              <div className="relative w-full h-1 bg-muted rounded">
                <div
                  style={{ width: '80%' }}
                  className="absolute top-0 left-0 h-full rounded bg-black z-0"
                >
                  <ClockIcon className="w-4 h-4 fill-foreground stroke-background z-10 absolute -top-[6px] -right-2" />
                </div>
              </div>
            </button>
          ))}
        </ul>
      </section>

      <section className="w-full bg-background p-3 flex justify-center items-center">
        <div className="w-full h-[110px] bg-purple-100 rounded">
          <span>BANNER 02</span>
        </div>
      </section>

      <section className="w-full bg-background p-3">
        <Button
          variant="link"
          className="text-foreground pt-0 px-0 font-semibold"
        >
          Categorías <ChevronRightIcon className="w-5 h-5" />
        </Button>

        <ul className="max-w-[100dvw] overflow-x-auto no-scroll-indicator flex items-start">
          {subCategories.map((subCategory) => (
            <button
              key={subCategory}
              data-ignore-carousel="true"
              className="min-w-[25%] max-w-[25%] flex items-center flex-col p-1"
            >
              <div
                data-ignore-carousel="true"
                className="w-full aspect-square relative"
              >
                <Image
                  fill
                  alt={subCategory}
                  className="rounded-full"
                  src="https://placehold.co/68x68.png"
                />
              </div>
              <span
                className={cn(
                  'text-[10px] -tracking-wide px-1 -translate-y-2',
                  'bg-orange-100 rounded text-primary font-semibold'
                )}
              >
                Desde S/ 6.68
              </span>
              <p className="text-center text-xs leading-4 max-w-[84px] hyphens-auto font-semibold -translate-y-1">
                {subCategory}
              </p>
            </button>
          ))}
        </ul>
      </section>

      <section className="w-full bg-background p-3">
        <Button
          variant="link"
          className="text-foreground pt-0 px-0 font-semibold"
        >
          Proveedores recomendados <ChevronRightIcon className="w-5 h-5" />
        </Button>

        <ul className="max-w-[100dvw] overflow-x-auto no-scroll-indicator flex items-start">
          {Array.from({ length: 10 }).map((_, idx) => (
            <button
              key={idx}
              data-ignore-carousel="true"
              className="min-w-[33%] max-w-[33%] flex items-center flex-col pl-1"
            >
              <div
                data-ignore-carousel="true"
                className="relative w-full aspect-square mb-1"
              >
                <Image fill alt="" src="https://placehold.co/112x112.png" />
              </div>

              <div className="w-full flex items-start justify-between">
                <div className="w-[30%] aspect-square rounded-full bg-muted relative overflow-hidden">
                  <Image fill alt="" src="https://placehold.co/32x32.png" />
                </div>

                <div className="w-2/3 space-y-1">
                  <p className="text-left text-xs font-semibold text-ellipsis whitespace-nowrap overflow-hidden">
                    Qqing Office Supplie
                  </p>
                  <p className="text-[10px] text-muted-foreground">
                    33K+ Vendidos
                  </p>
                </div>
              </div>
            </button>
          ))}
        </ul>
      </section>

      <section className="w-full bg-background p-1">
        <p className="text-foreground text-sm font-semibold p-2">
          Recomendación
        </p>

        <ul className="columns-2 gap-x-1">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              data={product}
              className="w-full break-inside-avoid mb-2"
            />
          ))}
        </ul>
      </section>
    </div>
  )
}

export default memo(CategoryItemAll)

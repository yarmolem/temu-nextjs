'use client'

import { cn } from '@/lib/utils'
import {
  CheckIcon,
  ChevronRightIcon,
  LoaderIcon,
  ShieldCheckIcon
} from 'lucide-react'
import React, { memo, useState } from 'react'
import { containerItemClassName } from './category-item'
import { Button } from '@/components/ui/button'
import { subCategories } from '@/data/categories'
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from '@/components/ui/carousel'

const CategoryItemAll = () => {
  const [isLoading] = useState(false)

  if (isLoading) {
    return (
      <div
        className={cn(containerItemClassName, 'items-center justify-center')}
      >
        <LoaderIcon className="w-8 h-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className={cn(containerItemClassName, 'flex-col')}>
      <div className="w-full h-[110px] bg-purple-100">
        <span>SLIDE</span>
      </div>

      <div className="w-full bg-background p-3">
        <Button className="bg-green-700 text-background w-full px-2 mb-1">
          <ShieldCheckIcon className="fill-background stroke-green-700 mr-1" />
          <p className="font-bold">Compromisos Temu</p>

          <div className="flex items-center ml-auto">
            <p className="font-semibold">Pagos seguros</p>
            <ChevronRightIcon className="w-5 h-5" />
          </div>
        </Button>

        <Button variant="link" className="text-foreground px-0 font-semibold">
          Categorías <ChevronRightIcon className="w-5 h-5" />
        </Button>

        {/*  <ul className="w-screen max-w-screen overflow-x-auto no-scroll-indicator flex">
          {subCategories.map((subCategory) => (
            <button key={subCategory}>{subCategory}</button>
          ))}
        </ul> */}

        <Carousel className="w-full h-[110px] max-w-screen">
          <CarouselContent>
            {subCategories.map((category) => {
              return (
                <CarouselItem key={category}>
                  <div className="w-[87px] h-[110px]">{category}</div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default memo(CategoryItemAll)

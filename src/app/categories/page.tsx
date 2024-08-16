'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import {
  Blocks,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ShoppingCartIcon,
  StarIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@/components/ui/dropdown-menu'

import { cn, currencyFormatter } from '@/lib/utils'
import { categories, subCategories } from '@/data/categories'
import { useToggle } from 'usehooks-ts'
import { products } from '@/data/products'
import { useShoppingCart } from '@/stores/shopping-cart.store'

const CategoriesPage = () => {
  const [sort, setSort] = useState<string>('Destacado')
  const [sortMenuOpen, toggleSortMenu, setSortMenuOpen] = useToggle()
  const [selectedCategory, setSelectedCategory] = useState<string>('Destacado')

  const store = useShoppingCart()

  return (
    <>
      <Button
        variant="ghost"
        className="bg-orange-100 flex items-center px-3 py-2 text-foreground rounded-none w-full"
      >
        <CheckIcon className="w-6 h-6 text-green-500 mr-1" />
        <p className="text-sm font-semibold">Envío gratis para ti</p>

        <div className="flex items-center ml-auto text-muted-foreground">
          <p className="text-sm font-semibold ">Oferta exclusiva</p>
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </div>
      </Button>
      <div className="grid grid-cols-[26%_minmax(0,_1fr)] h-[calc(100vh_-_100px)]">
        {/* LIST OF CATEGORIES */}
        <div className="w-full h-full overflow-y-auto bg-muted no-scroll-indicator">
          {categories.map((category) => (
            <button
              key={category}
              className={cn('py-3 pr-2 text-left w-full transition-colors', {
                'font-semibold bg-background': category === selectedCategory
              })}
              onClick={() => setSelectedCategory(category)}
            >
              <p
                className={cn(
                  'text-xs border-l-4 border-l-transparent pl-1 transition-colors hyphens-auto font-medium text-pretty text-muted-foreground',
                  {
                    'font-semibold text-foreground border-l-primary':
                      category === selectedCategory
                  }
                )}
              >
                {category}
              </p>
            </button>
          ))}
        </div>

        {/* LIST OF SUBCATEGORIES */}
        <div className="w-full h-full overflow-y-auto bg-background p-3 space-y-3">
          <p className="text-sm font-semibold">Comprar por categoría</p>

          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            <div className="w-full">
              <div className="w-full aspect-square rounded-full mb-1 bg-muted grid place-items-center">
                <Blocks className="w-7 h-7" />
              </div>
              <p className="text-xs text-center font-medium hyphens-auto text-pretty">
                Ver todo
              </p>
            </div>

            {subCategories.map((subCategory) => (
              <div key={subCategory} className="w-full">
                <Image
                  width={104}
                  height={104}
                  alt={subCategory}
                  src="https://placehold.co/104x104.png"
                  className="w-full aspect-square rounded-full mb-1"
                />
                <p className="text-xs text-center font-medium hyphens-auto text-pretty">
                  {subCategory}
                </p>
              </div>
            ))}
          </div>

          <Separator />

          {/* PRODUCTS DESCOUNT */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">De 50% a 99% de descuento</p>

            <ChevronRightIcon className="w-5 h-5" />
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

                <p className="text-[10px] font-semibold self-start">
                  S/ <span className="text-sm">26</span>.61
                </p>
                <span className="border border-primary self-start text-[10px] px-1 rounded text-primary font-semibold">
                  -57%
                </span>
              </button>
            ))}
          </ul>

          <Separator />

          {/* TENDENCIAS */}
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium">Artículos en tendencia</p>

            <DropdownMenu open={sortMenuOpen} onOpenChange={setSortMenuOpen}>
              <DropdownMenuTrigger>
                <button className="flex items-center text-xs text-muted-foreground">
                  Ordenar por
                  <ChevronDownIcon
                    className={cn('w-4 h-4 ml-1 transition-transform', {
                      'rotate-180': sortMenuOpen
                    })}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuRadioGroup value={sort} onValueChange={setSort}>
                  <DropdownMenuRadioItem value="featured">
                    Destacados
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bestsellers">
                    Más vendidos
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="recent">
                    Más recientes
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="lowestPrice">
                    De precios bajos a altos
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="highestPrice">
                    De precios altos a bajos
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <ul className="grid grid-cols-2 gap-1">
            {products.map((product) => (
              <li key={product.id}>
                <div className="relative">
                  <Image
                    width={112}
                    height={112}
                    alt={product.title}
                    className="w-full aspect-square"
                    src="https://placehold.co/112x112.png"
                  />

                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute bottom-0 right-0 rounded-none"
                    onClick={() => store.addItem(product)}
                  >
                    <ShoppingCartIcon />
                  </Button>
                </div>

                <div className="p-1 space-y-1">
                  <div className="flex items-center gap-x-1">
                    <ul className="flex items-center">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <li key={idx}>
                          <StarIcon className="w-3 h-3 fill-foreground" />
                        </li>
                      ))}
                    </ul>

                    <p className="text-xs">{Math.round(product.rating)}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold">
                      S/ <span className="text-sm">52</span>.18
                    </p>

                    <p className="text-xs text-muted-foreground">10 ventas</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CategoriesPage

'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import { useToggle } from 'usehooks-ts'
import {
  Blocks,
  StarIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ShoppingCartIcon
} from 'lucide-react'

import slugify from 'slugify'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup
} from '@/components/ui/dropdown-menu'

import { cn } from '@/lib/utils'

import { products } from '@/data/products'
import { categories, subCategories } from '@/data/categories'

import { useShoppingCart } from '@/stores/shopping-cart.store'

const CategoriesPage = () => {
  const store = useShoppingCart()

  const [sort, setSort] = useState<string>('featured')
  const [sortMenuOpen, , setSortMenuOpen] = useToggle()
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories?.[0].slug
  )

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
              key={category.slug}
              onClick={() => setSelectedCategory(category.slug)}
              className={cn('py-3 pr-2 text-left w-full transition-colors', {
                'font-semibold bg-background':
                  category.slug === selectedCategory
              })}
            >
              <p
                className={cn(
                  'text-xs border-l-4 border-l-transparent pl-1 transition-colors hyphens-auto font-medium text-pretty text-muted-foreground',
                  {
                    'font-semibold text-foreground border-l-primary':
                      category.slug === selectedCategory
                  }
                )}
              >
                {category.title}
              </p>
            </button>
          ))}
        </div>

        {/* LIST OF SUBCATEGORIES */}
        <div className="w-full h-full overflow-y-auto bg-background p-3 space-y-3">
          <p className="text-sm font-semibold">Comprar por categoría</p>

          <div className="grid grid-cols-3 gap-x-6 gap-y-3">
            {selectedCategory !== 'Destacado' && (
              <Link
                className="w-full"
                href={`/categories/${slugify(selectedCategory, {
                  lower: true
                })}`}
              >
                <div className="w-full aspect-square rounded-full mb-1 bg-muted grid place-items-center">
                  <Blocks className="w-7 h-7" />
                </div>
                <p className="text-xs text-center font-medium hyphens-auto text-pretty">
                  Ver todo
                </p>
              </Link>
            )}

            {subCategories.map((subCategory) => (
              <Link
                className="w-full"
                key={subCategory.slug}
                href={`/categories/${subCategory.slug}`}
              >
                <Image
                  width={104}
                  height={104}
                  alt={subCategory.title}
                  src="https://placehold.co/104x104.png"
                  className="w-full aspect-square rounded-full mb-1"
                />
                <p className="text-xs text-center font-medium hyphens-auto text-pretty">
                  {subCategory.title}
                </p>
              </Link>
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
              <DropdownMenuTrigger asChild>
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
                    onClick={() => store.addItem(product)}
                    className="absolute bottom-0 right-0 rounded-none"
                  >
                    <ShoppingCartIcon className="text-white" />
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

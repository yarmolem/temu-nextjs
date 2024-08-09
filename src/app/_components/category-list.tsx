'use client'

import React from 'react'

import {
  Carousel,
  CarouselItem,
  CarouselContent
} from '@/components/ui/carousel'
import CategoryItem from './category-item'
import CategoryItemAll from './category-item-all'
import useListCategory from '@/hooks/use-list-category'

import { cn } from '@/lib/utils'
import { categories } from '@/data/categories'

interface CategoryListProps {}

const CategoryList = (_props: CategoryListProps) => {
  const {
    listRef,
    activeIndex,
    slideViewed,
    indicatorRef,
    handleClick,
    handleLayout,
    setCarouselApi
  } = useListCategory()

  return (
    <>
      <nav>
        <ul
          ref={listRef}
          className="flex relative max-w-[100dvw] overflow-x-auto bg-background border-b no-scroll-indicator"
        >
          {categories.map((category, idx) => (
            <li
              role="button"
              key={category}
              className="py-3 px-[11px] flex-shrink-0 cursor-pointer"
              id={`item-${category}`}
              ref={handleLayout}
              onClick={() => handleClick(idx)}
            >
              <h2
                className={cn('font-semibold text-muted-foreground', {
                  'text-foreground': idx === activeIndex
                })}
              >
                {category}
              </h2>
            </li>
          ))}

          <div
            ref={indicatorRef}
            className="absolute rounded-full bottom-[6px] h-[4px] w-4 bg-foreground transform transition-transform"
          />
        </ul>
      </nav>

      <Carousel
        setApi={setCarouselApi}
        className="w-full min-h-[calc(100dvh_-_50px_-_48px)] max-w-screen"
        opts={{
          watchDrag: true
        }}
      >
        <CarouselContent>
          {categories.map((category, idx) => {
            if (idx === 0) {
              return (
                <CarouselItem key={category}>
                  <CategoryItemAll />
                </CarouselItem>
              )
            }

            return (
              <CarouselItem key={category}>
                <CategoryItem
                  category={category}
                  enabled={slideViewed.includes(idx)}
                />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </>
  )
}

export default CategoryList

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
import { homeCategories } from '@/data/categories'

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
      <nav className="sticky top-[57px] z-40">
        <ul
          ref={listRef}
          className="flex relative max-w-[100dvw] overflow-x-auto bg-background border-b no-scroll-indicator"
        >
          {homeCategories.map((category, idx) => (
            <li
              role="button"
              key={category.title}
              className="py-3 px-[11px] flex-shrink-0 cursor-pointer"
              id={`item-${category.title}`}
              ref={handleLayout}
              onClick={() => handleClick(idx)}
            >
              <h2
                className={cn('font-semibold text-muted-foreground', {
                  'text-foreground': idx === activeIndex
                })}
              >
                {category.title}
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
          watchDrag: (_, { target }) => {
            const _target = target as HTMLElement
            const key = 'data-ignore-carousel'

            return !Boolean(
              _target.getAttribute(key) ||
                _target.parentElement?.getAttribute(key)
            )
          }
        }}
      >
        <CarouselContent>
          {homeCategories.map((category, idx) => {
            if (idx === 0) {
              return (
                <CarouselItem key={category.title}>
                  <CategoryItemAll />
                </CarouselItem>
              )
            }

            return (
              <CarouselItem key={category.title}>
                <CategoryItem
                  category={category.title}
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

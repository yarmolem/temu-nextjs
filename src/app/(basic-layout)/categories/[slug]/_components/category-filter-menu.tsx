'use client'

import React, { useState } from 'react'
import { CheckIcon, ChevronDownIcon, FilterIcon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { cn, scrollToElementWithOffset } from '@/lib/utils'
import { filters } from '@/data/filters'

const CategoryFilterMenu = () => {
  const [openSort, setOpenSort] = useState(false)
  const [openFilters, setOpenFilters] = useState(false)

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])

  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [selectedReviews, setSelectedReviews] = useState<string | null>(null)
  const [selectedDiscount, setSelectedDiscount] = useState<string | null>(null)

  const [selectedSort, setSelectedSort] = useState<string | null>()

  const [selectedFilter, setSelectedFilter] = useState(filters[0])

  const handleOpenFilter = () => {
    scrollToElementWithOffset('category-filter-menu', 57)
    document?.body?.classList.add('overflow-hidden')
  }

  const handleCloseFilter = () => {
    document?.body?.classList.remove('overflow-hidden')
  }

  return (
    <>
      <div
        id="category-filter-menu"
        className={cn('w-full bg-background flex items-center gap-x-2 p-3', {
          'z-[60] sticky top-0 border-b': openFilters
        })}
      >
        {/* FILTERS */}
        <Popover
          open={openFilters}
          onOpenChange={(_open) => {
            if (_open && openSort) setOpenSort(false)

            if (_open) {
              handleOpenFilter()
            } else {
              handleCloseFilter()
            }

            setOpenFilters(_open)
          }}
        >
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="muted"
              className={cn('text-sm rounded-full')}
            >
              <FilterIcon className="size-4 mr-1" />
              Filtros
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={14}
            className="w-screen h-[calc(100dvh_-_109px)] bg-[rgba(0,0,0,0.5)] rounded-none border-none p-0"
          >
            <div className="w-full bg-background grid grid-cols-[25%_minmax(0,_1fr)] h-[50dvh] overflow-hidden">
              <div className="w-full h-full overflow-y-auto bg-muted no-scroll-indicator">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilter(filter)
                      const el = document.getElementById(`${filter}-filter`)
                      console.log({ el })
                      el?.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'end'
                      })
                    }}
                    className={cn(
                      'py-3 pr-2 text-left w-full transition-colors',
                      {
                        'font-semibold bg-background': filter === selectedFilter
                      }
                    )}
                  >
                    <p
                      className={cn(
                        'text-xs border-l-4 border-l-transparent pl-1 transition-colors hyphens-auto font-medium text-pretty text-muted-foreground',
                        {
                          'font-semibold text-foreground border-l-primary':
                            filter === selectedFilter
                        }
                      )}
                    >
                      {filter}
                    </p>
                  </button>
                ))}
              </div>
              <div className="w-full bg-background p-3 space-y-3 h-[50dvh] overflow-y-auto">
                {/* TAGS */}
                <p id="Categoría-filter" className="text-sm font-semibold mb-3">
                  Categoría{' '}
                  {selectedTags.length > 0 ? `(${selectedTags.length})` : ''}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Productos de decoración del hotel',
                    'Decoración de temporada',
                    'Eventos y fiestas',
                    'Suministros de cocina'
                  ].map((tag) => (
                    <button
                      key={tag}
                      className={cn('border py-2 px-3 rounded-full', {
                        'border-foreground': selectedTags.includes(tag)
                      })}
                      onClick={() => {
                        if (selectedTags.includes(tag)) {
                          setSelectedTags(selectedTags.filter((t) => t !== tag))
                        } else {
                          setSelectedTags([...selectedTags, tag])
                        }
                      }}
                    >
                      <p className="text-xs font-medium">{tag}</p>
                    </button>
                  ))}
                </div>

                {/* COLORS */}
                <p
                  id="Color-filter"
                  className="text-sm font-semibold mb-3 pt-3"
                >
                  Color{' '}
                  {selectedColors.length > 0
                    ? `(${selectedColors.length})`
                    : ''}
                </p>

                <div className="grid grid-cols-4 gap-x-6 gap-y-3">
                  {[
                    { value: 'blue', label: 'Azul' },
                    { value: 'red', label: 'Rojo' },
                    { value: 'green', label: 'Verde' },
                    { value: 'yellow', label: 'Amarillo' },
                    { value: 'purple', label: 'Morado' },
                    { value: 'pink', label: 'Rosa' }
                  ].map((color) => (
                    <button
                      key={color.value}
                      onClick={() => {
                        if (selectedColors.includes(color.value)) {
                          setSelectedColors(
                            selectedColors.filter((t) => t !== color.value)
                          )
                        } else {
                          setSelectedColors([...selectedColors, color.value])
                        }
                      }}
                    >
                      <div
                        className={cn(
                          'w-full aspect-square rounded-full p-1 border border-transparent mb-1',
                          {
                            'border-foreground': selectedColors.includes(
                              color.value
                            )
                          }
                        )}
                      >
                        <div
                          className="w-full aspect-square rounded-full"
                          style={{ backgroundColor: color.value }}
                        />
                      </div>
                      <p className="text-xs font-medium text-muted-foreground">
                        {color.label}
                      </p>
                    </button>
                  ))}
                </div>

                {/* MATERIALS */}
                <p
                  id="Material-filter"
                  className="text-sm font-semibold mb-3 pt-3"
                >
                  Material{' '}
                  {selectedMaterials.length > 0
                    ? `(${selectedMaterials.length})`
                    : ''}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Ceramica',
                    'Madera',
                    'Vidrio',
                    'Metal',
                    'Plastico',
                    'Piedra'
                  ].map((tag) => (
                    <button
                      key={tag}
                      className={cn('border py-2 px-3 rounded-full', {
                        'border-foreground': selectedMaterials.includes(tag)
                      })}
                      onClick={() => {
                        if (selectedMaterials.includes(tag)) {
                          setSelectedMaterials(
                            selectedMaterials.filter((t) => t !== tag)
                          )
                        } else {
                          setSelectedMaterials([...selectedMaterials, tag])
                        }
                      }}
                    >
                      <p className="text-xs font-medium">{tag}</p>
                    </button>
                  ))}
                </div>

                {/* REVIEWS */}
                <p
                  id="Reseñas-filter"
                  className="text-sm font-semibold mb-3 pt-3"
                >
                  Reseñas {selectedReviews ? `(1)` : ''}
                </p>

                <div className="flex flex-col gap-3">
                  <button
                    onClick={() =>
                      setSelectedReviews((prev) => (prev === '4' ? null : '4'))
                    }
                    className={cn(
                      'border py-2 px-3 rounded-full flex items-center w-max',
                      {
                        'border-foreground': selectedReviews === '4'
                      }
                    )}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon
                        key={i}
                        className={cn('w-4 h-4', { 'fill-foreground': i < 4 })}
                      />
                    ))}
                    <span className="ml-2 text-xs">y más</span>
                  </button>
                  <button
                    onClick={() =>
                      setSelectedReviews((prev) => (prev === '3' ? null : '3'))
                    }
                    className={cn(
                      'border py-2 px-3 rounded-full flex items-center w-max',
                      {
                        'border-foreground': selectedReviews === '3'
                      }
                    )}
                  >
                    {Array.from({ length: 5 }, (_, i) => (
                      <StarIcon
                        key={i}
                        className={cn('w-4 h-4', { 'fill-foreground': i < 3 })}
                      />
                    ))}
                    <span className="ml-2 text-xs">y más</span>
                  </button>
                </div>

                {/* DISCOUNT */}
                <p
                  id="Descuentos-filter"
                  className="text-sm font-semibold mb-3 pt-3"
                >
                  Descuento {selectedDiscount ? `(1)` : ''}
                </p>

                <div className="flex flex-col gap-3">
                  {['30%', '40%', '50%', '60%'].map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setSelectedDiscount((prev) =>
                          prev === tag ? null : tag
                        )
                      }
                      className={cn(
                        'text-xs font-medium',
                        'border py-2 px-3 rounded-full flex items-center w-max',
                        {
                          'border-foreground': selectedDiscount === tag
                        }
                      )}
                    >
                      {tag} de descuento o más
                    </button>
                  ))}
                </div>

                {/* PRICE */}
                <p
                  id="Precio-filter"
                  className="text-sm font-semibold mb-3 pt-3"
                >
                  Precio {selectedPrice ? `(1)` : ''}
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    'Bajó S/ 31',
                    'S/ 31 - S/ 87',
                    'S/ 87 - S/ 169',
                    'Más de S/ 169'
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() =>
                        setSelectedPrice((prev) => (prev === tag ? null : tag))
                      }
                      className={cn(
                        'text-xs font-medium',
                        'border py-2 px-3 rounded-full flex items-center w-max',
                        {
                          'border-foreground': selectedPrice === tag
                        }
                      )}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* FOOTER */}
            <div className="w-full bg-background flex items-center justify-end p-3 gap-x-3">
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  setOpenFilters(false)
                  handleCloseFilter()

                  setSelectedTags([])
                  setSelectedColors([])
                  setSelectedMaterials([])
                  setSelectedReviews(null)
                  setSelectedDiscount(null)
                  setSelectedPrice(null)
                }}
              >
                Restablecer
              </Button>
              <Button
                size="sm"
                onClick={() => {
                  setOpenFilters(false)
                  handleCloseFilter()
                }}
              >
                Mostrar 100+ resultados
              </Button>
            </div>
          </PopoverContent>
        </Popover>

        {/* SORT */}
        <Popover
          open={openSort}
          onOpenChange={(_open) => {
            if (_open && openFilters) setOpenFilters(false)

            if (_open) {
              handleOpenFilter()
            } else {
              handleCloseFilter()
            }

            setOpenSort(_open)
          }}
        >
          <PopoverTrigger asChild>
            <Button
              size="sm"
              variant="muted"
              className={cn('text-sm rounded-full')}
            >
              Ordenar por{' '}
              <ChevronDownIcon
                className={cn('w-4 h-4 ml-2 transition-transform', {
                  'rotate-180': openSort
                })}
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={14}
            className="w-screen h-[calc(100dvh_-_109px)] bg-[rgba(0,0,0,0.5)] rounded-none border-none p-0"
          >
            <div className="w-full bg-background">
              {[
                'Destacados',
                'Más vendidos',
                'Más recientes',
                'De precios bajos a altos',
                'De precios altos a bajos'
              ].map((tag) => (
                <Button
                  key={tag}
                  variant="outline"
                  className={cn(
                    'w-full border-none text-left justify-start text-muted-foreground',
                    {
                      'text-foreground': selectedSort === tag
                    }
                  )}
                  onClick={() => setSelectedSort(tag)}
                >
                  {tag}
                  {selectedSort === tag && (
                    <CheckIcon className="w-4 h-4 ml-auto" />
                  )}
                </Button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </>
  )
}

export default CategoryFilterMenu

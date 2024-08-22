import { categories, subCategories } from '@/data/categories'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CategoryFilterMenu from './_components/category-filter-menu'
import { products } from '@/data/products'
import ProductCard from '@/components/shared/product-card'

interface CategorySlugPageProps {
  params: {
    slug: string
  }
}

function getCategoryBySlug(slug: string) {
  const category = categories.find((category) => category.slug === slug)

  if (category?.slug) {
    return {
      ...category,
      isSubCategory: false
    }
  }

  const subCategory = subCategories.find((category) => category.slug === slug)
  if (subCategory?.slug) {
    return {
      ...subCategory,
      isSubCategory: true
    }
  }

  return null
}

const CategorySlugPage = (props: CategorySlugPageProps) => {
  const category = getCategoryBySlug(props.params.slug)

  return (
    <>
      <div>
        <div className="w-full bg-background p-3">
          <h1 className="text-lg text-center font-semibold ">
            {category?.title}
          </h1>

          {!category?.isSubCategory && (
            <ul
              className={cn(
                'no-scroll-indicator flex items-start',
                'max-w-[100dvw] pt-3 pb-1 overflow-x-auto'
              )}
            >
              {subCategories.map((subcategory) => (
                <Link
                  key={subcategory.slug}
                  href={`/categories/${subcategory.slug}`}
                  className="min-w-[25%] max-w-[25%] flex items-center flex-col"
                >
                  <div
                    className={cn(
                      'w-[80%] p-1 flex items-center justify-center',
                      'border border-transparent aspect-square rounded-full'
                    )}
                  >
                    <div className="relative w-full aspect-square rounded-full overflow-hidden">
                      <Image
                        fill
                        alt=""
                        src="https://placehold.co/112x112.png"
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      'text-xs p-1 text-center font-semibold',
                      'rounded-full hyphens-auto text-muted-foreground'
                    )}
                  >
                    {subcategory.title}
                  </div>
                </Link>
              ))}
            </ul>
          )}
        </div>

        <div>
          <CategoryFilterMenu />
          <ul className="columns-2 gap-x-1 p-1">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                data={product}
                className="w-full break-inside-avoid mb-2"
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default CategorySlugPage

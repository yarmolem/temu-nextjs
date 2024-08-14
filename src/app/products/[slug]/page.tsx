import React from 'react'
import Image from 'next/image'
import { CheckIcon, ChevronRightIcon, StarIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselItem,
  CarouselContent
} from '@/components/ui/carousel'

import { products } from '@/data/products'
import ShoppingCartButton from './_components/shopping-cart-button'

interface ProductSlugPageProps {
  params: { slug: string }
}

const ProductSlugPage = (props: ProductSlugPageProps) => {
  const slug = props.params.slug
  const product = products.find((product) => product.slug === slug)

  return (
    <>
      <Carousel className="w-full">
        <CarouselContent>
          {product?.images.map((image, idx) => (
            <CarouselItem key={image} className="pl-0 pt-0">
              <div className="w-full aspect-square relative">
                <Image
                  fill
                  src={image}
                  alt={product.title}
                  priority={idx === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Button
        variant="ghost"
        className="w-full bg-orange-100 flex items-center px-3 py-2 text-foreground rounded-none"
      >
        <CheckIcon className="w-6 h-6 text-green-500 mr-1" />
        <p className="text-sm font-semibold">Envío gratis para ti</p>

        <div className="flex items-center ml-auto text-muted-foreground">
          <p className="text-sm font-semibold ">Oferta exclusiva</p>
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </div>
      </Button>

      <div className="w-full p-3">
        <p>{product?.title}</p>
        <div className="flex items-center mb-3">
          <div className="flex items-center text-xs gap-x-3">
            <p>2.2K+</p>
            <p>|</p>
            <p>Proporcionado ...</p>
            <ChevronRightIcon className="w-5 h-5 ml-1" />
          </div>

          <div className="flex items-center ml-auto text-xs gap-x-1">
            <p>4.7</p>
            <div className="flex items-center">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <StarIcon key={idx} className="w-3 h-3 fill-black" />
                ))}
            </div>
          </div>
        </div>
        <div className="flex gap-x-3 items-center">
          <p className="text-primary font-semibold">S/ 59.37</p>
          <p className="text-[10px] border border-primary rounded px-1 text-primary font-semibold">
            El -41% casi termina
          </p>
          <p className="text-sm text-muted-foreground line-through">100.79</p>
        </div>
      </div>

      {product && (
        <div className="w-full fixed bottom-0 pb-3 px-3 border-t pt-1">
          <ShoppingCartButton product={product} />
        </div>
      )}
    </>
  )
}

export default ProductSlugPage

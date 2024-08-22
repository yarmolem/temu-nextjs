import React from 'react'
import Image from 'next/image'
import {
  CheckIcon,
  ChevronRightIcon,
  DotIcon,
  HeartIcon,
  MoreHorizontalIcon,
  ShareIcon,
  ShieldCheckIcon,
  StarIcon,
  StoreIcon,
  ThumbsUpIcon
} from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselItem,
  CarouselContent
} from '@/components/ui/carousel'

import { products } from '@/data/products'
import ShoppingCartButton from './_components/shopping-cart-button'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

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

      <section className="w-full bg-background p-3 mb-3">
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

        <Button variant="outline" className="w-full my-3 justify-between">
          <span>1 Color, 8 Talla</span>
          <span className="flex items-center">
            Seleccinar <ChevronRightIcon className="w-5 h-5 ml-1" />
          </span>
        </Button>

        <p className="text-xs text-muted-foreground">
          Proporcionado por XTYJF, Enviado por Temu.
        </p>
      </section>

      <section className="w-full bg-background p-3 mb-3">
        <div className="flex items-center gap-x-1">
          <p className="font-semibold">4.8</p>

          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <StarIcon key={idx} className="w-3 h-3 fill-black" />
              ))}
          </div>

          <p className="text-xs text-muted-foreground">(2.2K)</p>
        </div>
        <Separator className="my-3" />

        <p className="font-semibold mb-3">Reseñas de artículos</p>
        <div className="w-full bg-green-100 flex items-center gap-x-3 rounded mb-3">
          <div className="w-7 h-7 flex items-center justify-center bg-green-500 rounded">
            <ShieldCheckIcon className="w-5 h-5 text-white" />
          </div>
          <p className="text-sm text-green-900 font-semibold">
            Todas las reseñas son de compras verificadas
          </p>
        </div>

        <div className="w-full grid grid-cols-3  gap-1 text-xs text-muted-foreground text-center">
          <div className="w-full bg-muted h-2" />
          <div className="w-full bg-green-700 h-2" />
          <div className="w-full bg-muted h-2" />
          <p>25% Fiel a la talla</p> <p>50% Mediano</p> <p>25% Regular</p>
        </div>

        <Separator className="my-3" />

        <div className="space-y-2">
          <div className="flex items-center gap-x-1">
            <Avatar className="size-8">
              <AvatarFallback>LA</AvatarFallback>
            </Avatar>

            <p className="font-semibold">
              Lore Aceves de Glez{' '}
              <span className="text-xs font-normal text-muted-foreground">
                11 nov 2023
              </span>
            </p>
          </div>
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, idx) => (
                <StarIcon key={idx} className="w-3 h-3 fill-black" />
              ))}
          </div>

          <p className="text-sm text-muted-foreground">
            Comprado: De color caqui / 264cm*229cm
          </p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            consectetur, quidem pariatur molestiae repellendus eius? Quas sunt
            excepturi cum labore, animi veritatis doloremque officiis porro
            dicta dolorem ad itaque nobis!
          </p>

          <div className="w-full flex items-center justify-end text-sm gap-x-1">
            <ShareIcon className="size-4" />
            <p>Compartir</p>
            <p>|</p>
            <ThumbsUpIcon className="size-4" />
            <p>útil(3)</p>
            <MoreHorizontalIcon className="size-4 ml-3" />
          </div>
        </div>
      </section>

      <section className="w-full bg-background p-3 mb-3">
        <div className="w-full flex items-center gap-x-3 mb-3">
          <Avatar className="size-8">
            <AvatarFallback>XT</AvatarFallback>
          </Avatar>

          <div>
            <p className="font-semibold uppercase">Xtyjf</p>
            <div className="w-full flex items-center">
              <p className="text-sm font-semibold">
                319{' '}
                <span className="font-normal text-muted-foreground">
                  Seguidores
                </span>
              </p>

              <DotIcon className="size-5" />

              <p className="text-sm font-semibold">
                15K+{' '}
                <span className="font-normal text-muted-foreground">
                  Vendidos
                </span>
              </p>

              <DotIcon className="size-5" />

              <p className="text-sm font-semibold">
                4.7 <StarIcon className="w-3 h-3 fill-black inline-block" />
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-x-1">
          <Button variant="outline" className="flex-1">
            <StoreIcon className="w-4 h-4 mr-1" />
            Seguir
          </Button>

          <Button variant="outline" className="flex-1">
            Ver todos (31)
          </Button>
        </div>
      </section>

      <section className="w-full bg-background p-3 mb-3">
        <div className="w-full flex items-center justify-between">
          <p className="font-semibold">Detalles del producto</p>

          <div className="flex items-center gap-x-1">
            <Button size="xs" variant="ghost">
              <HeartIcon className="w-4 h-4 mr-1" />
              Guardar
            </Button>
            <span>|</span>
            <Button size="xs" variant="ghost">
              Reportar
            </Button>
          </div>
        </div>

        <Separator className="my-3" />

        <p className="text-sm text-muted-foreground mb-1">
          Instrucciones de cuidado:{' '}
          <span className="text-foreground font-medium">Lavar a máquina</span>
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          Estampado:{' '}
          <span className="text-foreground font-medium">Labor de retazos</span>
        </p>
        <p className="text-sm text-muted-foreground mb-1">
          Características:{' '}
          <span className="text-foreground font-medium">Hipoalergénico</span>
        </p>
      </section>

      {product?.images.map((image, idx) => (
        <Image
          key={idx}
          src={image}
          width={400}
          height={400}
          alt={product.title}
          className="w-full aspect-square object-cover"
        />
      ))}

      <div className="h-[60px]"></div>

      {product && (
        <div className="w-full fixed bottom-0 pb-3 px-3 border-t pt-1 bg-background">
          <ShoppingCartButton product={product} />
        </div>
      )}
    </>
  )
}

export default ProductSlugPage

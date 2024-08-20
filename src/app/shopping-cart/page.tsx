'use client'

import Image from 'next/image'
import React, { Fragment, useMemo } from 'react'
import {
  AlertCircleIcon,
  ChevronRightIcon,
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TruckIcon
} from 'lucide-react'

import { Separator } from '@/components/ui/separator'
import { CustomCheckbox } from '@/components/ui/custom-checkbox'

import { cn, currencyFormatter } from '@/lib/utils'
import { useShoppingCart } from '@/stores/shopping-cart.store'
import ShoppingCartMenu from './_components/shopping-cart-menu'
import ShoppingCartProductCard from '@/components/shared/shopping-cart-product-card'
import { Button, buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { commitments } from '@/data/commitments'

const ShoppingCartPage = () => {
  const store = useShoppingCart()

  const total = useMemo(() => store.getTotal(store.cart), [store])
  const isAllSelected = useMemo(() => store.isAllSelected(store.cart), [store])
  const isSomeSelected = useMemo(
    () => store.isSomeSelected(store.cart),
    [store]
  )

  const isIndeterminate = store.cart.length > 0 && !isAllSelected

  return (
    <>
      <div className="bg-background p-3">
        <div className="grid grid-cols-3 items-center mb-3">
          <div className="flex items-center gap-x-3">
            <CustomCheckbox
              className="my-auto"
              checked={isSomeSelected}
              indeterminate={isIndeterminate}
              onChange={() => {
                if (store.cart.length === 0) {
                  return
                }

                store.toggleSelectAll()
              }}
            />
            <p className="text-sm font-semibold">Todos</p>
          </div>
          <p className="text-center font-semibold">
            Carrito {store.cart.length > 0 ? `(${store.cart.length})` : ''}
          </p>

          <ShoppingCartMenu className="ml-auto" />
        </div>

        <button className="w-full border rounded px-3 py-2 flex items-center gap-x-3 mb-4">
          <TruckIcon className="w-6 h-6 text-foreground" />

          <p className="text-xs font-semibold">Envió gratis especial para ti</p>
        </button>

        {store.cart.length === 0 && (
          <div className="grid place-items-center gap-y-3 h-40">
            <div className="flex items-center justify-center flex-col">
              <div className="flex items-center justify-center gap-x-6 mb-3">
                <ShoppingCartIcon className="w-12 h-12 text-muted-foreground/30" />
                <div>
                  <p className="text-sm font-semibold">
                    El carrito de compras está vacío
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Agrega tus artículos favoritos.
                  </p>
                </div>
              </div>
              <Link href="/" className={buttonVariants({ variant: 'outline' })}>
                Comienza a comprar
              </Link>
            </div>
          </div>
        )}

        {store.cart.length > 0 && (
          <div className="space-y-3 mb-3">
            {store.cart.map((item, idx) => (
              <Fragment key={item.id}>
                <ShoppingCartProductCard
                  item={item}
                  checked={item.selected}
                  onCheckChange={() => store.toggleSelectItem(item.id)}
                  onDecreaseQuantity={() => store.decreaseQuantity(item.id)}
                  onIncreaseQuantity={() => store.increaseQuantity(item.id)}
                />

                {idx !== store.cart.length - 1 && <Separator />}
              </Fragment>
            ))}
          </div>
        )}
      </div>

      <div className="p-3 flex items-start gap-x-1 text-muted-foreground">
        <AlertCircleIcon className="w-4 h-4" />
        <p className=" text-xs flex-1 font-medium">
          La disponibilidad y el precio de los artículos no están garantizados
          hasta que se finalice el pago.
        </p>
      </div>

      {store.cart.length > 0 && (
        <div className="bg-background p-3">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-sm font-medium">Total de articulos</p>
              <p className="text-sm font-medium text-muted-foreground">
                {currencyFormatter(total)}
              </p>
            </div>

            <Separator />

            <div className="flex justify-between">
              <p className="text-base font-semibold">Total</p>
              <p className="text-base font-semibold">
                {currencyFormatter(total)}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-background p-3">
        <Button
          variant="link"
          className="text-foreground pt-0 px-0 font-semibold w-full justify-between"
        >
          <span>Nuestros compromisos</span>

          <ChevronRightIcon className="w-5 h-5" />
        </Button>

        <ul className="max-w-[100dvw] overflow-x-auto no-scroll-indicator flex items-start">
          {commitments.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className="min-w-[25%] max-w-[25%] flex items-center flex-col p-1"
            >
              <Icon className="mb-3 text-green-500" />
              <p className="text-xs text-muted-foreground text-pretty">
                {label}
              </p>
            </button>
          ))}
        </ul>
      </div>
    </>
  )
}

export default ShoppingCartPage

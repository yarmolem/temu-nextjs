'use client'

import React, { useMemo, useState } from 'react'
import { useToggle } from 'usehooks-ts'
import { MoreHorizontalIcon, XIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import {
  Credenza,
  CredenzaBody,
  CredenzaClose,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle
} from '@/components/ui/credenza'

import { cn } from '@/lib/utils'
import { useShoppingCart } from '@/stores/shopping-cart.store'
import ShoppingCartProductCard from '@/components/shared/shopping-cart-product-card'
import { CustomCheckbox } from '@/components/ui/custom-checkbox'
import toast from 'react-hot-toast'

interface ShoppingCartMenuProps {
  className?: string
}

const ShoppingCartMenu = (props: ShoppingCartMenuProps) => {
  const store = useShoppingCart()
  const [isOpen, toggleOpen, setIsOpen] = useToggle()
  const [selectedItems, setSelectedItems] = useState<string[]>([])

  const isAllSelected = selectedItems.length === store.cart.length
  const isSomeSelected = selectedItems.length > 0
  const isIndeterminate = selectedItems.length > 0 && !isAllSelected

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost" className={cn(props.className)}>
            <MoreHorizontalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={toggleOpen}>
            Administrar carrito
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Compartir carrito</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Credenza open={isOpen} onOpenChange={setIsOpen}>
        <CredenzaContent>
          <CredenzaHeader className="grid grid-cols-[32px_minmax(0,1fr)_32px] items-center p-3">
            <div />
            <CredenzaTitle className="text-base">
              Administrar carrito
            </CredenzaTitle>
            <CredenzaClose asChild>
              <Button variant="ghost" size="icon">
                <XIcon className="h-4 w-4" />
              </Button>
            </CredenzaClose>
          </CredenzaHeader>
          <CredenzaBody>
            <div className="space-y-3 max-h-[70dvh] overflow-y-auto mb-6">
              {store.cart.map((item) => (
                <ShoppingCartProductCard
                  key={item.id}
                  item={item}
                  showQuantity={false}
                  checked={selectedItems.includes(item.id)}
                  onCheckChange={() => {
                    if (selectedItems.includes(item.id)) {
                      setSelectedItems(
                        selectedItems.filter((id) => id !== item.id)
                      )
                    } else {
                      setSelectedItems([...selectedItems, item.id])
                    }
                  }}
                />
              ))}
            </div>
          </CredenzaBody>
          <CredenzaFooter className="border-t p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-x-3">
                <CustomCheckbox
                  className="my-auto"
                  checked={isSomeSelected}
                  indeterminate={isIndeterminate}
                  onChange={() => {
                    setSelectedItems(
                      isAllSelected ? [] : store.cart.map((item) => item.id)
                    )
                  }}
                />
                <p className="text-sm font-semibold">Todos</p>
              </div>

              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  if (!isSomeSelected) {
                    toast.error('No hay elementos seleccionados')
                    return
                  }

                  for (const item of selectedItems) {
                    store.removeItem(item)
                  }

                  setIsOpen(false)
                  setSelectedItems([])
                }}
              >
                Eliminar
              </Button>
            </div>
          </CredenzaFooter>
        </CredenzaContent>
      </Credenza>
    </>
  )
}

export default ShoppingCartMenu

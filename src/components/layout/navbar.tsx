'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ListIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Logo } from '../ui/logo'
import UserMenu from '../shared/user-menu'
import { Button, buttonVariants } from '../ui/button'
import { useShoppingCart } from '@/stores/shopping-cart.store'

interface NavbarProps {
  className?: string
}

const Navbar = (props: NavbarProps) => {
  const pathname = usePathname()
  const store = useShoppingCart()

  return (
    <>
      <header
        className={cn(
          'bg-background flex items-center justify-around py-2 px-1 border-b',
          props.className
        )}
      >
        <Link href="/">
          <Logo />
        </Link>

        <button className="flex items-center gap-2 bg-muted text-muted-foreground py-1 px-3 rounded-full">
          <SearchIcon />
          <span className="text-sm font-semibold">vestido de ...</span>
        </button>

        <Button size="icon" variant="ghost">
          <ListIcon />
        </Button>

        <UserMenu />
        <Link
          href="/shopping-cart"
          className={cn(
            buttonVariants({ size: 'icon', variant: 'ghost' }),
            'relative'
          )}
        >
          {store.cart.length > 0 && (
            <span className="bg-primary absolute top-0 right-0 w-4 h-4 flex justify-center items-center text-background rounded-full ml-auto text-[10px]">
              {store.cart.length}
            </span>
          )}

          <ShoppingCartIcon
            className={cn(
              pathname === '/shopping-cart' && 'fill-primary text-primary'
            )}
          />
        </Link>
      </header>
    </>
  )
}

export { Navbar }

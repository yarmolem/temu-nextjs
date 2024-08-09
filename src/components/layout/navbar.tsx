import React from 'react'
import { ListIcon, SearchIcon, ShoppingCartIcon, UserIcon } from 'lucide-react'

import { Logo } from '../ui/logo'
import { Button } from '../ui/button'

const Navbar = () => {
  return (
    <>
      <header className="bg-background flex items-center justify-around py-2 px-1 border-b">
        <Logo />

        <button className="flex items-center gap-2 bg-muted text-muted-foreground py-1 px-3 rounded-full">
          <SearchIcon />
          <span className="text-sm font-semibold">vestido de ...</span>
        </button>

        <Button size="icon" variant="ghost">
          <ListIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <UserIcon />
        </Button>
        <Button size="icon" variant="ghost">
          <ShoppingCartIcon />
        </Button>
      </header>
    </>
  )
}

export { Navbar }

'use client'

import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import React from 'react'
import { Button } from '../ui/button'
import {
  ClockIcon,
  HeadsetIcon,
  ListIcon,
  MapPinIcon,
  MessageCircle,
  SettingsIcon,
  StarIcon,
  TicketIcon,
  UserIcon,
  WalletIcon,
  WarehouseIcon
} from 'lucide-react'
import { useAuthStore } from '@/stores/auth.store'
import Link from 'next/link'
import { Avatar, AvatarFallback } from '../ui/avatar'

const UserMenu = () => {
  const { logginIn, openModal } = useAuthStore((state) => ({
    logginIn: state.loggedIn,
    openModal: state.openModal
  }))

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <UserIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {!logginIn && (
            <DropdownMenuItem asChild>
              <Button className="w-full mb-2" onClick={() => openModal()}>
                INICIAR SESIÓN/REGISTRARSE
              </Button>
            </DropdownMenuItem>
          )}

          {logginIn && (
            <div className="p-3 flex items-center">
              <Avatar>
                <AvatarFallback>US</AvatarFallback>
              </Avatar>

              <div className="flex flex-col ml-2">
                <p className="text-sm font-medium">user@dev.com</p>
                <p className="text-xs text-muted-foreground">Username</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-3 w-full">
            <DropdownMenuItem className="flex-col text-xs" asChild>
              <Link href="/orders">
                <div className="w-12 h-12 mb-2 rounded-full flex items-center justify-center bg-foreground">
                  <ListIcon className="text-background" />
                </div>
                <span className="font-medium">Tus pedidos</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex-col text-xs">
              <div className="w-12 h-12 mb-2 rounded-full flex items-center justify-center bg-foreground">
                <TicketIcon className="text-background" />
              </div>
              <span className="font-medium">Cupones y</span>
              <span className="font-medium">ofertas</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex-col text-xs">
              <div className="w-12 h-12 mb-2 rounded-full flex items-center justify-center bg-foreground">
                <WalletIcon className="text-background" />
              </div>
              <span className="font-medium">Saldo de</span>
              <span className="font-medium">crédito</span>
            </DropdownMenuItem>
          </div>

          <DropdownMenuSeparator />
          {logginIn && (
            <>
              <DropdownMenuItem>
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Mensajes</span>

                <span className="bg-primary w-4 h-4 flex justify-center items-center text-background rounded-full ml-auto text-[10px]">
                  2
                </span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
          <DropdownMenuItem>
            <StarIcon className="mr-2 h-4 w-4" /> Tus reseñas
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <WarehouseIcon className="mr-2 h-4 w-4" /> Proveedores seguidos
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <ClockIcon className="mr-2 h-4 w-4" /> Historial de navegación
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <MapPinIcon className="mr-2 h-4 w-4" /> Direcciones
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <HeadsetIcon className="mr-2 h-4 w-4" /> Atención al cliente
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SettingsIcon className="mr-2 h-4 w-4" /> Configuración
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default UserMenu

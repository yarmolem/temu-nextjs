'use client'

import { Button } from '@/components/ui/button'
import { cn, sleep } from '@/lib/utils'
import { CheckIcon, ChevronRightIcon, LoaderIcon } from 'lucide-react'
import React, { memo, useEffect, useState } from 'react'

interface CategoryItemProps {
  category: string
  enabled?: boolean
}

export const containerItemClassName =
  'flex w-full min-h-[calc(100dvh_-_50px_-_48px)]'

const CategoryItem = memo((props: CategoryItemProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (props.enabled) {
      sleep(1000).then(() => setIsLoading(false))
    }
  }, [props.enabled])

  if (isLoading) {
    return (
      <div
        className={cn(containerItemClassName, 'items-center justify-center')}
      >
        <LoaderIcon className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <div className={cn(containerItemClassName, 'flex-col')}>
      {/* Alert: Free Shipping */}
      <Button
        variant="ghost"
        className="bg-orange-100 flex items-center px-3 py-2 text-foreground rounded-none"
      >
        <CheckIcon className="w-6 h-6 text-green-500 mr-1" />
        <p className="text-sm font-semibold">Envío gratis para ti</p>

        <div className="flex items-center ml-auto text-muted-foreground">
          <p className="text-sm font-semibold ">Oferta exclusiva</p>
          <ChevronRightIcon className="w-5 h-5 ml-1" />
        </div>
      </Button>

      <span className="text-4xl font-semibold">{props.category}</span>
    </div>
  )
})

export default CategoryItem

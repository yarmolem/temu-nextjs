'use client'

import React, { FormEvent, useState } from 'react'
import { ChevronLeftIcon, SearchIcon, TrashIcon, XIcon } from 'lucide-react'

import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'

import { categories } from '@/data/categories'
import Link from 'next/link'
import { cn } from '@/lib/utils'

const SearchPage = () => {
  const [text, setText] = useState('')

  const isEmpty = text.trim().length === 0

  const clearText = () => setText('')
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isEmpty) return
  }

  return (
    <>
      <div className="bg-background p-3 min-h-[100dvh] space-y-3">
        <form
          onSubmit={handleSubmit}
          className="flex gap-x-3 items-center w-full"
        >
          <Button type="button" size="icon" variant="ghost">
            <ChevronLeftIcon className="size-8" />
          </Button>

          <Input
            placeholder="Buscar..."
            containerClassName="flex-1"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rightIcon={
              <>
                <div>
                  {!isEmpty && (
                    <Button
                      onClick={clearText}
                      type="button"
                      size="icon"
                      variant="ghost"
                    >
                      <XIcon />
                    </Button>
                  )}
                  <Button
                    disabled={isEmpty}
                    type="submit"
                    size="icon"
                    variant="ghost"
                  >
                    <SearchIcon />
                  </Button>
                </div>
              </>
            }
          />
        </form>

        {isEmpty && (
          <>
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Búsquedas recientes</p>

              <Button size="icon" variant="ghost">
                <TrashIcon className="size-4 text-muted-foreground" />
              </Button>
            </div>

            <div className="w-full flex items-center flex-wrap gap-1">
              {categories.slice(0, 5).map((category) => (
                <Link
                  key={category.slug}
                  href={{
                    pathname: '/search-results',
                    query: { query: category.title }
                  }}
                  className="flex items-center gap-2 bg-muted rounded px-2 py-1"
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground font-semibold">
                    {category.title}
                  </p>
                </Link>
              ))}
            </div>

            <p className="text-sm font-semibold">Popular ahora</p>

            <div className="w-full flex items-center flex-wrap gap-1">
              {categories.map((category) => (
                <Link
                  href={{
                    pathname: '/search-results',
                    query: { query: category.title }
                  }}
                  key={category.slug}
                  className="flex items-center gap-2 bg-muted rounded px-2 py-1"
                >
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground font-semibold">
                    {category.title}
                  </p>
                </Link>
              ))}
            </div>
          </>
        )}

        {!isEmpty && (
          <>
            <ul>
              {Array.from({ length: 10 }).map((_, idx) => (
                <li key={idx} className="border-b last:border-b-0">
                  <Link
                    className={cn(
                      buttonVariants({ variant: 'ghost' }),
                      'gap-x-3 w-full rounded-none justify-start'
                    )}
                    href={{
                      query: { query: text },
                      pathname: '/search-results'
                    }}
                  >
                    <SearchIcon className="size-6 text-muted-foreground " />
                    Resultado {idx + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  )
}

export default SearchPage

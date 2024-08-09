import { type CarouselApi } from '@/components/ui/carousel'
import { useEffect, useRef, useState } from 'react'

const useListCategory = () => {
  const widths = useRef<number[]>([])
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)

  const [api, setApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [slideViewed, setSlideViewed] = useState<number[]>([])

  const handleLayout = (e: HTMLLIElement) => {
    widths.current.push(e?.clientWidth ?? 0)
  }

  const handleClick = (index: number) => {
    scrollToCategory(index)
    api?.scrollTo(index, true)
  }

  const scrollToCategory = (index: number) => {
    const offset = widths.current.slice(0, index).reduce((a, b) => a + b, 0)
    listRef.current?.scrollTo({ left: offset, behavior: 'smooth' })

    if (indicatorRef.current) {
      const currentWidth = widths.current[index]
      const indicatorWidth = currentWidth / 4
      const translateX = offset + currentWidth / 2 - indicatorWidth / 2

      indicatorRef.current.style.width = `${indicatorWidth}px`
      indicatorRef.current.style.transform = `translateX(${translateX}px)`
    }

    setActiveIndex(index)
    setSlideViewed((prev) => (prev.includes(index) ? prev : [...prev, index]))
  }

  useEffect(() => {
    const handler = () => {
      const idx = api?.selectedScrollSnap() ?? 0
      setActiveIndex(api?.selectedScrollSnap() ?? 0)
      scrollToCategory(idx)
    }

    handler()

    const eventHandler = api?.on('select', handler)

    return () => {
      eventHandler?.clear()
    }
  }, [api])

  return {
    listRef,
    indicatorRef,
    activeIndex,
    slideViewed,
    handleClick,
    handleLayout,
    setCarouselApi: setApi
  }
}

export default useListCategory

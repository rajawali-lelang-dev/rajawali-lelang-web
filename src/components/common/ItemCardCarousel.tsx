'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ItemCard, { ItemCardProps } from './item-card'

interface ItemCardCarouselProps {
  items: ItemCardProps[]
}

export default function   ItemCardCarousel({ items }: ItemCardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  // Check scroll position
  const checkScroll = () => {
    const container = scrollRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }

  // Scroll to next/previous
  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const scrollAmount = container.clientWidth * 0.8
    const targetScroll = container.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount)

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    })

    // Pause auto-scroll when user manually scrolls
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 5000)
  }

  // Auto-scroll effect
  useEffect(() => {
    const container = scrollRef.current
    if (!container || !isAutoScrolling) return

    let scrollPosition = container.scrollLeft
    const scrollSpeed = 0.5
    let animationFrameId: number

    const autoScroll = () => {
      if (!container || !isAutoScrolling) return

      scrollPosition += scrollSpeed

      // Reset when reaching the end
      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0
      }

      container.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(autoScroll)
    }

    animationFrameId = requestAnimationFrame(autoScroll)

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeave = () => {
      if (isAutoScrolling) {
        animationFrameId = requestAnimationFrame(autoScroll)
      }
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('scroll', checkScroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('scroll', checkScroll)
    }
  }, [isAutoScrolling])

  useEffect(() => {
    checkScroll()
  }, [])

  return (
    <div className="relative group">
      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 ${
          canScrollLeft ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Previous items"
      >
        <ChevronLeft className="w-6 h-6 text-primary-600" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 ${
          canScrollRight ? 'opacity-0 group-hover:opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-label="Next items"
      >
        <ChevronRight className="w-6 h-6 text-primary-600" />
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <ItemCard {...item} />
          </div>
        ))}
        {/* Duplicate items for seamless loop effect */}
        {items.map((item, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
            <ItemCard {...item} />
          </div>
        ))}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

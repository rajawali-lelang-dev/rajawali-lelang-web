'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, triggerOnce])

  return { ref, isVisible }
}

// Hook untuk animasi multiple elements
export function useScrollAnimations(count: number, options: UseScrollAnimationOptions = {}) {
  const refs = useRef<(HTMLElement | null)[]>([])
  const [visibleStates, setVisibleStates] = useState<boolean[]>(new Array(count).fill(false))

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -100px 0px',
    triggerOnce = true,
  } = options

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    refs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleStates((prev) => {
              const newStates = [...prev]
              newStates[index] = true
              return newStates
            })
            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setVisibleStates((prev) => {
              const newStates = [...prev]
              newStates[index] = false
              return newStates
            })
          }
        },
        { threshold, rootMargin }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [threshold, rootMargin, triggerOnce])

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element
  }

  return { setRef, visibleStates }
}

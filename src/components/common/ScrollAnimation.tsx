'use client'

import React from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-in-up' | 'fade-in-left' | 'fade-in-right' | 'fade-in-scale'
  delay?: 0 | 100 | 200 | 300 | 400 | 500
  threshold?: number
  triggerOnce?: boolean
  as?: React.ElementType
}

export function ScrollAnimation({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
}: ScrollAnimationProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold, triggerOnce })

  const delayClass = delay > 0 ? `delay-${delay}` : ''

  return (
    <Component
      ref={ref}
      className={cn(
        animation,
        delayClass,
        isVisible && 'visible',
        className
      )}
    >
      {children}
    </Component>
  )
}

// Shorthand components untuk kemudahan
export function FadeInUp(props: Omit<ScrollAnimationProps, 'animation'>) {
  return <ScrollAnimation {...props} animation="fade-in-up" />
}

export function FadeInLeft(props: Omit<ScrollAnimationProps, 'animation'>) {
  return <ScrollAnimation {...props} animation="fade-in-left" />
}

export function FadeInRight(props: Omit<ScrollAnimationProps, 'animation'>) {
  return <ScrollAnimation {...props} animation="fade-in-right" />
}

export function FadeInScale(props: Omit<ScrollAnimationProps, 'animation'>) {
  return <ScrollAnimation {...props} animation="fade-in-scale" />
}

'use client'

import { useEffect, useRef } from 'react'

type Direction = 'up' | 'left' | 'right' | 'fade'

export function ScrollReveal({
  children,
  className = '',
  direction = 'up',
}: {
  children: React.ReactNode
  className?: string
  direction?: Direction
}) {
  const ref = useRef<HTMLDivElement>(null)

  const baseClass = direction === 'up'
    ? 'scroll-reveal'
    : direction === 'left'
    ? 'scroll-reveal-left'
    : direction === 'right'
    ? 'scroll-reveal-right'
    : 'scroll-reveal'

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  )
}
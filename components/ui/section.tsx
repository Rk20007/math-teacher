import React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  darkBg?: boolean
}

export function Section({ children, className, id, darkBg = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full py-16 md:py-24 lg:py-32',
        darkBg ? 'bg-secondary text-white' : 'bg-background',
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <div className={cn(centered && 'text-center mb-12 md:mb-16', className)}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}

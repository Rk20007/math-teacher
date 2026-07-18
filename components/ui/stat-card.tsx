import React from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  description?: string
  className?: string
  icon?: React.ReactNode
}

export function StatCard({ label, value, description, className, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center text-center p-6 rounded-lg',
        'bg-card border border-border',
        className
      )}
    >
      {icon && <div className="mb-4 text-4xl">{icon}</div>}
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2 font-heading">
        {value}
      </div>
      <div className="text-sm font-semibold text-foreground mb-1">
        {label}
      </div>
      {description && (
        <p className="text-xs text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

import React from 'react'
import { cn } from '@/lib/utils'

interface CurriculumCardProps {
  name: string
  description: string
  icon: string
  highlight?: string
  courses?: string[]
  className?: string
}

export function CurriculumCard({
  name,
  description,
  icon,
  highlight,
  courses,
  className
}: CurriculumCardProps) {
  return (
    <div
      className={cn(
        'p-6 md:p-8 rounded-lg border border-border bg-card',
        'hover:border-primary hover:shadow-lg transition-all duration-300',
        'flex flex-col h-full min-h-0',
        className
      )}
    >
      <div className="text-5xl md:text-6xl font-bold text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 font-heading">
        {name}
      </h3>
      <p className="text-muted-foreground mb-4 flex-grow">
        {description}
      </p>
      {highlight && (
        <div className="mb-4 p-3 bg-accent/10 rounded border border-accent/20">
          <p className="text-sm text-foreground font-medium">
            {highlight}
          </p>
        </div>
      )}
      {courses && courses.length > 0 && (
        <ul className="space-y-1">
          {courses.map((course, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start">
              <span className="text-primary mr-2">✓</span>
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

import React from 'react'
import { TrendingUp, School } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  rating: number
  course?: string
  improvement?: string
  school?: string
  className?: string
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  course,
  improvement,
  school,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        'p-6 md:p-8 rounded-2xl bg-card border border-border flex flex-col h-full',
        'hover:shadow-lg transition-shadow duration-300',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="font-semibold text-foreground text-lg">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <div className="flex gap-0.5">
          {[...Array(rating)].map((_, i) => (
            <span key={i} className="text-accent">★</span>
          ))}
        </div>
      </div>

      <p className="text-foreground mb-5 leading-relaxed flex-grow">
        &ldquo;{content}&rdquo;
      </p>

      {/* Result highlight — course, grade improvement, school */}
      <div className="pt-4 border-t border-border space-y-2.5">
        {course && (
          <p className="text-sm font-semibold text-primary">{course}</p>
        )}
        {improvement && (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <TrendingUp className="w-4 h-4 text-accent" strokeWidth={2.5} />
            <span className="text-sm font-bold text-accent tabular-nums">{improvement}</span>
          </div>
        )}
        {school && (
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <School className="w-3.5 h-3.5" strokeWidth={2} />
            <span>{school}</span>
          </div>
        )}
      </div>
    </div>
  )
}

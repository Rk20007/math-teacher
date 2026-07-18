import React from 'react'
import Link from 'next/link'
import { CheckCircle2, GraduationCap, BookOpen, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  title: string
  description: string
  level: string
  grades: string
  board: string
  suitableFor: string
  features: string[]
  href?: string
  className?: string
}

export function CourseCard({
  title,
  description,
  level,
  grades,
  board,
  suitableFor,
  features,
  href = '#',
  className
}: CourseCardProps) {
  const CardComponent = href !== '#' ? Link : 'div'

  return (
    <CardComponent href={href !== '#' ? href : undefined} className="group block h-full">
      <div
        className={cn(
          'p-6 md:p-8 rounded-2xl border border-border bg-card',
          'hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
          'h-full flex flex-col',
          href !== '#' && 'cursor-pointer',
          className
        )}
      >
        <div className="mb-4">
          <h3 className="text-lg md:text-xl font-bold text-foreground font-heading mb-2 leading-snug group-hover:text-accent transition-colors">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
              {level}
            </span>
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
              {grades}
            </span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
          {description}
        </p>

        {/* Quick facts */}
        <div className="space-y-2.5 mb-5">
          <div className="flex items-start gap-2.5">
            <BookOpen className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-xs text-foreground"><span className="font-semibold">Board:</span> {board}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <GraduationCap className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-xs text-foreground"><span className="font-semibold">Grades:</span> {grades}</p>
          </div>
          <div className="flex items-start gap-2.5">
            <Users className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
            <p className="text-xs text-foreground"><span className="font-semibold">Best for:</span> {suitableFor}</p>
          </div>
        </div>

        <div className="space-y-2 mb-5 flex-grow">
          {features.slice(0, 3).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={2} />
              <span className="text-xs font-medium text-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border flex items-center justify-between mt-auto">
          <span className="text-xs text-muted-foreground">One-to-one coaching</span>
          <span className="text-sm font-semibold text-accent group-hover:translate-x-0.5 transition-transform">
            Learn more →
          </span>
        </div>
      </div>
    </CardComponent>
  )
}

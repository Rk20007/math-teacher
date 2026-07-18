'use client'

import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { testimonials } from '@/data/testimonials'
import { ArrowRight } from 'lucide-react'

export function TestimonialsSection() {
  const featured = testimonials.slice(0, 3)

  return (
    <Section className="bg-blue-50">
      <SectionHeader
        title="Parent & Student Testimonials"
        subtitle="Real feedback from families we've helped succeed"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featured.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            content={testimonial.content}
            rating={testimonial.rating}
            course={testimonial.course}
            improvement={testimonial.improvement}
            school={testimonial.school}
          />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          View All Testimonials
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}

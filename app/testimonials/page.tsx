import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { TestimonialCard } from '@/components/ui/testimonial-card'
import { testimonials, googleReviews } from '@/data/testimonials'

export const metadata = {
  title: 'Student & Parent Testimonials | Anil Kataria Mathematics Tutoring',
  description: 'Real feedback from students and parents about Anil Kataria\'s mathematics tutoring. See success stories and results.',
}

export default function TestimonialsPage() {
  return (
    <>
      <Section className="pt-20">
        <SectionHeader
          title="What Students & Parents Say"
          subtitle="Real feedback from families we've helped succeed"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
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
      </Section>

      {/* Google Reviews Section */}
      <Section className="bg-blue-50">
        <SectionHeader
          title="Google Reviews"
          subtitle="Verified feedback from our community"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="p-6 bg-white rounded-lg border border-blue-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-lg">★</span>
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{review.content}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-foreground text-sm">
                  {review.author}
                </p>
                <p className="text-xs text-muted-foreground">
                  {review.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Stories Stats */}
      <Section>
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-12">
          The Impact of Personalized Tutoring
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
            <div className="text-5xl font-bold text-primary mb-3">500+</div>
            <p className="text-foreground font-semibold">Students Helped</p>
          </div>
          <div className="p-8 text-center bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg border border-accent/20">
            <div className="text-5xl font-bold text-accent mb-3">98%</div>
            <p className="text-foreground font-semibold">Parent Satisfaction</p>
          </div>
          <div className="p-8 text-center bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg border border-green-500/20">
            <div className="text-5xl font-bold text-green-600 mb-3">1-to-1</div>
            <p className="text-foreground font-semibold">Personalized Coaching</p>
          </div>
          <div className="p-8 text-center bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg border border-blue-500/20">
            <div className="text-5xl font-bold text-blue-600 mb-3">25+</div>
            <p className="text-foreground font-semibold">Years Experience</p>
          </div>
        </div>
      </Section>
    </>
  )
}

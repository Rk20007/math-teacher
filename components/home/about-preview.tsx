import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Section } from '@/components/ui/section'
import { ArrowRight, Award, GraduationCap, ShieldCheck, Target } from 'lucide-react'

const QUALIFICATIONS = [
  { icon: GraduationCap, text: 'NIT Trichy Graduate — strong academic foundation' },
  { icon: ShieldCheck, text: 'MOHRE-licensed private teacher in the UAE' },
  { icon: Award, text: '25+ years teaching IB, IGCSE, A-Level & CBSE' },
  { icon: Target, text: '500+ students guided to their target grades' },
]

export function AboutPreview() {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Professional photo */}
        <div className="order-1 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl" />
            <div className="relative aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl ring-1 ring-primary/10">
              <Image
                src="/images/branding/portrait-circular.png"
                alt="Anil Kataria — Mathematics Tutor in Dubai"
                fill
                sizes="(max-width: 768px) 80vw, 384px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="order-2 lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 mb-5">
            <span className="text-accent font-semibold text-sm">✓</span>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">Meet Your Tutor</p>
          </div>

          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">
            Hi, I&rsquo;m Anil Kataria
          </h2>

          <div className="space-y-4 text-muted-foreground mb-6">
            <p>
              I&rsquo;m a Dubai-based mathematics specialist with more than 25 years of teaching experience across
              international and national curricula. An NIT Trichy graduate and MOHRE-licensed private teacher, I&rsquo;ve
              helped 500+ students turn maths from a source of stress into a subject they feel confident in.
            </p>
            <p>
              <span className="font-semibold text-foreground">My teaching philosophy</span> is simple: build genuine
              concept clarity first, reinforce it with consistent practice, and layer in exam-specific strategy so every
              student walks into the exam hall prepared. Every plan is one-to-one and tailored to how that student learns.
            </p>
          </div>

          {/* Qualifications */}
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {QUALIFICATIONS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-primary" strokeWidth={2} />
                </div>
                <p className="text-sm text-foreground leading-snug pt-1">{text}</p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
          >
            Read My Full Story
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Section>
  )
}

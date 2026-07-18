import React from 'react'
import Link from 'next/link'
import { Section } from '@/components/ui/section'

export function CTASection() {
  return (
    <Section className="bg-gradient-to-r from-primary to-secondary text-white" darkBg>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
          Ready to Excel in Mathematics?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Start your journey to academic success with personalized tutoring from a MOHRE-licensed specialist with 25+ years of proven excellence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-white/90 transition-colors shadow-lg"
          >
            Book Free Consultation Today
          </Link>
          <a
            href="https://wa.me/971569205973"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            Contact via WhatsApp
          </a>
        </div>

        <p className="text-sm text-white/80 mt-6">
          No credit card required. First consultation is completely free.
        </p>
      </div>
    </Section>
  )
}

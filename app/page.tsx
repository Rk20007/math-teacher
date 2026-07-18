import React from 'react'
import { Hero } from '@/components/home/hero'
import { TrustBadges } from '@/components/home/trust-badges'
import { Statistics } from '@/components/home/statistics'
import { CredentialsShowcase } from '@/components/home/credentials-showcase'
import { CertificatesShowcase } from '@/components/home/certificates-showcase'
import { AboutPreview } from '@/components/home/about-preview'
import { CurriculumSection } from '@/components/home/curriculum'
import { CoursesSection } from '@/components/home/courses-section'
import { PremiumResultsShowcase } from '@/components/home/premium-results-showcase'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { GoogleReviewsSection } from '@/components/home/google-reviews'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'

export const metadata = {
  title: 'Anil Kataria | Senior Mathematics Specialist in Dubai | Premium Tutoring',
  description: 'MOHRE-licensed mathematics specialist with 25+ years experience. Expert in IB, IGCSE, A-Level, CBSE. 98% success rate. Book your free consultation today.',
  openGraph: {
    title: 'Anil Kataria | Senior Mathematics Specialist in Dubai',
    description: 'Premium mathematics tutoring with proven results. MOHRE-licensed, 25+ years experience.',
    url: 'https://anilkataria.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anil Kataria | Senior Mathematics Specialist',
    description: 'Premium mathematics tutoring in Dubai',
  }
}

export default function Home() {
  return (
    <>
      {/* Hero with circular portrait image */}
      <Hero />
      
      {/* Trust badges with circular logo badge */}
      <TrustBadges />
      
      {/* Statistics counters */}
      <Statistics />
      
      {/* Credentials showcase with MOHRE license image */}
      <CredentialsShowcase />
      
      {/* Certificates and official qualifications */}
      <CertificatesShowcase />
      
      {/* About section with premium brochure image */}
      <AboutPreview />
      
      {/* Curriculum expertise grid */}
      <CurriculumSection />
      
      {/* Featured courses */}
      <CoursesSection />
      
      {/* Results showcase with premium flyer image */}
      <PremiumResultsShowcase />
      
      {/* Testimonials section */}
      <TestimonialsSection />

      {/* Verified Google reviews */}
      <GoogleReviewsSection />

      {/* FAQ accordion */}
      <FAQSection />
      
      {/* Final CTA section */}
      <CTASection />
    </>
  )
}

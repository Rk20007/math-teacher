import React from 'react'
import type { Metadata } from 'next'
import { ContactForm } from '@/components/forms/contact-form'
import { Section, SectionHeader } from '@/components/ui/section'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Anil Kataria | Book Free Consultation | Mathematics Tutoring Dubai',
  description: 'Get in touch with Anil Kataria for mathematics tutoring. WhatsApp, phone, email, or book a free consultation.',
}

export default function ContactPage() {

  return (
    <>
      <Section className="pt-20">
        <SectionHeader
          title="Get in Touch"
          subtitle="Book your free consultation or ask any questions"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:+971569205973" className="text-primary hover:underline">
                  +971 56 920 5973
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Email</h3>
                <a href="mailto:anil@v3maths.com" className="text-primary hover:underline">
                  anil@v3maths.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Location</h3>
                <p className="text-muted-foreground">Dubai & Sharjah, UAE</p>
                <p className="text-sm text-muted-foreground">Online & In-person Sessions</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Clock className="w-6 h-6 text-primary mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-1">Availability</h3>
                <p className="text-muted-foreground">Flexible scheduling</p>
                <p className="text-sm text-muted-foreground">Online & in-person both available</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-bold text-foreground mb-3">Quick Contact via WhatsApp</h4>
              <p className="text-sm text-muted-foreground mb-4">
                For fastest response, reach out via WhatsApp with your query
              </p>
              <a
                href="https://wa.me/971569205973"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                <span>💬</span> Message on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg border border-border">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}

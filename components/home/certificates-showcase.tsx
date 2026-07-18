import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { certificates } from '@/data/certificates'
import { CheckCircle, Award, ArrowRight } from 'lucide-react'

export function CertificatesShowcase() {
  const primaryCerts = certificates.filter(c => c.isPrimary).slice(0, 2)
  const highlights = certificates.filter(c => !c.isPrimary).slice(0, 4)

  return (
    <Section>
      <SectionHeader
        title="Official Certifications & Credentials"
        subtitle="Government-verified qualifications and expert-level specializations"
      />

      {/* Primary Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {primaryCerts.map(cert => (
          <div
            key={cert.id}
            className="relative p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border-2 border-primary shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Verified Badge */}
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-500 text-white">Verified</Badge>
            </div>

            {/* Icon */}
            <div className="text-5xl mb-4">{cert.icon}</div>

            {/* Content */}
            <h3 className="text-xl font-bold text-foreground mb-2">{cert.title}</h3>
            <p className="text-sm font-semibold text-primary mb-3">{cert.issuer}</p>
            <p className="text-muted-foreground mb-4">{cert.description}</p>

            {/* Details */}
            {cert.permitNumber && (
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="font-mono text-xs">Permit: {cert.permitNumber}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-xs">Valid until: {cert.expiryDate}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Specializations Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-foreground mb-6">Expert in All Major Curricula</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(cert => (
            <div
              key={cert.id}
              className="p-5 bg-white rounded-lg border border-border hover:border-primary hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-3">{cert.icon}</div>
              <h4 className="font-bold text-sm text-foreground mb-2">{cert.title}</h4>
              <div className="flex items-center gap-2 text-xs text-green-600">
                <CheckCircle className="w-3 h-3" />
                <span>Verified Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Link */}
      <div className="flex justify-center pt-4">
        <Link
          href="/certificates"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          View All Certifications
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}

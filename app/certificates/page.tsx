import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { certificates, downloadableDocuments } from '@/data/certificates'
import { CheckCircle, Download, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Certifications & Credentials | Anil Kataria Mathematics Specialist',
  description: 'MOHRE-licensed mathematics specialist with 25+ years experience. Official certifications in IB, IGCSE, A-Level, CBSE curricula.',
}

export default function CertificatesPage() {
  const primaryCerts = certificates.filter(c => c.isPrimary)
  const secondaryCerts = certificates.filter(c => !c.isPrimary)

  return (
    <>
      {/* Page Header */}
      <Section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Certifications & Credentials</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Official qualifications, government certifications, and verified expertise across all major international and national curricula
          </p>
        </div>
      </Section>

      {/* Primary Certifications */}
      <Section>
        <SectionHeader
          title="Official Certifications"
          subtitle="Government-verified credentials and primary qualifications"
          centered
        />
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

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{cert.title}</h3>

              {/* Issuer */}
              <p className="text-sm font-semibold text-primary mb-4">{cert.issuer}</p>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

              {/* Details */}
              <div className="space-y-2 text-sm">
                {cert.permitNumber && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-mono">Permit: {cert.permitNumber}</span>
                  </div>
                )}
                {cert.emiratesId && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="font-mono">Emirates ID: {cert.emiratesId}</span>
                  </div>
                )}
                {cert.expiryDate && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Valid until: {cert.expiryDate}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Specializations */}
      <Section className="bg-blue-50">
        <SectionHeader
          title="Curriculum Specializations"
          subtitle="Expert-level proficiency in major international and national boards"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryCerts.map(cert => (
            <div
              key={cert.id}
              className="p-6 bg-white rounded-lg border border-blue-200 hover:border-primary hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-3">{cert.icon}</div>
              <h4 className="font-bold text-foreground mb-2">{cert.title}</h4>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
              <div className="mt-4 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-xs font-semibold text-green-600">Verified Expert</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Downloadable Documents */}
      <Section>
        <SectionHeader
          title="Official Documents"
          subtitle="Download complete certifications and verification documents"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloadableDocuments.map(doc => (
            <div
              key={doc.id}
              className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-all group"
            >
              {/* Icon */}
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{doc.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{doc.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>

              {/* File Info */}
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono">{doc.filename}</span>
                <span>•</span>
                <span>{doc.size}</span>
              </div>

              {/* Download Button */}
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust & Verification Section */}
      <Section className="bg-gradient-to-r from-primary/5 to-secondary/5">
        <SectionHeader
          title="Why Trust These Credentials?"
          subtitle="All certifications are official and government-verified"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🏛️</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Government Approved</h3>
            <p className="text-muted-foreground">
              MOHRE licensed and authorized to teach privately in UAE
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Verified Expertise</h3>
            <p className="text-muted-foreground">
              25+ years of proven teaching excellence and success
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-foreground mb-2">Multi-Curriculum</h3>
            <p className="text-muted-foreground">
              Certified across IB, IGCSE, A-Level, and CBSE boards
            </p>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Learn from a Certified Expert?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Join hundreds of students who have achieved top grades under my guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/971569205973"
              className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
            >
              WhatsApp Consultation
            </a>
            <a
              href="/contact"
              className="px-8 py-3 bg-primary-foreground/20 text-white rounded-lg font-semibold border border-white hover:bg-primary-foreground/30 transition-colors"
            >
              Book Free Session
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}

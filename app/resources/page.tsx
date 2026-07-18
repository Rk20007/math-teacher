import React from 'react'
import type { Metadata } from 'next'
import { Section, SectionHeader } from '@/components/ui/section'
import { downloadableDocuments } from '@/data/certificates'
import { Download, FileText, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resources & Downloads | Anil Kataria Mathematics',
  description: 'Download brochures, certifications, and educational resources from Anil Kataria.',
}

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <Section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-3xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources & Downloads</h1>
          <p className="text-lg text-blue-100">
            Access official documents, brochures, and certification materials
          </p>
        </div>
      </Section>

      {/* Downloadable Documents */}
      <Section>
        <SectionHeader
          title="Official Documents"
          subtitle="Download complete information about services and certifications"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {downloadableDocuments.map(doc => (
            <div
              key={doc.id}
              className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-xl border-2 border-border hover:border-primary shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{doc.icon}</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{doc.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{doc.description}</p>
              <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <span className="font-mono text-xs">{doc.filename}</span>
                <span>•</span>
                <span>{doc.size}</span>
              </div>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2">
                <Download className="w-5 h-5" />
                Download PDF
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* Study Materials Section */}
      <Section className="bg-blue-50">
        <SectionHeader
          title="Study Materials"
          subtitle="Comprehensive resources for exam preparation"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Practice Papers',
              icon: '📝',
              description: 'Past papers and mock exams for all curricula'
            },
            {
              title: 'Formula Sheets',
              icon: '📊',
              description: 'Quick reference guides for mathematics formulas'
            },
            {
              title: 'Tips & Strategies',
              icon: '💡',
              description: 'Expert tips for exam success and time management'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg border border-blue-200">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
              <button className="text-primary hover:text-primary/80 font-semibold text-sm">
                Coming Soon →
              </button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-2xl mx-auto text-center">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h2 className="text-3xl font-bold mb-4">Need More Resources?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Contact me for personalized study materials and guidance
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </Section>
    </>
  )
}

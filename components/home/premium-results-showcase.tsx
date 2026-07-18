import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { ArrowRight, ArrowRight as Arrow } from 'lucide-react'

const RESULTS = [
  { board: 'IGCSE', from: 'C', to: 'A*', note: 'Extended Mathematics' },
  { board: 'IB', from: '4', to: '6', note: 'HL Mathematics AA' },
  { board: 'CBSE', from: '58%', to: '92%', note: 'Grade 11 Mathematics' },
  { board: 'A-Level', from: 'C', to: 'A', note: 'Pure & Mechanics' },
]

export function PremiumResultsShowcase() {
  return (
    <Section className="bg-gradient-to-b from-blue-50 to-background">
      <SectionHeader
        title="Real Student Results"
        subtitle="Actual grade improvements across IB, IGCSE, A-Level and CBSE"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {RESULTS.map((r) => (
          <div
            key={r.board + r.note}
            className="p-6 bg-white rounded-2xl border border-border hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-5">
              {r.board}
            </span>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl font-bold text-muted-foreground/70 tabular-nums">{r.from}</span>
              <Arrow className="w-6 h-6 text-accent" strokeWidth={2.5} />
              <span className="text-4xl font-bold text-accent tabular-nums">{r.to}</span>
            </div>
            <p className="text-xs text-muted-foreground">{r.note}</p>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto text-center mb-8">
        <p className="text-muted-foreground">
          These are representative outcomes from students who committed to consistent one-to-one coaching.
          Most students improve by <span className="font-semibold text-foreground">2&ndash;3 grades within 3&ndash;6 months</span>.
        </p>
      </div>

      <div className="text-center">
        <Link
          href="/results"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-colors"
        >
          View Detailed Results
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}

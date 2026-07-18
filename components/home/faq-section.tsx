'use client'

import React, { useState } from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { faqs } from '@/data/faq'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0)

  return (
    <Section>
      <SectionHeader
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our tutoring services"
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <button
            key={faq.id}
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full text-left"
          >
            <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </div>
              {openId === faq.id && (
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          </button>
        ))}
      </div>
    </Section>
  )
}

import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'

export function TrustBadges() {
  const badges = [
    {
      icon: '✓',
      title: 'MOHRE Licensed',
      description: 'Legally authorized private teacher in UAE'
    },
    {
      icon: '∑',
      title: 'NIT Trichy Graduate',
      description: 'Strong academic foundation from top institution'
    },
    {
      icon: '25+',
      title: 'Years Experience',
      description: 'Proven track record of teaching excellence'
    },
    {
      icon: '📚',
      title: 'Multiple Curricula',
      description: 'IB, IGCSE, A-Level, CBSE expertise'
    },
    {
      icon: '🎯',
      title: 'Results Focused',
      description: 'Consistently helping students achieve top grades'
    },
    {
      icon: '👥',
      title: 'Personalized Approach',
      description: 'Individual learning plans for each student'
    }
  ]

  return (
    <Section className="bg-blue-50">
      <SectionHeader
        title="Why Parents Choose Anil Kataria"
        subtitle="A trusted, MOHRE-licensed maths tutor in Dubai — credentials, experience and proven results"
      />
      
      {/* Circular Logo Badge */}
      {/* <div className="flex justify-center mb-12">
        <div className="relative w-40 h-40 md:w-48 md:h-48">
          <Image
            src="/images/branding/logo-circular.png"
            alt="√3 Anil Kataria Verified Logo"
            fill
            className="object-contain drop-shadow-lg"
          />
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-lg border border-blue-100 hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl font-bold text-primary mb-2">
              {badge.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {badge.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {badge.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}

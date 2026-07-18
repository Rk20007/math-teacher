import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { CurriculumCard } from '@/components/ui/curriculum-card'
import { curricula } from '@/data/curricula'

export function CurriculumSection() {
  return (
    <Section>
      <SectionHeader
        title="Expertise Across Multiple Curricula"
        subtitle="Specialized in all major international and national boards"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {curricula.map((curr) => (
          <CurriculumCard
            key={curr.id}
            name={curr.name}
            description={curr.description}
            icon={curr.icon}
            highlight={curr.highlight}
            courses={curr.courses}
          />
        ))}
      </div>
    </Section>
  )
}

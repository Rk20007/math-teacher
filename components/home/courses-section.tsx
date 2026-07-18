import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'
import { CourseCard } from '@/components/ui/course-card'
import { courses } from '@/data/courses'
import { ArrowRight } from 'lucide-react'

export function CoursesSection() {
  const featured = courses.slice(0, 3)

  return (
    <Section className="bg-blue-50">
      <SectionHeader
        title="Specialised Maths Courses in Dubai"
        subtitle="IB, IGCSE, A-Level and CBSE maths tutoring tailored to your curriculum and goals"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {featured.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            description={course.description}
            level={course.level}
            grades={course.grades}
            board={course.board}
            suitableFor={course.suitableFor}
            features={course.features}
            href="/courses"
          />
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          View All Courses
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}

import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'
import { CourseCard } from '@/components/ui/course-card'
import { courses } from '@/data/courses'

export const metadata = {
  title: 'Mathematics Courses | IB, IGCSE, A-Level, CBSE | Anil Kataria',
  description: 'Browse all courses: IB, IGCSE, A-Level, CBSE mathematics tutoring. Specialized programs with proven success rates.',
}

export default function CoursesPage() {
  return (
    <>
      <Section className="pt-20">
        <SectionHeader
          title="All Specialized Courses"
          subtitle="Comprehensive mathematics tutoring programs for every curriculum"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              level={course.level}
              grades={course.grades}
              board={course.board}
              suitableFor={course.suitableFor}
              features={course.features}
              href="/contact"
            />
          ))}
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Choose the Right Course for You</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Each course is tailored to your specific curriculum and academic goals. I offer specialized programs for:
          </p>
          <ul className="space-y-3 text-foreground mb-8">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">→</span>
              <div>
                <p className="font-semibold">International Baccalaureate (IB)</p>
                <p className="text-sm text-muted-foreground">Both Analysis & Approaches (AA) and Applications & Interpretation (AI) tracks</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">→</span>
              <div>
                <p className="font-semibold">Cambridge IGCSE</p>
                <p className="text-sm text-muted-foreground">Core and Extended tier preparation with focus on exam techniques</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">→</span>
              <div>
                <p className="font-semibold">A-Level Mathematics</p>
                <p className="text-sm text-muted-foreground">Pure Mathematics, Mechanics, and Statistics comprehensive coverage</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold text-xl mt-1">→</span>
              <div>
                <p className="font-semibold">CBSE Mathematics</p>
                <p className="text-sm text-muted-foreground">Grades 11-12 with JEE preparation foundation</p>
              </div>
            </li>
          </ul>
          <p className="text-foreground">
            All courses include regular progress assessments, mock exams, and personalized feedback to ensure you&apos;re on track for success.
          </p>
        </div>
      </Section>
    </>
  )
}

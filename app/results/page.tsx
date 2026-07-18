import React from 'react'
import { Section, SectionHeader } from '@/components/ui/section'

export const metadata = {
  title: 'Student Results & Success Stories | Anil Kataria Mathematics Tutoring',
  description: 'See the results: 500+ students, 98% success rate, A* grades across IGCSE, IB, A-Level, and CBSE.',
}

export default function ResultsPage() {
  return (
    <>
      <Section className="pt-20">
        <SectionHeader
          title="Student Results & Success"
          subtitle="Proven track record of achieving target grades"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="p-8 text-center bg-blue-50 rounded-lg border border-blue-200">
            <div className="text-5xl font-bold text-primary mb-2">500+</div>
            <p className="text-foreground font-semibold">Students Taught</p>
            <p className="text-sm text-muted-foreground mt-1">All major curricula</p>
          </div>
          <div className="p-8 text-center bg-green-50 rounded-lg border border-green-200">
            <div className="text-5xl font-bold text-green-600 mb-2">98%</div>
            <p className="text-foreground font-semibold">Success Rate</p>
            <p className="text-sm text-muted-foreground mt-1">Achieved target grades</p>
          </div>
          <div className="p-8 text-center bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="text-5xl font-bold text-yellow-600 mb-2">25+</div>
            <p className="text-foreground font-semibold">Years Experience</p>
            <p className="text-sm text-muted-foreground mt-1">Teaching excellence</p>
          </div>
          <div className="p-8 text-center bg-purple-50 rounded-lg border border-purple-200">
            <div className="text-5xl font-bold text-purple-600 mb-2">4</div>
            <p className="text-foreground font-semibold">Major Curricula</p>
            <p className="text-sm text-muted-foreground mt-1">IB, IGCSE, A-Level, CBSE</p>
          </div>
        </div>
      </Section>

      <Section className="bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8 text-center">
          Results by Curriculum
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-primary mb-4">IB Diploma</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Average Score: 6.2/7 (Higher Level)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>95% scored 6 or above</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary font-bold">✓</span>
                <span>Success across AA & AI tracks</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg border border-green-100">
            <h3 className="text-2xl font-bold text-green-600 mb-4">IGCSE</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Average Grade: A*</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>94% achieved A or A*</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span>Strong extended tier results</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg border border-yellow-100">
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">A-Level</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>Average Grade: A</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>96% scored A or B</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-yellow-600 font-bold">✓</span>
                <span>University admission ready</span>
              </li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-lg border border-purple-100">
            <h3 className="text-2xl font-bold text-purple-600 mb-4">CBSE</h3>
            <ul className="space-y-2 text-foreground">
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>Average: 95%+ scores</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>97% success rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span>JEE foundation strong</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  )
}

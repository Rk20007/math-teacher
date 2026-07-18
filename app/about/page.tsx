import React from 'react'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'

export const metadata = {
  title: 'About Anil Kataria | 25+ Years Mathematics Teaching Excellence',
  description: 'Meet Anil Kataria - MOHRE-licensed mathematics specialist in Dubai with 25+ years of teaching excellence across IB, IGCSE, A-Level, and CBSE.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="primary" size="lg" className="w-fit mb-6">
              Senior Mathematics Specialist
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground font-heading mb-6">
              Anil Kataria
            </h1>
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              With over 25 years of dedicated teaching experience across multiple international and national curricula, I&apos;ve helped hundreds of students achieve mathematical excellence and build lasting confidence in the subject.
            </p>
            <div className="space-y-3 text-foreground">
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>MOHRE Licensed Private Teacher in UAE</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>NIT Trichy Graduate - Strong Academic Foundation</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>500+ Students Successfully Tutored</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>98% Success Rate in Target Grade Achievement</span>
              </p>
            </div>
          </div>
          <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/20">
            <Image
              src="/images/anil-kataria.jpg"
              alt="Anil Kataria"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Teaching Philosophy */}
      <Section className="bg-blue-50">
        <SectionHeader
          title="Teaching Philosophy & Approach"
          subtitle="Building concept clarity, confidence, and consistent results"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg border border-blue-100">
            <div className="text-4xl font-bold text-primary mb-3">1</div>
            <h3 className="text-xl font-bold text-foreground mb-3">Concept Clarity</h3>
            <p className="text-muted-foreground">
              I focus on building a strong conceptual foundation rather than rote memorization. Students understand the &quot;why&quot; behind each concept.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-blue-100">
            <div className="text-4xl font-bold text-primary mb-3">2</div>
            <h3 className="text-xl font-bold text-foreground mb-3">Consistent Practice</h3>
            <p className="text-muted-foreground">
              Regular practice with carefully selected problems ensures mastery. I provide targeted exercises based on individual learning needs.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg border border-blue-100">
            <div className="text-4xl font-bold text-primary mb-3">3</div>
            <h3 className="text-xl font-bold text-foreground mb-3">Exam Success</h3>
            <p className="text-muted-foreground">
              Proven exam techniques, time management strategies, and mock tests prepare students thoroughly for actual board exams.
            </p>
          </div>
        </div>
      </Section>

      {/* Experience Overview */}
      <Section>
        <SectionHeader
          title="25+ Years of Teaching Excellence"
          subtitle="Proven success across multiple curricula and boards"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-8 bg-card rounded-lg border border-border text-center">
            <div className="text-5xl font-bold text-primary mb-3">500+</div>
            <p className="text-foreground font-semibold mb-2">Students Taught</p>
            <p className="text-sm text-muted-foreground">Across all major curricula</p>
          </div>
          <div className="p-8 bg-card rounded-lg border border-border text-center">
            <div className="text-5xl font-bold text-primary mb-3">98%</div>
            <p className="text-foreground font-semibold mb-2">Success Rate</p>
            <p className="text-sm text-muted-foreground">Achieving target grades</p>
          </div>
          <div className="p-8 bg-card rounded-lg border border-border text-center">
            <div className="text-5xl font-bold text-primary mb-3">4</div>
            <p className="text-foreground font-semibold mb-2">Major Curricula</p>
            <p className="text-sm text-muted-foreground">IB, IGCSE, A-Level, CBSE</p>
          </div>
          <div className="p-8 bg-card rounded-lg border border-border text-center">
            <div className="text-5xl font-bold text-primary mb-3">25+</div>
            <p className="text-foreground font-semibold mb-2">Years Experience</p>
            <p className="text-sm text-muted-foreground">Dedicated to excellence</p>
          </div>
        </div>
      </Section>

      {/* Why I Teach */}
      <Section className="bg-secondary text-white" darkBg>
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why I Became a Mathematics Teacher</h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            I believe mathematics is one of the most powerful tools for understanding the world. However, many students develop a fear of the subject due to ineffective teaching or lack of personalized attention.
          </p>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            My mission is to transform that fear into confidence and help every student discover that mathematics is not just a subject to pass exams in - it&apos;s a skill that opens doors to future opportunities and career success.
          </p>
          <p className="text-lg text-white/90 leading-relaxed">
            When I see a student go from struggling to scoring top grades, it reminds me why I love teaching. That transformation is what drives me every single day.
          </p>
        </div>
      </Section>

      {/* Credentials */}
      <Section>
        <SectionHeader title="Credentials & Qualifications" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-blue-50 rounded-lg border-2 border-primary">
            <h3 className="text-2xl font-bold text-primary mb-4">NIT Trichy</h3>
            <p className="text-foreground mb-2 font-semibold">National Institute of Technology</p>
            <p className="text-muted-foreground mb-4">
              Strong academic foundation with rigorous curriculum and competitive learning environment. NIT education reflects excellence and analytical thinking.
            </p>
          </div>
          <div className="p-8 bg-blue-50 rounded-lg border-2 border-accent">
            <h3 className="text-2xl font-bold text-accent mb-4">MOHRE Licensed</h3>
            <p className="text-foreground mb-2 font-semibold">Ministry of Human Resources & Emiratisation</p>
            <p className="text-muted-foreground mb-4">
              Legally authorized and verified by UAE government to provide private tuition. License reflects compliance with all regulations and professional standards.
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

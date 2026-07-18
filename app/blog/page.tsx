import React from 'react'
import Link from 'next/link'
import { Section, SectionHeader } from '@/components/ui/section'

export const metadata = {
  title: 'Mathematics Blog | Tips, Strategies & Study Guides',
  description: 'Read articles about mathematics tutoring, exam prep tips, and learning strategies.',
}

const blogPosts = [
  {
    id: '1',
    slug: 'how-to-ace-ib-mathematics',
    title: 'How to Ace IB Mathematics: Complete Strategy Guide',
    excerpt: 'Learn proven strategies for scoring 6-7 in IB Mathematics. From concept mastery to exam techniques.',
    date: 'June 2024',
    readTime: '8 min',
  },
  {
    id: '2',
    slug: 'igcse-common-mistakes',
    title: 'Top 10 Common IGCSE Mathematics Mistakes (And How to Avoid Them)',
    excerpt: 'Discover the most common errors students make in IGCSE exams and proven strategies to prevent them.',
    date: 'May 2024',
    readTime: '6 min',
  },
  {
    id: '3',
    slug: 'a-level-calculus',
    title: 'Mastering A-Level Calculus: A Step-by-Step Guide',
    excerpt: 'Complete guide to understanding calculus concepts from differentiation to integration.',
    date: 'April 2024',
    readTime: '10 min',
  },
]

export default function BlogPage() {
  return (
    <>
      <Section className="pt-20">
        <SectionHeader
          title="Mathematics Blog"
          subtitle="Tips, strategies, and insights for mathematical success"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <div className="p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer">
                <div className="mb-4">
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{post.readTime} read</span>
                  <span className="text-primary font-semibold">Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-blue-50">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Mathematics Insights & Learning Tips
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Stay updated with the latest insights on mathematics education, exam preparation strategies, and effective learning techniques.
          </p>
          <p className="text-foreground leading-relaxed">
            Whether you&apos;re preparing for IB exams, IGCSE boards, A-Level challenges, or CBSE assessments, you&apos;ll find practical tips and comprehensive guides to enhance your mathematical understanding and performance.
          </p>
        </div>
      </Section>
    </>
  )
}

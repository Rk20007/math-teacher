'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

const CREDENTIALS = [
  '25+ Years Experience',
  'MOHRE Licensed',
  'NIT Trichy Graduate',
]

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-5.5rem)] flex items-center pt-20 md:pt-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-navy-orange opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 space-y-7">
            {/* Credential chips */}
            <div className="flex flex-wrap gap-2">
              {CREDENTIALS.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-xs font-semibold text-accent"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2.5} />
                  {c}
                </span>
              ))}
            </div>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.12] tracking-tight text-foreground">
                <span className="gradient-text">Maths Tutor in Dubai</span>
                <br />
                for IB, IGCSE, A-Level &amp; CBSE
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Hi, I&rsquo;m <span className="font-semibold text-foreground">Anil Kataria</span> &mdash; a MOHRE-licensed
                mathematics specialist and NIT Trichy graduate with 25+ years of experience helping 500+ students
                master maths through personalized one-to-one coaching.
              </p>
            </div>

            {/* Specialist line */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold text-foreground">
              <span className="text-muted-foreground">Specialist in</span>
              {['IB', 'IGCSE', 'A-Level', 'CBSE'].map((b, i) => (
                <React.Fragment key={b}>
                  {i > 0 && <span className="text-accent">&bull;</span>}
                  <span>{b}</span>
                </React.Fragment>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold text-center hover:shadow-lg hover:-translate-y-1 smooth-transition"
              >
                Book Free Assessment
              </Link>
              <a
                href="https://wa.me/971569205973"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold text-center hover:bg-primary/5 smooth-transition"
              >
                WhatsApp Me
              </a>
            </div>

            {/* Trust indicators — varied, no repeated success-rate */}
            <div className="flex items-end gap-0 pt-6">
              <div className="pr-6">
                <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">25+</div>
                <p className="text-xs text-muted-foreground font-medium mt-1">Years Experience</p>
              </div>
              <div className="w-px h-9 bg-foreground/10 mx-6" />
              <div className="pr-6">
                <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">500+</div>
                <p className="text-xs text-muted-foreground font-medium mt-1">Students Guided</p>
              </div>
              <div className="w-px h-9 bg-foreground/10 mx-6" />
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent tabular-nums">1-to-1</div>
                <p className="text-xs text-muted-foreground font-medium mt-1">Personalized Coaching</p>
              </div>
            </div>
          </div>

          {/* Right Image — real professional photograph */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Soft glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/15 to-primary/15 rounded-[2.5rem] blur-2xl"></div>

              {/* Photo frame */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl ring-1 ring-primary/10 bg-white">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/images/anil-kataria.jpg"
                    alt="Anil Kataria — Maths Tutor in Dubai for IB, IGCSE, A-Level and CBSE"
                    fill
                    sizes="(max-width: 768px) 90vw, 384px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>

              {/* Floating credential badge */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-[88%] bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center justify-between">
                <div className="text-center">
                  <p className="text-sm font-bold text-primary leading-none">MOHRE</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Licensed</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-sm font-bold text-primary leading-none">NIT Trichy</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Graduate</p>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <p className="text-sm font-bold text-accent leading-none">25+ Yrs</p>
                  <p className="text-[10px] text-muted-foreground mt-1">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

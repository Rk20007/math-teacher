'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Section } from '@/components/ui/section'
import { stats } from '@/data/stats'
import { Award, Users, Heart, MapPin, type LucideIcon } from 'lucide-react'

const icons: LucideIcon[] = [Award, Users, Heart, MapPin]

function AnimatedCounter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !isVisible) {
        setIsVisible(true)
      }
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      setCount(Math.floor(target * progress))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <span ref={ref}>{count}</span>
}

export function Statistics() {
  return (
    <Section darkBg className="relative bg-secondary text-white overflow-hidden">
      {/* Ambient background accents, consistent with hero */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-semibold text-sm">✓</span>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">
              By The Numbers
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2
            className="font-heading text-4xl md:text-5xl font-bold mb-3"
            style={{ color: '#FFFFFF' }}
          >
            Impressive Track Record
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Proven excellence in mathematics education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length]
            return (
              <div
                key={idx}
                className="group relative p-7 bg-white/[0.06] rounded-2xl border border-white/10 text-center hover:bg-white/[0.09] hover:border-accent/40 hover:-translate-y-1 smooth-transition"
              >
                {/* Tick-mark axis line, echoes the hero credential strip */}
                <div className="relative h-px bg-white/15 mb-6">
                  <span className="absolute left-1/2 -translate-x-1/2 -top-1 w-px h-2.5 bg-white/25" />
                </div>

                <div className="w-11 h-11 mx-auto mb-5 rounded-full bg-accent/15 flex items-center justify-center group-hover:bg-accent/25 smooth-transition">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={2} />
                </div>

                <div className="text-3xl md:text-4xl font-bold text-accent mb-2 tabular-nums min-h-[2.75rem] flex items-center justify-center">
                  {stat.text ? (
                    <span className="text-2xl md:text-3xl">{stat.text}</span>
                  ) : (
                    <>
                      {stat.prefix}
                      <AnimatedCounter target={stat.value ?? 0} />
                      {stat.suffix}
                    </>
                  )}
                </div>
                <div className="text-sm font-semibold text-white mb-1.5">
                  {stat.label}
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  {stat.description}
                </p>
              </div>
                   )
          })}
        </div>
      </div>
    </Section>
  )
}
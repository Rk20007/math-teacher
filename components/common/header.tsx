'use client'

import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const WHATSAPP_NUMBER = '971569205973'
const PHONE_DISPLAY = '971 56 920 5973'
const PHONE_HREF = 'tel:+971569205973'
const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_NUMBER}`

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.99.583 3.844 1.588 5.401L2 22l4.735-1.556A9.953 9.953 0 0012.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.2a8.17 8.17 0 01-4.166-1.14l-.299-.177-3.11 1.023 1.037-3.03-.194-.31A8.174 8.174 0 013.8 12c0-4.529 3.672-8.2 8.201-8.2 4.528 0 8.199 3.671 8.199 8.2 0 4.528-3.671 8.2-8.199 8.2z"/>
    </svg>
  )
}

const CURRICULUMS = ['IB', 'IGCSE', 'A-Level', 'CBSE', 'Other']

type BookingForm = {
  name: string
  email: string
  phone: string
  curriculum: string
  message: string
}

const EMPTY_FORM: BookingForm = { name: '', email: '', phone: '', curriculum: '', message: '' }

function BookNowModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState<BookingForm>(EMPTY_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof BookingForm, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (open) {
      setForm(EMPTY_FORM)
      setErrors({})
      setSubmitted(false)
    }
  }, [open])

  if (!open || !mounted) return null

  const update = (field: keyof BookingForm) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof BookingForm, string>> = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!/^[0-9+\s-]{7,}$/.test(form.phone)) next.phone = 'Enter a valid phone number'
    if (!form.curriculum) next.curriculum = 'Select a curriculum'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    // No backend wired up yet — sends the booking details straight to WhatsApp.
    // Swap this block for a fetch() call to your API/email service once one exists.
    const lines = [
      'New demo booking request:',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Curriculum: ${form.curriculum}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean)
    window.open(`${WHATSAPP_HREF}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank')

    setSubmitted(true)
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] grid place-items-center px-4 py-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-now-title"
    >
      <div
        className="fixed inset-0 bg-foreground/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl p-6 md:p-8 my-auto">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-full smooth-transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <WhatsAppIcon className="w-7 h-7 text-accent" />
            </div>
            <h2 className="font-heading text-xl font-bold text-foreground mb-2">
              Demo requested
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              We've opened WhatsApp with your details pre-filled. Hit send there and we'll confirm your slot shortly.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-full hover:shadow-lg smooth-transition"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <h2 id="book-now-title" className="font-heading text-2xl font-bold text-foreground mb-2">
              Book your free demo
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and we'll get back to you to confirm a time.
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="bn-name" className="block text-xs font-semibold text-foreground mb-1.5">
                  Full name
                </label>
                <input
                  id="bn-name"
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent smooth-transition"
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="bn-email" className="block text-xs font-semibold text-foreground mb-1.5">
                  Email
                </label>
                <input
                  id="bn-email"
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent smooth-transition"
                />
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="bn-phone" className="block text-xs font-semibold text-foreground mb-1.5">
                  Phone number
                </label>
                <input
                  id="bn-phone"
                  type="tel"
                  value={form.phone}
                  onChange={update('phone')}
                  placeholder="+971 5X XXX XXXX"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent smooth-transition"
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label htmlFor="bn-curriculum" className="block text-xs font-semibold text-foreground mb-1.5">
                  Curriculum
                </label>
                <select
                  id="bn-curriculum"
                  value={form.curriculum}
                  onChange={update('curriculum')}
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent smooth-transition"
                >
                  <option value="">Select curriculum</option>
                  {CURRICULUMS.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.curriculum && <p className="text-xs text-red-500 mt-1">{errors.curriculum}</p>}
              </div>

              <div>
                <label htmlFor="bn-message" className="block text-xs font-semibold text-foreground mb-1.5">
                  Message <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="bn-message"
                  value={form.message}
                  onChange={update('message')}
                  rows={3}
                  placeholder="Grade, topics, or preferred timing"
                  className="w-full px-4 py-2.5 text-sm rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent smooth-transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:-translate-y-0.5 smooth-transition"
              >
                Book Demo
              </button>

              <p className="text-xs text-center text-muted-foreground">
                Prefer to talk directly? <a href={PHONE_HREF} className="text-accent font-semibold">Call {PHONE_DISPLAY}</a>
              </p>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bookNowOpen, setBookNowOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = bookNowOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [bookNowOpen])

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Certificates', href: '/certificates' },
    { label: 'Courses', href: '/courses' },
    { label: 'Results', href: '/results' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'glassmorphism shadow-lg'
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — fixed height container, image scales proportionally inside it */}
          <Link href="/" className="flex-shrink-0 flex items-center h-10 md:h-12 transition-transform hover:scale-105">
            <div className="relative h-full w-auto aspect-[140/50]">
              <Image
                src="/images/logo.png"
                alt="Anil Kataria Mathematics Tutor"
                fill
                sizes="160px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center gap-8 flex-1 mx-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-foreground hover:text-accent relative group transition-colors"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full smooth-transition"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-2 md:gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3 md:px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            {/* Brochure download moved to floating contacts and footer */}
            <button
              onClick={() => setBookNowOpen(true)}
              className="px-4 md:px-6 py-2.5 text-sm font-semibold bg-accent text-accent-foreground rounded-full hover:shadow-lg hover:-translate-y-0.5 smooth-transition"
            >
              Book Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:bg-muted rounded-full smooth-transition"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pb-4 space-y-2 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-semibold text-foreground hover:text-accent hover:bg-muted/50 rounded-lg smooth-transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-primary-foreground smooth-transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Contact
            </a>
          </nav>
        )}
      </div>

      <BookNowModal open={bookNowOpen} onClose={() => setBookNowOpen(false)} />
    </header>
  )
}
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin } from 'lucide-react'

function Linkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  )
}

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.12 1.38C1.36 2.67.95 3.34.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.12-1.38.66-.66 1.07-1.33 1.38-2.12.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.12A5.9 5.9 0 0019.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zm0 10.16a4 4 0 110-8 4 4 0 010 8zm7.85-10.4a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  )
}

// ── Update these with the exact business details ────────────────────────────
const MOHRE_LICENSE = 'Registered private teacher — MOHRE Permit No. XXXXXXXX'
const LINKEDIN_URL = 'https://www.linkedin.com/'
const INSTAGRAM_URL = 'https://www.instagram.com/'
const SERVICE_AREAS = ['Dubai', 'Sharjah', 'Online (worldwide)']
const ADDRESS = 'Al Barsha 1, near Mall of the Emirates, Dubai, UAE'
// Google Maps embed centred on Al Barsha 1 / Mall of the Emirates.
const MAP_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.8398944882397!2d55.20069207516072!3d25.115813577763475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bbffb65e88d%3A0x2e7625e106c23331!2sMall%20Of%20Emirates%20-%20Al%20Barsha%20Rd%20-%20near%20The%20-%20Al%20Barsha%20First%20-%20Al%20Barsha%20-%20Dubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2sin!4v1784229369027!5m2!1sen!2sin'
// ────────────────────────────────────────────────────────────────────────────

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <Image
              src="/images/branding/header-logo.png"
              alt="Anil Kataria — Maths Tutor Dubai"
              width={80}
              height={80}
              className="w-20 h-auto mb-4"
            />
            <h4 className="font-bold text-lg mb-2">Anil Kataria</h4>
            <p className="text-sm text-white/80 mb-4">
              Maths Tutor in Dubai for IB, IGCSE, A-Level &amp; CBSE. 25+ years of teaching excellence.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-2">
              <Phone className="w-4 h-4" />
              <a href="tel:+971569205973" className="hover:text-white transition-colors">+971 56 920 5973</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
              <Mail className="w-4 h-4" />
              <a href="mailto:anil@v3maths.com" className="hover:text-white transition-colors">anil@v3maths.com</a>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/courses" className="hover:text-white transition-colors">IB Maths Tutor Dubai</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">IGCSE Maths Tutor Dubai</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">A-Level Maths Tutor Dubai</Link></li>
              <li><Link href="/courses" className="hover:text-white transition-colors">CBSE Maths Tutor Dubai</Link></li>
            </ul>

            <h4 className="font-bold text-lg mb-3 mt-6">Serving</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources + Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/certificates" className="hover:text-white transition-colors">Certifications</Link></li>
              <li>
                <a href="/images/Anil_Kataria_Mathematics_Brochure.pdf" download className="hover:text-white transition-colors">
                  Download Brochure
                </a>
              </li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>

            <h4 className="font-bold text-lg mb-3 mt-6">Legal</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Location / Map */}
          <div>
            <h4 className="font-bold text-lg mb-4">Find Us</h4>
            <div className="rounded-xl overflow-hidden border border-white/15 mb-3">
              <iframe
                title="Anil Kataria Maths Tutor — Al Barsha 1, near Mall of the Emirates, Dubai"
                src={MAP_EMBED_SRC}
                width="100%"
                height="160"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ border: 0 }}
              />
            </div>
            <div className="flex items-start gap-2 text-xs text-white/80 mb-2">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{ADDRESS}</span>
            </div>
            <p className="text-xs text-white/60">{MOHRE_LICENSE}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-white/80 mb-4 md:mb-0">
              © {currentYear} Anil Kataria. All rights reserved.
            </p>
            <p className="text-sm text-white/80">
              Building Strong Minds. Achieving Excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

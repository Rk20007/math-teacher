"use client"

import React from 'react'
import { Phone } from 'lucide-react'

const WHATSAPP_NUMBER = '971569205973'
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

export function FloatingContacts() {
  return (
    <div className="fixed right-0 bottom-32 z-50 flex flex-col items-end pr-2 space-y-3">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 bg-green-600 text-white rounded-l-full shadow-lg hover:scale-105 transform-gpu transition"
      >
        <WhatsAppIcon className="w-5 h-5" />
      </a>

      <a
        href={PHONE_HREF}
        aria-label="Call"
        className="flex items-center justify-center w-12 h-12 bg-accent text-accent-foreground rounded-l-full shadow-lg hover:scale-105 transform-gpu transition"
      >
        <Phone className="w-5 h-5" />
      </a>
    </div>
  )
}

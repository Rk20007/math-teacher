import React from 'react'
import Image from 'next/image'
import { Section, SectionHeader } from '@/components/ui/section'
import { CheckCircle2, ShieldCheck } from 'lucide-react'

export function CredentialsShowcase() {
  const credentials = [
    'MOHRE Licensed Private Teacher',
    'Ministry of Human Resources & Emiratisation Approved',
    'NIT Trichy Graduate',
    'UAE Government Verified',
  ]

  return (
    <Section className="bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30">
            <span className="text-accent font-semibold text-sm">✓</span>
            <p className="text-xs font-semibold tracking-wide text-accent uppercase">
              Verified Credentials
            </p>
          </div>
        </div>

        <SectionHeader
          title="Officially Verified Credentials"
          subtitle="Legally authorized and government approved to teach privately in the UAE"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center mt-12">
          {/* Credentials List */}
          <div className="space-y-8">
            <div className="space-y-5">
              {credentials.map((credential, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-primary/10 shadow-sm"
                >
                  <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-accent" strokeWidth={2} />
                  </div>
                  <p className="font-semibold text-foreground">{credential}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-accent/10 border border-accent/30 rounded-xl">
              <p className="text-sm text-foreground">
                <span className="font-semibold">Work Permit Number:</span> MB317741654AE
              </p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                Legally verified by the Ministry of Human Resources &amp; Emiratisation, ensuring compliance with all UAE education regulations.
              </p>
            </div>
          </div>

          {/* License Document Card */}
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-primary to-secondary">
              <Image
                src="/images/branding/mohre-license.png"
                alt="MOHRE Private Teacher Work Permit - Ministry of Human Resources & Emiratisation"
                fill
                className="object-cover"
              />
              {/* Fallback mark, sits behind the image and only shows if the image fails to load */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <ShieldCheck className="w-20 h-20 text-white/20" strokeWidth={1.5} />
              </div>
              {/* Bottom gradient keeps the badge legible over any photo */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-semibold shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Verified &amp; Current
              </div>
            </div>
            {/* Corner accent, subtle document-frame detail */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-4 border-l-4 border-accent rounded-tl-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </Section>
  )
}
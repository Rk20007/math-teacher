import React from 'react'
import { Section } from '@/components/ui/section'

export const metadata = {
  title: 'Privacy Policy | Anil Kataria Mathematics Tutoring',
}

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-20 max-w-3xl">
      <h1 className="text-4xl font-bold font-heading mb-8">Privacy Policy</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">1. Introduction</h2>
          <p>
            This Privacy Policy describes how Anil Kataria Mathematics Tutoring collects, uses, and protects your personal information when you visit our website or use our services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
            <li>Name and contact information (email, phone, address)</li>
            <li>Student information related to tutoring services</li>
            <li>Usage data and website analytics</li>
            <li>Any other information you voluntarily provide</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
            <li>Provide tutoring services and respond to inquiries</li>
            <li>Improve our website and services</li>
            <li>Send updates and communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">5. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: anil@v3maths.com
            <br />
            Phone: +971 56 920 5973
          </p>
        </div>
      </div>
    </Section>
  )
}

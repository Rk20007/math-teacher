import React from 'react'
import { Section } from '@/components/ui/section'

export const metadata = {
  title: 'Terms & Conditions | Anil Kataria Mathematics Tutoring',
}

export default function TermsAndConditionsPage() {
  return (
    <Section className="pt-20 max-w-3xl">
      <h1 className="text-4xl font-bold font-heading mb-8">Terms & Conditions</h1>

      <div className="prose prose-sm max-w-none space-y-6 text-muted-foreground">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">1. Services</h2>
          <p>
            Anil Kataria provides mathematics tutoring services for IB, IGCSE, A-Level, and CBSE curricula. Services are provided on an individual consultation basis.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">2. Session Policy</h2>
          <p>
            Sessions should be scheduled in advance. Cancellations must be made at least 24 hours before the scheduled session. Cancellations made within 24 hours may be subject to charges.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">3. Payment Terms</h2>
          <p>Payment for tutoring services should be made as agreed between Anil Kataria and the client. Different payment arrangements can be discussed on a case-by-case basis.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">4. Student Responsibilities</h2>
          <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
            <li>Attend sessions on time</li>
            <li>Complete assigned homework and practice problems</li>
            <li>Communicate any concerns or challenges</li>
            <li>Maintain professional behavior during sessions</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">5. Academic Results</h2>
          <p>
            While we strive for excellent results, final examination performance depends on multiple factors including student effort, attendance, and individual capability. We do not guarantee specific exam results.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">6. Website Disclaimer</h2>
          <p>
            The information provided on this website is for general informational purposes only. While we ensure accuracy, we do not warrant the completeness or accuracy of the content.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">7. Modifications</h2>
          <p>
            We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting to the website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-foreground mb-3">8. Contact Us</h2>
          <p>
            For questions about these Terms & Conditions:
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

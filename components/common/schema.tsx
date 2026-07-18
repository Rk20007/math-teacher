import React from 'react'
import { generateSchemaMarkup } from '@/lib/seo'

export function LocalBusinessSchema() {
  const schema = generateSchemaMarkup('LocalBusiness', {})
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = generateSchemaMarkup('Organization', {})
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ProfessionalServiceSchema() {
  const schema = generateSchemaMarkup('ProfessionalService', {})
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ArticleSchema(data: {
  title: string
  description: string
  date: string
  image?: string
}) {
  const schema = generateSchemaMarkup('Article', data)
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbSchema(items: { name: string; url: string }[]) {
  const schema = generateSchemaMarkup('BreadcrumbList', { items })
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

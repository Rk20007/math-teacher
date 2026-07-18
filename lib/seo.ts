export function generateSchemaMarkup(type: string, data: any) {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
  }

  switch (type) {
    case 'LocalBusiness':
      return {
        ...baseSchema,
        name: 'Anil Kataria - Mathematics Specialist',
        description:
          'MOHRE-licensed senior mathematics specialist in Dubai with 25+ years of teaching excellence.',
        url: 'https://anilkataria.com',
        telephone: '+971569205973',
        email: 'anil@v3maths.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Dubai',
          addressRegion: 'Dubai',
          addressCountry: 'AE',
        },
        image: 'https://anilkataria.com/images/anil-kataria.jpg',
        priceRange: 'AED 150-500',
        areaServed: ['Dubai', 'Sharjah', 'Online'],
        knows: ['IB Mathematics', 'IGCSE Mathematics', 'A-Level Mathematics', 'CBSE Mathematics'],
      }

    case 'ProfessionalService':
      return {
        ...baseSchema,
        name: 'Mathematics Tutoring Services',
        provider: {
          '@type': 'Person',
          name: 'Anil Kataria',
          url: 'https://anilkataria.com',
          image: 'https://anilkataria.com/images/anil-kataria.jpg',
        },
        serviceType: ['IB Mathematics', 'IGCSE Mathematics', 'A-Level Mathematics', 'CBSE Mathematics'],
        areaServed: {
          '@type': 'City',
          name: 'Dubai',
        },
      }

    case 'Article':
      return {
        ...baseSchema,
        headline: data.title,
        description: data.description,
        image: data.image || 'https://anilkataria.com/images/branding/brochure-main.png',
        datePublished: data.date,
        author: {
          '@type': 'Person',
          name: 'Anil Kataria',
        },
      }

    case 'BreadcrumbList':
      return {
        ...baseSchema,
        itemListElement: data.items.map((item: any, index: number) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: `https://anilkataria.com${item.url}`,
        })),
      }

    case 'Organization':
      return {
        ...baseSchema,
        name: 'Anil Kataria Mathematics Tutoring',
        url: 'https://anilkataria.com',
        logo: 'https://anilkataria.com/images/logo.png',
        description:
          'Maths tutor in Dubai providing expert tutoring in IB, IGCSE, A-Level, and CBSE mathematics.',
        sameAs: [
          'https://www.linkedin.com/',
          'https://www.instagram.com/',
        ],
      }

    default:
      return baseSchema
  }
}

export function generateMetadata(title: string, description: string, path: string = '/') {
  const siteTitle = 'Anil Kataria - Senior Mathematics Specialist in Dubai'
  const fullTitle = title.includes('|') ? title : `${title} | ${siteTitle}`

  return {
    title: fullTitle,
    description,
    canonical: `https://anilkataria.com${path}`,
    openGraph: {
      title: fullTitle,
      description,
      url: `https://anilkataria.com${path}`,
      type: 'website',
      siteName: siteTitle,
      images: [
        {
          url: 'https://anilkataria.com/images/branding/brochure-main.png',
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['https://anilkataria.com/images/og-image.jpg'],
    },
  }
}

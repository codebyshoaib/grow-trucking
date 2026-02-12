/**
 * Schema utility functions for generating JSON-LD structured data
 * These functions help create SEO-friendly schema markup for search engines
 */

export interface OrganizationSchema {
  name: string
  url: string
  logo?: string
  description?: string
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
    areaServed?: string
  }
  sameAs?: string[] // Social media profiles
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
}

export interface FAQSchema {
  question: string
  answer: string
}

export interface ServiceSchema {
  name: string
  description: string
  provider?: {
    name: string
    url?: string
  }
  areaServed?: string
  serviceType?: string
}

export interface ReviewSchema {
  author: {
    name: string
    jobTitle?: string
  }
  reviewBody: string
  reviewRating?: {
    ratingValue: number
    bestRating?: number
  }
  datePublished?: string
}

export interface ArticleSchema {
  headline: string
  description?: string
  image?: string
  datePublished?: string
  dateModified?: string
  author?: {
    name: string
    url?: string
  }
  publisher?: {
    name: string
    logo?: {
      url: string
    }
  }
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(data: OrganizationSchema) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
  }

  if (data.logo) {
    schema.logo = data.logo
  }

  if (data.description) {
    schema.description = data.description
  }

  if (data.contactPoint) {
    schema.contactPoint = {
      "@type": "ContactPoint",
      ...data.contactPoint,
    }
  }

  if (data.sameAs && data.sameAs.length > 0) {
    schema.sameAs = data.sameAs
  }

  if (data.address) {
    schema.address = {
      "@type": "PostalAddress",
      ...data.address,
    }
  }

  return schema
}

/**
 * Generate FAQPage schema
 */
export function generateFAQSchema(faqs: FAQSchema[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

/**
 * Generate Service schema
 */
export function generateServiceSchema(data: ServiceSchema) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
  }

  if (data.provider) {
    schema.provider = {
      "@type": "Organization",
      name: data.provider.name,
      ...(data.provider.url && { url: data.provider.url }),
    }
  }

  if (data.areaServed) {
    schema.areaServed = {
      "@type": "Country",
      name: data.areaServed,
    }
  }

  if (data.serviceType) {
    schema.serviceType = data.serviceType
  }

  return schema
}

/**
 * Generate AggregateRating schema (for reviews)
 */
export function generateReviewSchema(
  reviews: ReviewSchema[], 
  aggregateRating?: { ratingValue: number; reviewCount: number },
  organizationName?: string
) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organizationName || "Grow Trucking",
  }

  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
      bestRating: 5,
      worstRating: 1,
    }
  }

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((review) => {
      const reviewSchema: any = {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.author.name,
          ...(review.author.jobTitle && { jobTitle: review.author.jobTitle }),
        },
        reviewBody: review.reviewBody,
      }

      if (review.reviewRating) {
        reviewSchema.reviewRating = {
          "@type": "Rating",
          ratingValue: review.reviewRating.ratingValue,
          bestRating: review.reviewRating.bestRating || 5,
        }
      }

      if (review.datePublished) {
        reviewSchema.datePublished = review.datePublished
      }

      return reviewSchema
    })
  }

  return schema
}

/**
 * Generate Article schema
 */
export function generateArticleSchema(data: ArticleSchema) {
  const schema: any = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
  }

  if (data.description) {
    schema.description = data.description
  }

  if (data.image) {
    schema.image = data.image
  }

  if (data.datePublished) {
    schema.datePublished = data.datePublished
  }

  if (data.dateModified) {
    schema.dateModified = data.dateModified
  }

  if (data.author) {
    schema.author = {
      "@type": "Person",
      name: data.author.name,
      ...(data.author.url && { url: data.author.url }),
    }
  }

  if (data.publisher) {
    schema.publisher = {
      "@type": "Organization",
      name: data.publisher.name,
      ...(data.publisher.logo && {
        logo: {
          "@type": "ImageObject",
          url: data.publisher.logo.url,
        },
      }),
    }
  }

  return schema
}

/**
 * Generate multiple Service schemas (for services page)
 */
export function generateServicesSchema(services: ServiceSchema[]) {
  return services.map((service) => generateServiceSchema(service))
}

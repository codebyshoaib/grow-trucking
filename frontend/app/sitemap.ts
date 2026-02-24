import { MetadataRoute } from 'next'
import { StateRegistry } from '@/domain/state/state.config'
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'
import { PartnerRegistry } from '@/domain/partner/partner.config'
import { JobRegistry } from '@/domain/job/job.config'
import { allServices } from '@/constants/services.config'

/**
 * Generate XML Sitemap for SEO
 * Includes all static and dynamic routes
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
  const currentDate = new Date()

  // Static pages with high priority
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/states`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/truck-type`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about-our-partners`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/growth-plans`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/checklist`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic state pages
  const statePages: MetadataRoute.Sitemap = StateRegistry.getAll().map((state) => ({
    url: `${baseUrl}/states/${state.slug}-truck-dispatch`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Dynamic lane pages (nested under states)
  const lanePages: MetadataRoute.Sitemap = StateRegistry.getAll().flatMap((state) => {
    if (!state.lanes || state.lanes.length === 0) return []
    return state.lanes.map((lane) => ({
      url: `${baseUrl}/states/${state.slug}/lanes/${lane.slug}-truck-dispatch`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  })

  // Dynamic service pages
  const servicePages: MetadataRoute.Sitemap = allServices.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Dynamic truck type pages
  const truckTypePages: MetadataRoute.Sitemap = TruckTypeRegistry.getAll().map((truckType) => ({
    url: `${baseUrl}/truck-type/${truckType.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic partner pages
  const partnerPages: MetadataRoute.Sitemap = PartnerRegistry.getAll().map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic job/career pages
  const jobPages: MetadataRoute.Sitemap = JobRegistry.getAll().map((job) => ({
    url: `${baseUrl}/careers/${job.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  // Combine all sitemap entries
  return [
    ...staticPages,
    ...statePages,
    ...lanePages,
    ...servicePages,
    ...truckTypePages,
    ...partnerPages,
    ...jobPages,
  ]
}

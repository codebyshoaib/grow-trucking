import { notFound } from 'next/navigation'
import ServicePage from '@/components/pages/service/ServicePage'
import { allServices } from '@/constants/services.config'
import type { Metadata } from 'next'

/**
 * Generate static params for all services
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    return allServices.map((service) => ({
        slug: service.id,
    }))
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const service = allServices.find((s) => s.id === slug)

    if (!service) {
        return {
            title: 'Service Not Found',
        }
    }

    return {
        title: service.metaTitle || `${service.title} | Grow Trucking`,
        description: service.metaDescription || service.description,
        openGraph: {
            title: service.metaTitle || `${service.title} | Grow Trucking`,
            description: service.metaDescription || service.description,
            type: 'website',
        },
        twitter: {
            card: 'summary',
            title: service.metaTitle || `${service.title} | Grow Trucking`,
            description: service.metaDescription || service.description,
        },
    }
}

/**
 * Service Page Route
 * Dynamic route handler for all service pages
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function ServicePageRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const service = allServices.find((s) => s.id === slug)

    if (!service) {
        notFound()
    }

    return <ServicePage service={service} />
}

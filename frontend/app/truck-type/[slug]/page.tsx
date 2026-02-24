import { notFound } from 'next/navigation'
import TruckTypePage from '@/components/pages/truck-type/TruckTypePage'
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'
import type { TruckTypeSlug } from '@/types/truck-type.types'
import type { Metadata } from 'next'

/**
 * Generate static params for all truck types
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    const truckTypes = TruckTypeRegistry.getAll()
    return truckTypes.map((truckType) => ({
        slug: `${truckType.slug}-dispatch-service`,
    }))
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    // Strip "-dispatch-service" suffix from URL parameter
    const actualSlug = slug.replace(/-dispatch-service$/, '')
    const truckType = TruckTypeRegistry.getBySlug(actualSlug as TruckTypeSlug)

    if (!truckType) {
        return {
            title: 'Truck Type Not Found',
        }
    }

    return {
        title: truckType.metaTitle,
        description: truckType.metaDescription,
        keywords: truckType.keywords.join(', '),
        openGraph: {
            title: truckType.metaTitle,
            description: truckType.metaDescription,
            images: [truckType.heroImage],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: truckType.metaTitle,
            description: truckType.metaDescription,
            images: [truckType.heroImage],
        },
    }
}

/**
 * Truck Type Page
 * Dynamic route handler for all truck type pages
 * Uses DDD architecture with domain registry pattern
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function TruckTypePageRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    
    // If URL doesn't have -dispatch-service suffix, redirect to the version with it
    if (!slug.endsWith('-dispatch-service')) {
        const truckType = TruckTypeRegistry.getBySlug(slug as TruckTypeSlug)
        if (truckType) {
            const { redirect } = await import('next/navigation')
            redirect(`/truck-type/${slug}-dispatch-service`)
        }
        notFound()
    }
    
    // Strip "-dispatch-service" suffix from URL parameter
    const actualSlug = slug.replace(/-dispatch-service$/, '')
    const truckType = TruckTypeRegistry.getBySlug(actualSlug as TruckTypeSlug)

    if (!truckType) {
        notFound()
    }

    return <TruckTypePage truckType={truckType} />
}

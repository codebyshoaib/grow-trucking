import { notFound } from 'next/navigation'
import PartnerPage from '@/components/pages/partner/PartnerPage'
import { PartnerRegistry } from '@/domain/partner/partner.config'
import type { PartnerSlug } from '@/types/partner.types'
import type { Metadata } from 'next'

/**
 * Generate static params for all partners
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    const partners = PartnerRegistry.getAll()
    return partners.map((partner) => ({
        slug: partner.slug,
    }))
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const partner = PartnerRegistry.getBySlug(slug as PartnerSlug)

    if (!partner) {
        return {
            title: 'Partner Not Found',
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const canonicalUrl = `${baseUrl}/partners/${slug}`

    return {
        title: partner.metaTitle,
        description: partner.metaDescription,
        keywords: partner.keywords.join(', '),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: partner.metaTitle,
            description: partner.metaDescription,
            type: 'website',
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary',
            title: partner.metaTitle,
            description: partner.metaDescription,
        },
    }
}

/**
 * Partner Page
 * Dynamic route handler for all partner pages
 * Uses DDD architecture with domain registry pattern
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function PartnerPageRoute({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const partner = PartnerRegistry.getBySlug(slug as PartnerSlug)

    if (!partner) {
        notFound()
    }

    return <PartnerPage partner={partner} />
}

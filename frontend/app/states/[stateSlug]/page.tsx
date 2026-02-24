import { notFound } from 'next/navigation'
import StatePage from '@/components/pages/state/StatePage'
import { StateRegistry } from '@/domain/state/state.config'
import type { StateSlug } from '@/types/state.types'
import type { Metadata } from 'next'

/**
 * Generate static params for all states
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    const states = StateRegistry.getAll()
    return states.map((state) => ({
        stateSlug: `${state.slug}-truck-dispatch-service`,
    }))
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ stateSlug: string }> }): Promise<Metadata> {
    const { stateSlug } = await params
    // Strip "-truck-dispatch-service" suffix from URL parameter
    const actualStateSlug = stateSlug.replace(/-truck-dispatch-service$/, '')
    const state = StateRegistry.getBySlug(actualStateSlug as StateSlug)

    if (!state) {
        return {
            title: 'State Not Found',
            description: 'The requested state page could not be found.',
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const canonicalUrl = `${baseUrl}/states/${stateSlug}`

    return {
        title: state.metaTitle,
        description: state.metaDescription,
        keywords: state.keywords.join(', '),
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: state.metaTitle,
            description: state.metaDescription,
            type: 'website',
            images: [state.heroImage],
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: state.metaTitle,
            description: state.metaDescription,
            images: [state.heroImage],
        },
    }
}

/**
 * State Page
 * Dynamic route handler for all state pages
 * Uses DDD architecture with domain registry pattern
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function StatePageRoute({ params }: { params: Promise<{ stateSlug: string }> }) {
    const { stateSlug } = await params

    // If URL doesn't have -truck-dispatch-service suffix, redirect to the version with it
    if (!stateSlug.endsWith('-truck-dispatch-service')) {
        const state = StateRegistry.getBySlug(stateSlug as StateSlug)
        if (state) {
            const { redirect } = await import('next/navigation')
            redirect(`/states/${stateSlug}-truck-dispatch-service`)
        }
        notFound()
    }

    // Strip "-truck-dispatch-service" suffix from URL parameter
    const actualStateSlug = stateSlug.replace(/-truck-dispatch-service$/, '')
    const state = StateRegistry.getBySlug(actualStateSlug as StateSlug)

    if (!state) {
        notFound()
    }

    return <StatePage state={state} />
}

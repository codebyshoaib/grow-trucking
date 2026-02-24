import { notFound } from 'next/navigation'
import LanePage from '@/components/pages/lane/LanePage'
import { LaneRegistry } from '@/domain/lane/lane.config'
import { normalizeLaneSlug } from '@/lib/utils'
import type { StateSlug, LaneSlug } from '@/types/state.types'
import type { Metadata } from 'next'

/**
 * Generate static params for all lanes
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    const states = (await import('@/domain/state/state.config')).StateRegistry.getAll()
    const params: Array<{ stateSlug: string; laneSlug: string }> = []

    states.forEach(state => {
        if (state.lanes && state.lanes.length > 0) {
            state.lanes.forEach(lane => {
                params.push({
                    stateSlug: state.slug,
                    laneSlug: `${lane.slug}-truck-dispatch-service`,
                })
            })
        }
    })

    return params
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ stateSlug: string; laneSlug: string }> }): Promise<Metadata> {
    const { stateSlug, laneSlug } = await params

    // Strip "-truck-dispatch-service" suffix from URL parameter
    const actualLaneSlug = laneSlug.replace(/-truck-dispatch-service$/, '')

    // Use same lookup logic as the page route
    const normalizedSlug = normalizeLaneSlug(actualLaneSlug)
    let lane = LaneRegistry.getBySlug(actualLaneSlug as LaneSlug, stateSlug as StateSlug)

    if (!lane) {
        lane = LaneRegistry.getBySlug(normalizedSlug as LaneSlug, stateSlug as StateSlug)
    }

    if (!lane) {
        const { StateRegistry } = await import('@/domain/state/state.config')
        const state = StateRegistry.getBySlug(stateSlug as StateSlug)
        if (state && state.lanes) {
            lane = state.lanes.find(l => {
                const lNormalized = normalizeLaneSlug(l.slug)
                return l.slug === actualLaneSlug || l.slug === normalizedSlug || lNormalized === normalizedSlug
            }) || null
        }
    }

    if (!lane) {
        return {
            title: 'Lane Not Found',
            description: 'The requested lane page could not be found.',
        }
    }

    return {
        title: lane.metaTitle,
        description: lane.metaDescription,
        keywords: lane.keywords.join(', '),
        openGraph: {
            title: lane.metaTitle,
            description: lane.metaDescription,
            type: 'website',
            images: lane.heroImage ? [lane.heroImage] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: lane.metaTitle,
            description: lane.metaDescription,
            images: lane.heroImage ? [lane.heroImage] : [],
        },
    }
}

/**
 * Lane Page
 * Dynamic route handler for all lane pages
 * Uses DDD architecture with domain registry pattern
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function LanePageRoute({ params }: { params: Promise<{ stateSlug: string; laneSlug: string }> }) {
    const { stateSlug, laneSlug } = await params

    // If URL doesn't have -truck-dispatch-service suffix, redirect to the version with it
    if (!laneSlug.endsWith('-truck-dispatch-service')) {
        const { StateRegistry } = await import('@/domain/state/state.config')
        const state = StateRegistry.getBySlug(stateSlug as StateSlug)
        if (state && state.lanes) {
            const lane = state.lanes.find(l => l.slug === laneSlug || `${l.slug}-truck-dispatch` === laneSlug)
            if (lane) {
                const { redirect } = await import('next/navigation')
                redirect(`/states/${stateSlug}/lanes/${lane.slug}-truck-dispatch-service`)
            }
        }
        notFound()
    }

    // Strip "-truck-dispatch-service" suffix from URL parameter
    const actualLaneSlug = laneSlug.replace(/-truck-dispatch-service$/, '')

    // Normalize the slug to handle double dashes (SEO-friendly)
    const normalizedSlug = normalizeLaneSlug(actualLaneSlug)

    // Try to get lane by original slug first (since JSON files may have double dashes)
    let lane = LaneRegistry.getBySlug(actualLaneSlug as LaneSlug, stateSlug as StateSlug)

    // If not found, try normalized slug (for future single-dash slugs)
    if (!lane) {
        lane = LaneRegistry.getBySlug(normalizedSlug as LaneSlug, stateSlug as StateSlug)
    }

    // If still not found, search through state lanes with normalization
    if (!lane) {
        const { StateRegistry } = await import('@/domain/state/state.config')
        const state = StateRegistry.getBySlug(stateSlug as StateSlug)

        if (state && state.lanes) {
            // Try to find by matching slug variations (normalize both for comparison)
            lane = state.lanes.find(l => {
                const lNormalized = normalizeLaneSlug(l.slug)
                return l.slug === actualLaneSlug || // Exact match
                    l.slug === normalizedSlug || // Normalized match
                    lNormalized === normalizedSlug || // Both normalized match
                    normalizeLaneSlug(l.displayName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')) === normalizedSlug // Display name match
            }) || null
        }
    }

    if (!lane) {
        notFound()
    }

    return <LanePage lane={lane} />
}

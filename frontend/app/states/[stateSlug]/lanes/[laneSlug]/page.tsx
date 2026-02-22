import { notFound } from 'next/navigation'
import LanePage from '@/components/pages/lane/LanePage'
import { LaneRegistry } from '@/domain/lane/lane.config'
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
                    laneSlug: lane.slug,
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
    const lane = LaneRegistry.getBySlug(laneSlug as LaneSlug, stateSlug as StateSlug)

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
    const lane = LaneRegistry.getBySlug(laneSlug as LaneSlug, stateSlug as StateSlug)

    if (!lane) {
        notFound()
    }

    return <LanePage lane={lane} />
}

'use client'

import React from 'react'
import LaneHero from './LaneHero'
import LaneOverview from './LaneOverview'
import LaneFreightTypes from './LaneFreightTypes'
import LaneChallenges from './LaneChallenges'
import LaneBenefits from './LaneBenefits'
import LaneProTips from './LaneProTips'
import LaneCommodities from './LaneCommodities'
import LaneSeasonalBehavior from './LaneSeasonalBehavior'
import LaneRateNegotiation from './LaneRateNegotiation'
import LaneBackhaulStrategy from './LaneBackhaulStrategy'
import LaneDispatcherTips from './LaneDispatcherTips'
import LaneCTA from './LaneCTA'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateServiceSchema } from '@/lib/schema'
import type { LaneEntity } from '@/types/state.types'

interface LanePageProps {
    lane: LaneEntity
}

/**
 * LanePage Component
 * 
 * Professional lane page template following master content structure.
 * Organized into logical content groups for optimal user experience.
 */
export default function LanePage({ lane }: LanePageProps) {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'

    const serviceSchema = generateServiceSchema({
        name: `${lane.displayName} Freight Lane Dispatch Service`,
        description: lane.metaDescription,
        provider: {
            name: 'Grow Trucking',
            url: siteUrl,
        },
        areaServed: lane.origin && lane.destination ? `${lane.origin} to ${lane.destination}` : 'US',
        serviceType: 'Freight Lane Dispatch',
    })

    return (
        <>
            <SchemaScript schema={serviceSchema} />
            <main className="min-h-screen bg-white">
                {/* Hero Section */}
                <LaneHero lane={lane} />

                {/* Introduction & Overview */}
                <LaneOverview lane={lane} />

                {/* Lane Information Sections - Each with Unique Design */}
                <LaneFreightTypes lane={lane} />
                <LaneChallenges lane={lane} />



                {/* Market Intelligence */}
                <LaneCommodities lane={lane} />
                <LaneSeasonalBehavior lane={lane} />

                {/* Strategic Guidance */}
                <LaneRateNegotiation lane={lane} />
                <LaneBackhaulStrategy lane={lane} />

                {/* Expert Insights */}
                <LaneDispatcherTips lane={lane} />

                {/* Call to Action */}
                <LaneCTA lane={lane} />
            </main>
        </>
    )
}

'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import type { StateEntity } from '@/types/state.types'

interface StateHighDemandLanesProps {
    state: StateEntity
}

/**
 * StateHighDemandLanes Component
 * Presentation layer: High-demand lanes section for state pages
 * Uses actual lane entities to ensure proper slug matching
 */
export default function StateHighDemandLanes({ state }: StateHighDemandLanesProps) {
    // Use state.lanes directly (which have proper slugs) instead of highDemandLanes
    // Take top 15 lanes as per master content structure
    const displayLanes = state.lanes?.slice(0, 15) || []

    if (displayLanes.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    HIGH-DEMAND LANES
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Popular Freight Lanes in {state.displayName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {displayLanes.map((lane) => {
                        return (
                            <Link
                                key={lane.id}
                                href={`/states/${state.slug}-truck-dispatch-service/lanes/${lane.slug}-truck-dispatch-service`}
                                className="p-4 sm:p-6 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-lg transition-all"
                            >
                                <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                                    {lane.displayName}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-700 mb-3">
                                    {lane.description || lane.longDescription}
                                </p>
                                {lane.averageRate && (
                                    <p className="text-sm font-semibold text-primary">
                                        Rate: {lane.averageRate}
                                    </p>
                                )}
                                {lane.distance && (
                                    <p className="text-sm text-gray-600">
                                        Distance: {lane.distance}
                                    </p>
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

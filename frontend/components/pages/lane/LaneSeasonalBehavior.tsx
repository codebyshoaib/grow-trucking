'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Calendar, TrendingDown, TrendingUp, AlertTriangle } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneSeasonalBehaviorProps {
    lane: LaneEntity
}

/**
 * LaneSeasonalBehavior Component
 * Presentation layer: Seasonal behavior section for lane pages
 * Section 5: Seasonal Behavior
 */
export default function LaneSeasonalBehavior({ lane }: LaneSeasonalBehaviorProps) {
    const peakSeasons = lane.peakSeasons || []

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    SEASONAL ANALYSIS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Seasonal Behavior: {lane.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Analysis of seasonal patterns, peak periods, and risk factors for the {lane.displayName} lane. Understanding these patterns helps optimize booking timing and rate negotiation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                    {/* Q1 Analysis */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingDown className="w-6 h-6 text-blue-600" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Q1 (Jan-Mar): Slow Period?
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific Q1 data to LaneEntity */}
                            Q1 typically sees slower freight volumes as businesses recover from holiday seasons. However, this can vary by lane and commodity type.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Lower volume but potentially better rates due to less competition</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Weather can impact routes and create rate spikes</span>
                            </li>
                        </ul>
                    </div>

                    {/* Q4 Analysis */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Q4 (Oct-Dec): Peak Period?
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific Q4 data to LaneEntity */}
                            Q4 often sees peak activity with holiday shipping, retail preparation, and year-end business activity driving high demand.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Highest volume and premium rates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Increased competition for loads</span>
                            </li>
                        </ul>
                    </div>

                    {/* Produce Season */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Calendar className="w-6 h-6 text-yellow-600" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Produce Season?
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific produce season data to LaneEntity */}
                            {lane.origin && lane.destination && (
                                <>
                                    Routes connecting agricultural regions may see produce season activity. Monitor for refrigerated load opportunities during peak harvest periods.
                                </>
                            )}
                        </p>
                        {peakSeasons.length > 0 && (
                            <ul className="space-y-2">
                                {peakSeasons.map((season, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <span className="text-primary font-bold">•</span>
                                        <span className="text-sm text-gray-700">{season}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Hurricane Risk */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-red-600" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Hurricane Risk?
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific hurricane risk data to LaneEntity */}
                            {lane.origin && lane.destination && (
                                <>
                                    Routes through coastal regions (June-November) may be affected by hurricane season. Monitor weather forecasts and be prepared for route disruptions and rate volatility.
                                </>
                            )}
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Monitor forecasts during hurricane season</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Rate spikes possible before/during storms</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Seasonal Summary */}
                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        Seasonal Strategy Summary
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        Understanding seasonal patterns on the {lane.displayName} lane helps optimize your booking strategy. Plan ahead for peak periods, position yourself for seasonal commodities, and monitor weather patterns that could impact rates and routes.
                    </p>
                </div>
            </div>
        </section>
    )
}

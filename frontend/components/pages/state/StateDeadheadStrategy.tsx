'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Route, TrendingDown, MapPin, Target } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateDeadheadStrategyProps {
    state: StateEntity
}

/**
 * StateDeadheadStrategy Component
 * Presentation layer: Deadhead strategy section for state pages
 * Section 11: Deadhead Strategy Section
 */
export default function StateDeadheadStrategy({ state }: StateDeadheadStrategyProps) {
    const highDemandLanes = state.highDemandLanes || []

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    OPTIMIZATION STRATEGY
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Deadhead Strategy for {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Strategic guidance on minimizing deadhead miles and optimizing backhaul opportunities. Understanding outbound vs. inbound patterns is crucial for profitability.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 mb-8 sm:mb-10">
                    {/* Outbound % */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingDown className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Outbound Loads
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific outbound percentage data to StateEntity */}
                            {state.displayName} typically sees strong outbound freight volumes, especially from major distribution hubs. Outbound loads from {state.displayName} often command premium rates due to high demand.
                        </p>
                        <div className="bg-primary/5 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-900 mb-2">Outbound Characteristics:</p>
                            <ul className="space-y-1">
                                <li className="text-xs text-gray-700">• High volume from distribution centers</li>
                                <li className="text-xs text-gray-700">• Premium rates for outbound freight</li>
                                <li className="text-xs text-gray-700">• Strong demand year-round</li>
                            </ul>
                        </div>
                    </div>

                    {/* Inbound % */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Route className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Inbound Loads
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific inbound percentage data to StateEntity */}
                            Inbound loads to {state.displayName} vary by region and industry. Major metropolitan areas and distribution centers typically have consistent inbound freight.
                        </p>
                        <div className="bg-primary/5 rounded-lg p-4">
                            <p className="text-sm font-semibold text-gray-900 mb-2">Inbound Characteristics:</p>
                            <ul className="space-y-1">
                                <li className="text-xs text-gray-700">• Varies by destination region</li>
                                <li className="text-xs text-gray-700">• Strong in metro areas</li>
                                <li className="text-xs text-gray-700">• Seasonal variations apply</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Best Backhaul Lanes */}
                {highDemandLanes.length > 0 && (
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 mb-8 sm:mb-10">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Best Backhaul Lanes
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Top lanes for finding profitable return loads from {state.displayName}:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {highDemandLanes.slice(0, 6).map((lane, index) => (
                                <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                    <p className="text-sm font-semibold text-secondary mb-1">{lane.name}</p>
                                    {lane.description && (
                                        <p className="text-xs text-gray-600 mb-2">{lane.description}</p>
                                    )}
                                    {lane.rate && (
                                        <p className="text-xs text-primary font-semibold">Rate: {lane.rate}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Positioning Strategies */}
                <div className="bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-primary" />
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                            Positioning Strategies
                        </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">
                        Strategic positioning to minimize deadhead and maximize backhaul opportunities:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <div>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Position Near Distribution Hubs</p>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Stay close to major distribution centers in {state.majorCities?.[0] || 'key cities'} for quick access to outbound loads and backhaul opportunities.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <div>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Time Your Arrivals</p>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Arrive at destination areas during peak booking times (typically early morning) to secure better rates and backhaul options.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <div>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Leverage High-Volume Corridors</p>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Position along high-traffic freight corridors to catch both outbound and inbound opportunities.
                                </p>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <div>
                                <p className="text-sm sm:text-base font-semibold text-gray-900 mb-1">Use Load Boards Strategically</p>
                                <p className="text-xs sm:text-sm text-gray-700">
                                    Monitor load boards before arriving at destination to pre-book backhaul loads and minimize wait time.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

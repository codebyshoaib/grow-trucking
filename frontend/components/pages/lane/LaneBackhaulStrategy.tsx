'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Route, TrendingDown, MapPin, Target } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneBackhaulStrategyProps {
    lane: LaneEntity
}

/**
 * LaneBackhaulStrategy Component
 * Presentation layer: Backhaul strategy section for lane pages
 * Section 7: Backhaul Strategy - Return load optimization
 */
export default function LaneBackhaulStrategy({ lane }: LaneBackhaulStrategyProps) {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    BACKHAUL OPTIMIZATION
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Backhaul Strategy: {lane.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Strategic guidance on minimizing deadhead and finding profitable return loads on the {lane.displayName} lane. Understanding backhaul opportunities is crucial for maximizing profitability.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                    {/* Best Return Cities */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Best Return Cities
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific return cities data to LaneEntity */}
                            {lane.destination && (
                                <>
                                    From {lane.destination}, the best return opportunities typically come from:
                                </>
                            )}
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Major distribution hubs near destination</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Industrial areas with consistent freight</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Port cities (if applicable)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Metro areas with high freight volume</span>
                            </li>
                        </ul>
                    </div>

                    {/* Deadhead Risk % */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <TrendingDown className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Deadhead Risk %
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific deadhead risk percentage to LaneEntity */}
                            Deadhead risk varies based on destination market characteristics:
                        </p>
                        <div className="space-y-3">
                            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                                <p className="text-xs font-semibold text-green-900 mb-1">Low Risk (0-20%)</p>
                                <p className="text-xs text-green-700">Major metro areas with high freight volume</p>
                            </div>
                            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                                <p className="text-xs font-semibold text-yellow-900 mb-1">Moderate Risk (21-40%)</p>
                                <p className="text-xs text-yellow-700">Secondary markets with decent volume</p>
                            </div>
                            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                                <p className="text-xs font-semibold text-orange-900 mb-1">High Risk (41%+)</p>
                                <p className="text-xs text-orange-700">Rural or low-volume destinations</p>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Routes */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Route className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Alternative Routes
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Consider alternative routing to improve backhaul opportunities:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Slight detours to high-volume areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Positioning near distribution centers</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Multi-stop routes for better rates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Connecting to adjacent high-demand lanes</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Backhaul Optimization Tips */}
                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Target className="w-6 h-6 text-primary" />
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                            Backhaul Optimization Tips
                        </h3>
                    </div>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Pre-Book When Possible:</strong> Start looking for backhaul loads before you arrive at destination. Many brokers post loads 1-2 days in advance.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Position Strategically:</strong> If you must deadhead, position yourself in areas with high freight volume rather than remote locations.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Consider Partial Loads:</strong> Sometimes accepting a partial load or LTL freight can be more profitable than deadheading empty.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Build Destination Relationships:</strong> Develop relationships with brokers and shippers at your destination to improve backhaul opportunities.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

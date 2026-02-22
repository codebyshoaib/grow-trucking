'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { StateEntity } from '@/types/state.types'

interface StateMarketInfoProps {
    state: StateEntity
}

/**
 * StateMarketInfo Component
 * Presentation layer: Market information section for state pages
 */
export default function StateMarketInfo({ state }: StateMarketInfoProps) {
    if (!state.marketOverview && !state.averageRates && !state.marketTrends) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    MARKET INFORMATION
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    {state.displayName} Freight Market
                </h2>

                {state.marketOverview && (
                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        {state.marketOverview}
                    </p>
                )}

                {state.averageRates && (
                    <div className="mb-6 sm:mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4">
                            Average Rates
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                            {state.averageRates}
                        </p>
                    </div>
                )}

                {state.marketTrends && state.marketTrends.length > 0 && (
                    <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-3 sm:mb-4">
                            Market Trends
                        </h3>
                        <ul className="space-y-2 sm:space-y-3">
                            {state.marketTrends.map((trend, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-primary font-bold">•</span>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        {trend}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    )
}

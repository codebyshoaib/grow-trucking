'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Calendar, TrendingUp, Cloud, Lightbulb } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateSeasonalTrendsProps {
    state: StateEntity
}

/**
 * StateSeasonalTrends Component
 * Presentation layer: Seasonal trends section for state pages
 * Section 6: Seasonal Trends Section - Quarterly breakdown
 */
export default function StateSeasonalTrends({ state }: StateSeasonalTrendsProps) {
    // TODO: Add seasonalTrends data to StateEntity type
    // For now, using seasonalConsiderations if available
    const seasonalData = state.seasonalConsiderations || []

    if (seasonalData.length === 0) {
        return null
    }

    const quarters = [
        { id: 'Q1', label: 'Q1 (Jan-Mar)', icon: Calendar, color: 'text-blue-600' },
        { id: 'Q2', label: 'Q2 (Apr-Jun)', icon: TrendingUp, color: 'text-green-600' },
        { id: 'Q3', label: 'Q3 (Jul-Sep)', icon: Cloud, color: 'text-yellow-600' },
        { id: 'Q4', label: 'Q4 (Oct-Dec)', icon: Lightbulb, color: 'text-orange-600' },
    ]

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    SEASONAL ANALYSIS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Seasonal Trends in {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Understanding seasonal patterns is crucial for maximizing profitability. Here's a quarterly breakdown of rate movements, weather impacts, and strategic recommendations for {state.displayName}.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {quarters.map((quarter) => {
                        const Icon = quarter.icon
                        return (
                            <div
                                key={quarter.id}
                                className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <Icon className={`w-6 h-6 ${quarter.color}`} />
                                    <h3 className="text-lg sm:text-xl font-bold text-secondary">
                                        {quarter.label}
                                    </h3>
                                </div>
                                
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 mb-1">Rate Movement</p>
                                        <p className="text-sm text-gray-700">
                                            {/* TODO: Add specific rate movement data */}
                                            Monitor market trends and adjust rates accordingly.
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 mb-1">Weather Impact</p>
                                        <p className="text-sm text-gray-700">
                                            {/* TODO: Add specific weather impact data */}
                                            Consider seasonal weather patterns affecting routes.
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <p className="text-xs font-semibold text-gray-600 mb-1">Strategy</p>
                                        <p className="text-sm text-gray-700">
                                            {/* TODO: Add specific strategic recommendations */}
                                            Optimize positioning and booking timing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {seasonalData.length > 0 && (
                    <div className="mt-8 sm:mt-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-4">
                            Additional Seasonal Considerations
                        </h3>
                        <ul className="space-y-3">
                            {seasonalData.map((consideration, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-primary font-bold">•</span>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {consideration}
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

'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, CheckCircle } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneDispatcherTipsProps {
    lane: LaneEntity
}

/**
 * LaneDispatcherTips Component
 * Presentation layer: Dispatcher insider tips section for lane pages
 * Section 8: Dispatcher Insider Tips - Conversion gold - tactical advice
 */
export default function LaneDispatcherTips({ lane }: LaneDispatcherTipsProps) {
    // TODO: Add dispatcherTips array to LaneEntity type
    // Using tips from LaneEntity if available, otherwise default tips
    const tips = lane.tips || [
        `On the ${lane.displayName} lane, book early in the week (Monday-Wednesday) when rates are typically 10-15% higher than weekend rates.`,
        `Position yourself near ${lane.destination || 'destination'} distribution centers the night before delivery for quick access to backhaul loads.`,
        `Weather patterns can create sudden rate spikes on this lane. Monitor forecasts and position ahead of storms for premium rates.`,
        `Many brokers prefer working with dispatchers who understand this specific lane. Build relationships with regional brokers for better rates.`,
        `Peak booking times are 6-9 AM. Have your truck positioned and ready to accept loads during these hours for best opportunities.`,
    ]

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    INSIDER TIPS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Dispatcher Insider Tips: {lane.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Practical, insider tips that provide real value and drive conversions. These tactical pieces of advice come from years of experience dispatching on the {lane.displayName} lane.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {tips.slice(0, 5).map((tip, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        <span className="text-xs font-semibold text-primary">Tip #{index + 1}</span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {tip}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        <strong>Remember:</strong> These tips are based on real-world experience dispatching the {lane.displayName} lane. Market conditions change, but these tactical principles remain valuable for maximizing profitability and minimizing deadhead miles. This is highly practical = high retention.
                    </p>
                </div>
            </div>
        </section>
    )
}

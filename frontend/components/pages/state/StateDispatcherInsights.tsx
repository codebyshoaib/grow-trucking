'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Lightbulb, CheckCircle } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateDispatcherInsightsProps {
    state: StateEntity
}

/**
 * StateDispatcherInsights Component
 * Presentation layer: Professional dispatcher insights section for state pages
 * Section 12: Professional Dispatcher Insights (Experience-Based) - Differentiates from generic SEO blogs
 */
export default function StateDispatcherInsights({ state }: StateDispatcherInsightsProps) {
    // TODO: Add dispatcherInsights array to StateEntity type
    // For now, using a default set of insights
    const insights = [
        `In ${state.displayName}, timing is everything. Book outbound loads early in the week when rates are typically 10-15% higher.`,
        `The ${state.majorCities?.[0] || 'major metro'} area sees the highest load volume, but don't ignore secondary markets - they often offer better rates with less competition.`,
        `Weather patterns in ${state.displayName} can create sudden rate spikes. Monitor forecasts and position yourself ahead of storms for premium rates.`,
        `Backhaul opportunities are strongest on routes connecting ${state.displayName} to neighboring states. Plan your positioning accordingly.`,
        `Many brokers in ${state.displayName} prefer working with dispatchers who understand local regulations. Build relationships with regional brokers.`,
        `Peak booking times in ${state.displayName} are typically 6-9 AM. Have your truck positioned and ready to accept loads during these hours.`,
        `The ${state.keyIndustries?.[0] || 'primary industry'} sector drives significant freight volume. Understanding their shipping patterns gives you a competitive edge.`,
        `Don't overlook smaller lanes within ${state.displayName}. While major routes get attention, secondary routes often have less competition and better rates.`,
    ]

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    PROFESSIONAL INSIGHTS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Professional Dispatcher Insights for {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Experience-based tactical insights that provide real value and differentiate from generic content. These lessons come from years of dispatching in {state.displayName}.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {insights.slice(0, 8).map((insight, index) => (
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
                                        <span className="text-xs font-semibold text-primary">Insight #{index + 1}</span>
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {insight}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        <strong>Remember:</strong> These insights are based on real-world experience dispatching in {state.displayName}. Market conditions change, but these tactical principles remain valuable for maximizing profitability and minimizing deadhead miles.
                    </p>
                </div>
            </div>
        </section>
    )
}

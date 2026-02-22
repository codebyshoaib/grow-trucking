'use client'

import React from 'react'
import type { LaneEntity } from '@/types/state.types'

interface LaneDetailsProps {
    lane: LaneEntity
}

/**
 * LaneDetails Component
 * Professional two-column layout for lane statistics and information
 */
export default function LaneDetails({ lane }: LaneDetailsProps) {
    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column */}
                        <div className="space-y-8 lg:space-y-10">
                            {/* Freight Types */}
                            {lane.freightTypes && lane.freightTypes.length > 0 && (
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                            FREIGHT TYPES
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        Common Freight Types
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {lane.freightTypes.map((type, index) => (
                                            <li key={index} className="flex items-start gap-2.5">
                                                <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{type}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Challenges */}
                            {lane.challenges && lane.challenges.length > 0 && (
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                            CHALLENGES
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        Common Challenges
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {lane.challenges.map((challenge, index) => (
                                            <li key={index} className="flex items-start gap-2.5">
                                                <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{challenge}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Right Column */}
                        <div className="space-y-8 lg:space-y-10">
                            {/* Benefits */}
                            {lane.benefits && lane.benefits.length > 0 && (
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                            BENEFITS
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        Key Benefits
                                    </h3>
                                    <ul className="space-y-2.5">
                                        {lane.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-2.5">
                                                <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Tips */}
                            {lane.tips && lane.tips.length > 0 && (
                                <div>
                                    <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                        <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                            TIPS
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        Pro Tips
                                    </h3>
                                    <ul className="space-y-3">
                                        {lane.tips.map((tip, index) => (
                                            <li key={index} className="flex items-start gap-2.5">
                                                <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

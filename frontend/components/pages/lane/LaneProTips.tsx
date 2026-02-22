'use client'

import React from 'react'
import { Lightbulb, Quote } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneProTipsProps {
    lane: LaneEntity
}

/**
 * LaneProTips Component
 * Expert tips section with quote-style design
 */
export default function LaneProTips({ lane }: LaneProTipsProps) {
    const tips = lane.tips || []

    if (tips.length === 0) return null

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    {/* Badge */}
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                TIPS
                            </span>
                        </div>
                    </div>

                    {/* Heading with Icon */}
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                            Pro Tips
                        </h3>
                    </div>

                    {/* Tips List with Quote Style */}
                    <div className="space-y-4 sm:space-y-6">
                        {tips.map((tip, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-xl p-6 sm:p-8 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 opacity-10">
                                    <Quote className="w-12 h-12 sm:w-16 sm:h-16 text-primary" />
                                </div>
                                <div className="relative flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary text-sm">
                                        {index + 1}
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 pt-1">
                                        {tip}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

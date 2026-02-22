'use client'

import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneBenefitsProps {
    lane: LaneEntity
}

/**
 * LaneBenefits Component
 * Positive, success-oriented design for benefits section
 */
export default function LaneBenefits({ lane }: LaneBenefitsProps) {
    const benefits = lane.benefits || []

    if (benefits.length === 0) return null

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-primary/5 via-white to-primary/5">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="mb-4 sm:mb-6">
                        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary border-0">
                            <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                                BENEFITS
                            </span>
                        </div>
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-6 sm:mb-8">
                        Key Benefits
                    </h3>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-3 sm:gap-4 p-5 sm:p-6 bg-white rounded-xl border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all group"
                            >
                                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-white transition-colors" />
                                </div>
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1 pt-1">
                                    {benefit}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

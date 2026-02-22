'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { StateEntity } from '@/types/state.types'

interface StateChallengesProps {
    state: StateEntity
}

/**
 * StateChallenges Component
 * Presentation layer: Challenges section for state pages
 */
export default function StateChallenges({ state }: StateChallengesProps) {
    if (!state.challenges || state.challenges.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    CHALLENGES & SOLUTIONS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Common Challenges in {state.displayName}
                </h2>

                <div className="space-y-4 sm:space-y-6">
                    {state.challenges.map((challenge, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 bg-gray-50 rounded-lg border-l-4 border-primary"
                        >
                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                {challenge}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

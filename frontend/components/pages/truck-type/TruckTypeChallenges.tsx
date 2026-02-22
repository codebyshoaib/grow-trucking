'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeChallengesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeChallenges Component
 * Displays common challenges and how we solve them
 */
export default function TruckTypeChallenges({ truckType }: TruckTypeChallengesProps) {
    if (!truckType.challenges || truckType.challenges.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        CHALLENGES WE SOLVE
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Common {truckType.displayName} Challenges We Solve
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                        {truckType.challenges.map((challenge, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg p-5 sm:p-6 border border-gray-200"
                            >
                                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-100 flex items-center justify-center">
                                        <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                            Challenge: {challenge.challenge}
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 sm:gap-4 ml-11 sm:ml-14">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-100 flex items-center justify-center">
                                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                            <span className="font-semibold text-secondary">Solution: </span>
                                            {challenge.solution}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

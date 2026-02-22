'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeDispatchProcessProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeDispatchProcess Component
 * Displays the dispatch process steps
 */
export default function TruckTypeDispatchProcess({ truckType }: TruckTypeDispatchProcessProps) {
    if (!truckType.dispatchProcess || truckType.dispatchProcess.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        DISPATCH PROCESS
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        {truckType.displayName} Dispatch Process
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                        {truckType.dispatchProcess.map((step, index) => (
                            <div
                                key={index}
                                className="flex gap-4 sm:gap-6 bg-gray-50 rounded-lg p-5 sm:p-6 border-l-4 border-primary"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg sm:text-xl">
                                        {step.step}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-secondary mb-2 sm:mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                        {step.description}
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

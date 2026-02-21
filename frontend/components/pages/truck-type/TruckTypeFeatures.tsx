'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2 } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeFeaturesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeFeatures Component
 * Presentation layer: Features section - vertical list style with numbered items
 * Distinct visual treatment from Benefits section
 */
export default function TruckTypeFeatures({ truckType }: TruckTypeFeaturesProps) {
    return (
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">KEY FEATURES</Badge>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3 sm:mb-4 md:mb-6 leading-[1.1] sm:leading-tight px-2">
                        What We Provide
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
                        Core services and capabilities for your {truckType.name.toLowerCase()} dispatch needs
                    </p>
                </div>

                {/* Features Grid - Two Column Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {truckType.features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-50 to-white rounded-lg sm:rounded-xl border-l-4 border-primary hover:shadow-lg transition-all duration-300"
                        >
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary text-white flex items-center justify-center font-black text-base sm:text-lg md:text-xl">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 flex-wrap">
                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black break-words">
                                        {feature.title}
                                    </h3>
                                </div>
                                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed pl-6 sm:pl-8">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

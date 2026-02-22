'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeSpecificationsProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeSpecifications Component
 * Displays specifications and requirements for the truck type
 */
export default function TruckTypeSpecifications({ truckType }: TruckTypeSpecificationsProps) {
    if (!truckType.specifications || truckType.specifications.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        SPECIFICATIONS & REQUIREMENTS
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        {truckType.displayName} Specifications & Requirements
                    </h2>

                    {truckType.specificationsDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {truckType.specificationsDescription}
                        </p>
                    )}

                    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                        <ul className="space-y-3 sm:space-y-4">
                            {truckType.specifications.map((spec, index) => (
                                <li key={index} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200 last:border-b-0">
                                    <span className="font-semibold text-secondary text-sm sm:text-base min-w-[180px] sm:min-w-[200px]">
                                        {spec.label}:
                                    </span>
                                    <span className="text-gray-700 text-sm sm:text-base flex-1">
                                        {spec.value}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

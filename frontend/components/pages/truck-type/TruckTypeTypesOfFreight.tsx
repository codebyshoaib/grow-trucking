'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Package } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeTypesOfFreightProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeTypesOfFreight Component
 * Displays types of freight we dispatch
 */
export default function TruckTypeTypesOfFreight({ truckType }: TruckTypeTypesOfFreightProps) {
    if (!truckType.typesOfFreight || truckType.typesOfFreight.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        FREIGHT TYPES
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Types of Freight We Dispatch
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        Our {truckType.name.toLowerCase()} dispatch services cover a wide range of commodities:
                    </p>

                    <div className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8">
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {truckType.typesOfFreight.map((freight, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 mt-0.5">
                                        <Package className="w-5 h-5 text-primary" />
                                    </div>
                                    <p className="text-sm sm:text-base text-gray-700 flex-1">
                                        {freight}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

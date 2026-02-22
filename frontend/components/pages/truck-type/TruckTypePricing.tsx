'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypePricingProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypePricing Component
 * Displays pricing information
 */
export default function TruckTypePricing({ truckType }: TruckTypePricingProps) {
    if (!truckType.pricing) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        PRICING
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        {truckType.displayName} Dispatch Pricing
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        Transparent, performance-based pricing with no hidden fees:
                    </p>

                    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
                        <div className="space-y-4 sm:space-y-6">
                            {truckType.pricing.standardRate && (
                                <div className="pb-4 sm:pb-6 border-b border-gray-200">
                                    <p className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                        Standard Dispatch:
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                                        {truckType.pricing.standardRate}
                                    </p>
                                </div>
                            )}

                            {truckType.pricing.premiumRate && (
                                <div className="pb-4 sm:pb-6 border-b border-gray-200">
                                    <p className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                        Premium Dispatch:
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                                        {truckType.pricing.premiumRate}
                                    </p>
                                </div>
                            )}

                            {truckType.pricing.setupFee && (
                                <div className="pb-4 sm:pb-6 border-b border-gray-200">
                                    <p className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                        Setup Fee:
                                    </p>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700">
                                        {truckType.pricing.setupFee}
                                    </p>
                                </div>
                            )}

                            {truckType.pricing.included && truckType.pricing.included.length > 0 && (
                                <div>
                                    <p className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-3 sm:mb-4">
                                        What's Included:
                                    </p>
                                    <ul className="space-y-2 sm:space-y-3">
                                        {truckType.pricing.included.map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <div className="flex-shrink-0 mt-0.5">
                                                    <Check className="w-5 h-5 text-primary" />
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-700 flex-1">
                                                    {item}
                                                </p>
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

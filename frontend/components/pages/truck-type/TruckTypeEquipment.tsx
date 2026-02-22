'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Wrench, Star } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeEquipmentProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeEquipment Component
 * Displays essential and premium equipment requirements
 */
export default function TruckTypeEquipment({ truckType }: TruckTypeEquipmentProps) {
    const hasEquipment = 
        (truckType.equipmentEssential && truckType.equipmentEssential.length > 0) ||
        (truckType.equipmentPremium && truckType.equipmentPremium.length > 0)

    if (!hasEquipment) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        EQUIPMENT REQUIREMENTS
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Equipment Requirements & Recommendations
                    </h2>

                    {truckType.equipmentDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {truckType.equipmentDescription}
                        </p>
                    )}

                    {truckType.equipmentEssential && truckType.equipmentEssential.length > 0 && (
                        <div className="mb-8 sm:mb-10">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary mb-4 sm:mb-6 flex items-center gap-2">
                                <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                Essential Equipment
                            </h3>
                            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
                                <ul className="space-y-3 sm:space-y-4">
                                    {truckType.equipmentEssential.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200 last:border-b-0">
                                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                                            <div className="flex-1">
                                                <p className="text-sm sm:text-base font-medium text-secondary mb-1">
                                                    {item.name}
                                                </p>
                                                {item.description && (
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        {item.description}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {truckType.equipmentPremium && truckType.equipmentPremium.length > 0 && (
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-secondary mb-4 sm:mb-6 flex items-center gap-2">
                                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                Premium Add-Ons (Higher Rates)
                            </h3>
                            <div className="bg-white rounded-lg shadow-md p-5 sm:p-6">
                                <ul className="space-y-3 sm:space-y-4">
                                    {truckType.equipmentPremium.map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 sm:gap-4 pb-3 sm:pb-4 border-b border-gray-200 last:border-b-0">
                                            <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2" />
                                            <div className="flex-1">
                                                <p className="text-sm sm:text-base font-medium text-secondary mb-1">
                                                    {item.name}
                                                </p>
                                                {item.description && (
                                                    <p className="text-xs sm:text-sm text-gray-600 mb-1">
                                                        {item.description}
                                                    </p>
                                                )}
                                                {item.ratePremium && (
                                                    <p className="text-xs sm:text-sm font-semibold text-primary">
                                                        {item.ratePremium}
                                                    </p>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

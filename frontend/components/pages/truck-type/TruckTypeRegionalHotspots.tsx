'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { MapPin, DollarSign } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeRegionalHotspotsProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeRegionalHotspots Component
 * Displays regional hotspots with earning potential
 */
export default function TruckTypeRegionalHotspots({ truckType }: TruckTypeRegionalHotspotsProps) {
    if (!truckType.regionalHotspots || truckType.regionalHotspots.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        REGIONAL HOTSPOTS
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Regional {truckType.displayName} Hotspots
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                        These areas offer exceptional {truckType.name.toLowerCase()} opportunities:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {truckType.regionalHotspots.map((hotspot, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-5 sm:p-6 border-l-4 border-primary"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                            {hotspot.location}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                                            {hotspot.description}
                                        </p>
                                        {hotspot.weeklyRevenue && (
                                            <div className="mt-3 pt-3 border-t border-gray-200 flex items-center gap-2">
                                                <DollarSign className="w-4 h-4 text-primary" />
                                                <p className="text-xs sm:text-sm font-semibold text-primary">
                                                    {hotspot.weeklyRevenue}
                                                </p>
                                            </div>
                                        )}
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

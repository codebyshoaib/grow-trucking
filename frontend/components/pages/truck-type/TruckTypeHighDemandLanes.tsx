'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { MapPin } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeHighDemandLanesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeHighDemandLanes Component
 * Displays high-demand lanes and opportunities
 */
export default function TruckTypeHighDemandLanes({ truckType }: TruckTypeHighDemandLanesProps) {
    if (!truckType.highDemandLanes || truckType.highDemandLanes.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        HIGH-DEMAND LANES
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        High-Demand {truckType.displayName} Lanes
                    </h2>

                    {truckType.highDemandLanesDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {truckType.highDemandLanesDescription}
                        </p>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {truckType.highDemandLanes.map((lane, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-5 sm:p-6 border-l-4 border-primary hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-3 sm:gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-2">
                                            {lane.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-2">
                                            {lane.description}
                                        </p>
                                        {(lane.rate || lane.distance) && (
                                            <div className="mt-3 pt-3 border-t border-gray-200">
                                                {lane.rate && (
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        <span className="font-semibold">Rate: </span>
                                                        {lane.rate}
                                                    </p>
                                                )}
                                                {lane.distance && (
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        <span className="font-semibold">Distance: </span>
                                                        {lane.distance}
                                                    </p>
                                                )}
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

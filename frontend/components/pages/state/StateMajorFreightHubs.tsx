'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { MapPin, Ship, Train, Building2 } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateMajorFreightHubsProps {
    state: StateEntity
}

/**
 * StateMajorFreightHubs Component
 * Presentation layer: Major freight hubs section for state pages
 * Section 7: Major Freight Hubs Section
 */
export default function StateMajorFreightHubs({ state }: StateMajorFreightHubsProps) {
    const majorCities = state.majorCities || []

    if (majorCities.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    FREIGHT INFRASTRUCTURE
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Major Freight Hubs in {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    {state.displayName} is home to critical freight infrastructure including distribution cities, ports, intermodal centers, and border crossings that drive the state's logistics network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Distribution Cities */}
                    {majorCities.length > 0 && (
                        <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <Building2 className="w-6 h-6 text-primary" />
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                    Distribution Cities
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {majorCities.map((city, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                                        <span className="text-sm sm:text-base text-gray-700">{city}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Ports Section - TODO: Add port data to StateEntity */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <Ship className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Ports
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">
                            {/* TODO: Add port details to StateEntity */}
                            {state.displayName} features major ports that handle significant freight volumes. Check specific port details for your route.
                        </p>
                    </div>

                    {/* Intermodal Centers - TODO: Add intermodal data to StateEntity */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200 hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <Train className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Intermodal Centers
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700">
                            {/* TODO: Add intermodal center data to StateEntity */}
                            Strategic intermodal facilities connect rail and truck freight across {state.displayName}.
                        </p>
                    </div>
                </div>

                {/* Border Crossings - TODO: Add border crossing data for applicable states */}
                {(state.slug === 'texas' || state.slug === 'california' || state.slug === 'arizona' || state.slug === 'new-mexico') && (
                    <div className="mt-8 sm:mt-10 bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                            Border Crossings
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                            {/* TODO: Add border crossing details to StateEntity */}
                            {state.displayName} has important border crossing points. Ensure proper documentation and compliance for international freight.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Fuel, MapPin, AlertCircle, Navigation } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateTruckParkingFuelProps {
    state: StateEntity
}

/**
 * StateTruckParkingFuel Component
 * Presentation layer: Truck parking and fuel section for state pages
 * Section 8: Truck Parking & Fuel Section - Builds driver trust
 */
export default function StateTruckParkingFuel({ state }: StateTruckParkingFuelProps) {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    DRIVER RESOURCES
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Truck Parking & Fuel in {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Practical information about truck parking and fuel availability to help you plan your routes through {state.displayName}. This builds driver trust and ensures smooth operations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                    {/* Major Truck Stops */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <MapPin className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Major Truck Stops
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific truck stop locations to StateEntity */}
                            {state.displayName} has numerous major truck stops along major highways including I-10, I-20, I-40, I-70, and other key corridors. Popular chains like Pilot, Love's, TA, and Flying J provide comprehensive services.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Full-service facilities with showers, restaurants, and maintenance</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">24/7 fuel availability at major locations</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Convenient locations near major freight corridors</span>
                            </li>
                        </ul>
                    </div>

                    {/* Parking Difficulty */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Parking Difficulty
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific parking difficulty data to StateEntity */}
                            Parking availability varies by region and time of day. Urban areas and major metropolitan regions typically have higher demand, especially during peak hours (evenings and early mornings).
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Plan ahead for parking in metro areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Consider rest areas as backup options</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <span className="text-sm text-gray-700">Use parking apps to find available spots</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Strategic Positioning Advice */}
                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Navigation className="w-6 h-6 text-primary" />
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                            Strategic Positioning Advice
                        </h3>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">
                        Position yourself strategically to maximize load opportunities and minimize deadhead miles:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Major Distribution Centers:</strong> Position near major distribution hubs in {state.majorCities?.[0] || 'key cities'} for quick access to outbound loads.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>High-Volume Corridors:</strong> Stay near high-traffic freight corridors to catch backhaul opportunities.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Timing:</strong> Arrive at destination areas during peak booking times (typically early morning) for best rate opportunities.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

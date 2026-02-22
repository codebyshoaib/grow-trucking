'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Check, PhoneCall, MapPin, Clock, DollarSign } from 'lucide-react'
import Link from 'next/link'
import type { LaneEntity } from '@/types/state.types'

interface LaneOverviewProps {
    lane: LaneEntity
}

/**
 * LaneOverview Component
 * Two-column layout with text on left and image on right
 */
export default function LaneOverview({ lane }: LaneOverviewProps) {
    // Default image for all lanes - can be customized later
    const overviewImage = lane.contentImage || lane.heroImage || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg'

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="mb-4 sm:mb-6">
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                                    <span className="text-primary text-xs sm:text-sm font-bold tracking-wider uppercase">
                                        LANE INFORMATION
                                    </span>
                                </div>
                            </div>

                            {/* Main Heading */}
                            <h2 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-secondary mb-4 sm:mb-6 leading-tight">
                                {lane.displayName}
                            </h2>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                {lane.longDescription || lane.description}
                            </p>

                            {/* Route Information Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                                {lane.origin && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Origin</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.origin}</p>
                                        </div>
                                    </div>
                                )}
                                {lane.destination && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Destination</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.destination}</p>
                                        </div>
                                    </div>
                                )}
                                {lane.distance && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Distance</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.distance}</p>
                                        </div>
                                    </div>
                                )}
                                {lane.averageTransitTime && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Transit Time</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.averageTransitTime}</p>
                                        </div>
                                    </div>
                                )}
                                {lane.averageRate && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Average Rate</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.averageRate}</p>
                                        </div>
                                    </div>
                                )}
                                {lane.ratePerMile && (
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wide mb-1">Rate per Mile</p>
                                            <p className="text-base sm:text-lg font-semibold text-gray-900">{lane.ratePerMile}</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Key Features */}
                            {lane.keyFeatures && lane.keyFeatures.length > 0 && (
                                <div className="mb-6 sm:mb-8">
                                    <ul className="space-y-3 sm:space-y-4">
                                        {lane.keyFeatures.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 sm:gap-4">
                                                <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                                </div>
                                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed flex-1">
                                                    {feature}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* CTA Button */}
                            <Button
                                asChild
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                            >
                                <Link href="/contact" className="flex items-center gap-2">
                                    <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Contact Us Now
                                </Link>
                            </Button>
                        </div>

                        {/* Right Column - Image */}
                        <div className="order-1 lg:order-2">
                            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src={overviewImage}
                                    alt={`${lane.displayName} Freight Lane Overview`}
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                {/* Decorative accent */}
                                <div className="absolute top-0 right-0 w-20 h-1 bg-primary rounded-l-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

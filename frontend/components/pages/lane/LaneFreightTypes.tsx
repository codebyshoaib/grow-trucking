'use client'

import React from 'react'
import Image from 'next/image'
import { Package } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneFreightTypesProps {
    lane: LaneEntity
}

/**
 * LaneFreightTypes Component
 * Two-column layout with text on left and 2x2 image grid on right
 */
export default function LaneFreightTypes({ lane }: LaneFreightTypesProps) {
    const freightTypes = lane.freightTypes || []

    if (freightTypes.length === 0) return null

    // Default freight-related images for 2x2 grid
    const freightImages = [
        'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg',
        'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg',
        'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg',
        'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg',
    ]

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="order-2 lg:order-1">
                            {/* Badge */}
                            <div className="mb-4 sm:mb-6">
                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary border-0">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                    <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                                        FREIGHT TYPES
                                    </span>
                                </div>
                            </div>

                            {/* Heading */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6">
                                Common Freight Types
                            </h3>

                            {/* Description */}
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                                Understanding the types of freight that move on this lane helps you prepare your equipment and optimize your operations for maximum profitability.
                            </p>

                            {/* Freight Types List */}
                            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                {freightTypes.slice(0, 6).map((type, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <Package className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Column - 2x2 Image Grid */}
                        <div className="order-1 lg:order-2">
                            <div className="grid grid-cols-2 gap-4 sm:gap-6">
                                {freightImages.map((imageUrl, index) => (
                                    <div
                                        key={index}
                                        className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                                    >
                                        <Image
                                            src={imageUrl}
                                            alt={`Freight type ${index + 1}`}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                            sizes="(max-width: 1024px) 50vw, 25vw"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

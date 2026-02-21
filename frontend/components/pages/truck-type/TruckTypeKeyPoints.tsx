'use client'

import React from 'react'
import { Check } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeKeyPointsProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeKeyPoints Component
 * Presentation layer: Key points section with checkmark list
 * Clean, scannable list format
 */
export default function TruckTypeKeyPoints({ truckType }: TruckTypeKeyPointsProps) {
    return (
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border border-gray-100">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-black mb-5 sm:mb-6 md:mb-8 text-center px-2">
                            What We Offer
                        </h2>

                        <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                            {truckType.keyPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 sm:gap-4 md:gap-5 group"
                                >
                                    {/* Check Icon */}
                                    <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                                        <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                                    </div>

                                    {/* Text */}
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed flex-1">
                                        {point}
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

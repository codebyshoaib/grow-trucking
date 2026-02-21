'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeBenefitsProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeBenefits Component
 * Presentation layer: Benefits section - card grid with distinct visual treatment
 * Different from Features section for better UX
 */
export default function TruckTypeBenefits({ truckType }: TruckTypeBenefitsProps) {
    // Icon mapping for visual variety
    const icons = [TrendingUp, Clock, DollarSign, Shield]

    return (
        <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Section Header */}
                <div className="text-center mb-8 sm:mb-12 md:mb-16">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">BENEFITS OF {truckType.displayName.toUpperCase()} DISPATCH</Badge>
                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight px-2">
                        Why Choose Us
                    </h2>
                </div>

                {/* Benefits Grid - Two Column Layout (Reversed Direction) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {truckType.benefits.map((benefit, index) => {
                        const Icon = icons[index % icons.length]
                        // Reverse column order: even indices (0,2) go to right column, odd (1,3) go to left
                        // This creates: Row 1: [2, 1], Row 2: [4, 3]
                        const gridOrder = index % 2 === 0 ? index + 2 : index
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 overflow-hidden"
                                style={{ order: gridOrder }}
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary/5 rounded-full -mr-12 -mt-12 sm:-mr-16 sm:-mt-16 group-hover:bg-primary/10 transition-colors" />

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="mb-4 sm:mb-6">
                                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-3 sm:mb-4 group-hover:text-primary transition-colors leading-tight">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                                        {benefit.description}
                                    </p>

                                    {/* Arrow Indicator */}
                                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

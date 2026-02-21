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

                {/* Benefits Grid - Card Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {truckType.benefits.map((benefit, index) => {
                        const Icon = icons[index % icons.length]
                        return (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                            >
                                {/* Card Content - Flex Layout */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                    {/* Left Side - Text Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Title */}
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black mb-2 sm:mb-3 leading-tight">
                                            {benefit.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>

                                    {/* Right Side - Icon */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                                        </div>
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

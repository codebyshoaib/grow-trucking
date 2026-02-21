'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Globe, Settings, Briefcase, PhoneCall, Check, Zap, Route, Shield, Clock, Truck, MapPin, TrendingUp, Users } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
interface TruckTypeFeaturesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeFeatures Component
 * Presentation layer: Features section with content on left and image on right
 * Includes features with icons
 */
export default function TruckTypeFeatures({ truckType }: TruckTypeFeaturesProps) {
    // Icon mapping for features - cycle through available icons
    const availableIcons = [Globe, Settings, Briefcase, Zap, Route, Shield, Clock, Truck, MapPin, TrendingUp, Users]

    const getFeatureIcon = (index: number) => {
        return availableIcons[index % availableIcons.length]
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Features Section - Content on left and image on right */}
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Section - Content */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                            {truckType.displayName.toUpperCase()}
                        </Badge>

                        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                            KEY FEATURES
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                            {truckType.keyFeaturesDescription}
                        </p>

                        {/* Features with Icons */}
                        {truckType.features && truckType.features.length > 0 && (
                            <div className="mb-6 sm:mb-8">

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                    {truckType.features.map((feature, index) => {
                                        const IconComponent = getFeatureIcon(index)
                                        return (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 sm:gap-4 group"
                                            >
                                                {/* Feature Icon */}
                                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary" />
                                                </div>

                                                {/* Feature Content */}
                                                <div className="flex-1">
                                                    <h4 className="text-base sm:text-lg md:text-xl font-semibold text-secondary mb-1 sm:mb-2">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Section - Image */}
                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                                <Image
                                    src={truckType.contentImage}
                                    alt={truckType.displayName}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    width={800}
                                    height={600}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                />
                                {/* Subtle overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

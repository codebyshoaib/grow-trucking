'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeHeroProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeHero Component
 * Presentation layer: Simplified hero section for truck type pages
 * Displays badge, heading, and subheading only
 */
export default function TruckTypeHero({ truckType }: TruckTypeHeroProps) {
    return (
        <section className="relative bg-secondary min-h-[40vh] sm:min-h-[50vh] lg:min-h-[80vh] w-full overflow-hidden flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={truckType.heroImage}
                    alt={`${truckType.displayName} - ${truckType.name}`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 flex flex-col gap-6git a sm:gap-4 md:gap-6 w-full">
                <div className="max-w-4xl w-full">
                    {/* Badge */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <Badge className="text-xs sm:text-sm">
                            {truckType.name.toUpperCase()} DISPATCH
                        </Badge>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-black text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl leading-[1.1] sm:leading-tight">
                        {truckType.tagline}
                    </h1>

                    {/* Subheading */}
                    {truckType.subtitle && (
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium tracking-wide leading-relaxed">
                            {truckType.subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import type { LaneEntity } from '@/types/state.types'

interface LaneHeroProps {
    lane: LaneEntity
}

/**
 * LaneHero Component
 * Presentation layer: Hero section for lane pages
 */
export default function LaneHero({ lane }: LaneHeroProps) {
    const heroImage = lane.heroImage || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg'

    return (
        <section className="relative bg-secondary min-h-[70vh] sm:min-h-[70vh] lg:min-h-[80vh] w-full overflow-hidden flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-12 sm:py-16 md:py-20 lg:py-24">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={heroImage}
                    alt={`${lane.displayName} Freight Lane`}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 flex flex-col gap-6 sm:gap-4 md:gap-6 w-full">
                <div className="max-w-4xl w-full">
                    {/* Badge */}
                    <div className="mb-3 sm:mb-4 md:mb-6">
                        <Badge className="text-xs sm:text-sm">
                            FREIGHT LANE
                        </Badge>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase font-black text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-2xl leading-[1.1] sm:leading-tight">
                        {lane.displayName}
                    </h1>

                    {/* Subheading */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium tracking-wide leading-relaxed">
                        {lane.description}
                    </p>
                </div>
            </div>
        </section>
    )
}

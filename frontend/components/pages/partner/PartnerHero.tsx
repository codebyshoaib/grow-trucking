'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { PartnerEntity } from '@/types/partner.types'
import Image from 'next/image'

interface PartnerHeroProps {
    partner: PartnerEntity
}

/**
 * Get banner image path for a partner slug
 * Maps partner slugs to their corresponding banner images in /we-work-with folder
 */
function getPartnerBannerImage(slug: string): string {
    const imageMap: Record<string, string> = {
        'c-h-robinson-worldwide-inc': '/we-work-with/growtrucking-truck-dispatching-with-ch-robinson.webp',
        'j-b-hunt-transport-services-inc': '/we-work-with/growtrucking-truck-dispatching-with-j-b-hunt.webp',
        'total-quality-logistics-tql': '/we-work-with/growtrucking-truck-dispatching-with-tql.webp',
        'echo-global-logistics': '/we-work-with/growtrucking-truck-dispatching-with-echo-global-logistics.webp',
        'rxo': '/we-work-with/growtrucking-truck-dispatching-with-rxo.webp',
        'landstar-system': '/we-work-with/growtrucking-truck-dispatching-with-land-start-systems.webp',
        'uber-freight': '/we-work-with/growtrucking-truck-dispatching-with-uber-freight.webp',
        'mode-global': '/we-work-with/growtrucking-truck-dispatching-with-mode-global.webp',
        'wwex-group': '/we-work-with/growtrucking-truck-dispatching-with-wwex-group.webp',
        'arrive-logistics': '/we-work-with/growtrucking-truck-dispatching-with-arriev-logistics.webp',
    }

    return imageMap[slug] || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
}

/**
 * PartnerHero Component
 * Hero section with background image and content overlay
 */
export default function PartnerHero({ partner }: PartnerHeroProps) {
    const bannerImage = getPartnerBannerImage(partner.slug)

    return (
        <section className="relative min-h-[80vh]  w-full overflow-hidden flex items-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={bannerImage}
                    alt={`${partner.name} Partnership Banner`}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />
            </div>

            {/* Content */}
            <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
                <div className="max-w-4xl">

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                        {partner.name}
                    </h1>

                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl drop-shadow-md">
                        {partner.overview}
                    </p>
                </div>
            </div>
        </section>
    )
}

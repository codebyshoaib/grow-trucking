'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { PartnerEntity } from '@/types/partner.types'

interface PartnerCTAProps {
    partner: PartnerEntity
}

/**
 * PartnerCTA Component
 * Call-to-action section with background image
 */
export default function PartnerCTA({ partner }: PartnerCTAProps) {
    return (
        <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
            <div className="relative max-w-7xl flex flex-col items-center justify-center mx-auto bg-black rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <Image
                    src="https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg"
                    alt="Partner CTA Background"
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="relative z-20 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 text-left sm:text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
                        {partner.cta}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
                        Partner with Grow Trucking to access premium {partner.displayName} freight opportunities. Get your free consultation today!
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-start sm:justify-center">
                        <Button
                            size="lg"
                            className="text-base md:text-lg py-6 md:py-8"
                            icon={<ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />}
                            iconPosition="right"
                        >
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

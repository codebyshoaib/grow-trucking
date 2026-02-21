'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Phone } from 'lucide-react'
import Link from 'next/link'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeCTAProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeCTA Component
 * Presentation layer: Call-to-action section
 * Prominent CTA with background image and compelling messaging
 */
export default function TruckTypeCTA({ truckType }: TruckTypeCTAProps) {
    const phoneNumber = process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER || '(313) 307-3834'

    return (
        <section className="relative w-full py-10 sm:py-14 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 overflow-hidden bg-white">
            <div className="relative max-w-7xl flex flex-col items-center justify-center mx-auto bg-black rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl min-h-[350px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
                {/* Background Image */}
                <Image
                    src={truckType.heroImage}
                    alt={`${truckType.displayName} CTA Background`}
                    fill
                    className="object-cover"
                    priority
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/80 z-10" />

                {/* Content */}
                <div className="relative z-20 px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-12 md:py-16 lg:py-20 text-center w-full">
                    {/* Headline */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white leading-[1.1] sm:leading-tight mb-3 sm:mb-4 md:mb-6 max-w-4xl mx-auto px-2">
                        {truckType.ctaHeadline}
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white/90 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto px-2">
                        {truckType.ctaDescription}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-tight text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-h-[48px] w-full sm:w-auto"
                            icon={<Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6" />}
                            iconPosition="left"
                        >
                            <Link href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                                {phoneNumber}
                            </Link>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-black font-bold uppercase tracking-tight text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 min-h-[48px] w-full sm:w-auto transition-all"
                            icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6" />}
                            iconPosition="right"
                        >
                            <Link href="/contact">Request Your Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

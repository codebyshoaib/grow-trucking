'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Phone, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeOverviewProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeOverview Component
 * Presentation layer: Merged intro and overview section
 * Includes description with CTAs, then image and detailed content
 */
export default function TruckTypeOverview({ truckType }: TruckTypeOverviewProps) {
    const phoneNumber = process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER || '(313) 307-3834'

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                {/* Overview Section - Image and Detailed Content */}
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Section - Image */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
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

                    {/* Right Section - Text Content */}
                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                            WHAT IS {truckType.displayName.toUpperCase()} DISPATCH?
                        </Badge>

                        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                            {truckType.displayName}
                        </h2>

                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8">
                            {truckType.longDescription}
                        </p>
                        <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8">
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

                        <Button
                            size="lg"
                            className="mt-4 sm:mt-6 w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                            icon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />}
                            iconPosition="left"
                        >
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section >
    )
}

'use client'

import React from 'react'
import Image from 'next/image'
import type { PartnerEntity } from '@/types/partner.types'
import { CheckCircle2 } from 'lucide-react'

interface PartnerOverviewProps {
    partner: PartnerEntity
}

/**
 * PartnerOverview Component
 * Professional two-column layout with content and services grid
 */
export default function PartnerOverview({ partner }: PartnerOverviewProps) {
    return (
        <section className="py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                        {/* Left Column - Content */}
                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 md:mb-8">
                                About {partner.displayName}
                            </h2>
                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                                {partner.longDescription}
                            </p>

                            {/* Services List - Checkbox Style */}
                            <div className="space-y-4">
                                {partner.coreServices.map((service, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="flex-shrink-0 mt-0.5">
                                            <CheckCircle2
                                                className="w-5 h-5 text-primary"
                                                style={{ fill: 'rgba(249, 115, 22, 0.2)' }}
                                            />
                                        </div>
                                        <p className="text-gray-700 text-base leading-relaxed">
                                            {service}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Image */}
                        <div className="relative w-full h-full min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden">
                            <Image
                                src={partner.partnerImage || ''}
                                alt={partner.displayName}
                                fill
                                className="rounded-lg object-cover"
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import PartnerCard from './PartnerCard'
import { PartnerRegistry } from '@/domain/partner/partner.config'

export default function PartnersSection() {
    const partners = PartnerRegistry.getAll()

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 uppercase leading-tight">
                        Our Strategic Partners
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We've built strong relationships with premier freight brokers across the industry,
                        giving you access to premium freight opportunities and reliable capacity solutions.
                    </p>
                </div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {partners.map((partner, index) => (
                        <PartnerCard
                            key={partner.id}
                            partner={partner}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

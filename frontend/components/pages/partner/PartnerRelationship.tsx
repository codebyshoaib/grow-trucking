'use client'

import React from 'react'
import type { PartnerEntity } from '@/types/partner.types'
import { Star, TrendingUp, Handshake } from 'lucide-react'

interface PartnerRelationshipProps {
    partner: PartnerEntity
}

/**
 * PartnerRelationship Component
 * Card-based layout with icons, titles, descriptions, and numbers
 */
export default function PartnerRelationship({ partner }: PartnerRelationshipProps) {
    const cards = []

    // Card 1: Why Choose
    if (partner.whyChoose) {
        cards.push({
            icon: <Star className="w-12 h-12" />,
            title: 'Why Choose',
            description: partner.whyChoose,
            number: '01'
        })
    }

    // Card 2: Strengths (always show)
    const strengthsDescription = partner.strengths && partner.strengths.length > 0
        ? partner.strengths.join('. ') + '.'
        : partner.whyChoose || 'This partner brings significant value through their market position and industry expertise.'

    cards.push({
        icon: <TrendingUp className="w-12 h-12" />,
        title: 'Strengths & Market Position',
        description: strengthsDescription,
        number: '02'
    })

    // Card 3: Our Partnership (always show)
    cards.push({
        icon: <Handshake className="w-12 h-12" />,
        title: 'Our Partnership',
        description: partner.relationship,
        number: '03'
    })

    return (
        <section className="py-12 md:py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center text-center p-8 bg-white rounded-lg border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                                {/* Icon */}
                                <div className="mb-6 text-primary">
                                    {card.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                    {card.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-8 flex-1">
                                    {card.description}
                                </p>

                                {/* Number */}
                                <div className="absolute bottom-4 right-4">
                                    <span className="text-6xl sm:text-7xl font-bold text-primary/20 leading-none">
                                        {card.number}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

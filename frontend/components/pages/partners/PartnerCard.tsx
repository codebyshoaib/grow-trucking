'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { titleToSlug } from '@/lib/utils'

export interface Partner {
    name: string
    tagline: string
    overview: string
    coreServices: string[]
    whyChoose?: string
    strengths?: string[]
    relationship: string
    cta: string
}

interface PartnerCardProps {
    partner: Partner
    index: number
}

/**
 * Truncate text to a maximum length with ellipsis
 */
function truncateText(text: string, maxLength: number = 150): string {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength).trim() + '...'
}

export default function PartnerCard({ partner, index }: PartnerCardProps) {
    const partnerSlug = titleToSlug(partner.name)
    const truncatedOverview = truncateText(partner.overview, 140)
    const keyServices = partner.coreServices.slice(0, 3) // Show only first 3 services

    return (
        <div
            className="group relative bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-primary/30 animate-fade-in h-full flex flex-col"
            style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
            }}
        >
            {/* Gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary/80 to-primary/60 group-hover:from-primary group-hover:via-primary group-hover:to-primary transition-all duration-300" />

            <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Header */}
                <div className="mb-4">
                    <Badge className="mb-6">
                        {partner.tagline}
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                        {partner.name}
                    </h3>
                </div>

                {/* Overview - Truncated */}
                <div className="mb-5 flex-1">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-4">
                        {truncatedOverview}
                    </p>
                </div>

                {/* Key Services - Badge Style with Checkmarks */}
                <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                        {keyServices.map((service, idx) => (
                            <span
                                key={idx}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-base font-medium text-gray-700  hover:border-primary/50 hover:bg-primary/5 transition-colors"
                            >
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" style={{ fill: 'rgba(249, 115, 22, 0.2)' }} />
                                {service.split('(')[0].trim()} {/* Remove parenthetical info for cleaner display */}
                            </span>
                        ))}

                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link href={`/partners/${partnerSlug}`}>
                        <Button
                            variant="outline"
                            className="w-full group/btn border-2 border-primary/20 hover:border-primary bg-white hover:bg-primary text-primary hover:text-white font-semibold transition-all duration-300"
                            icon={<ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />}
                            iconPosition="right"
                        >
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

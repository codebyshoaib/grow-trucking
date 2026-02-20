'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

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

export default function PartnerCard({ partner, index }: PartnerCardProps) {
    return (
        <div
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 animate-fade-in"
            style={{
                animationDelay: `${index * 50}ms`,
                animationFillMode: 'both'
            }}
        >
            <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="mb-6">
                    <Badge className="mb-3 bg-primary/10 text-primary hover:bg-primary/20">
                        PREMIER PARTNER
                    </Badge>
                    <h3 className="text-2xl sm:text-3xl font-bold text-secondary mb-2 leading-tight">
                        {partner.name}
                    </h3>
                    <p className="text-lg text-gray-600 font-medium">
                        {partner.tagline}
                    </p>
                </div>

                {/* Overview */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Overview
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                        {partner.overview}
                    </p>
                </div>

                {/* Core Services */}
                <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Core Services
                    </h4>
                    <ul className="space-y-2">
                        {partner.coreServices.map((service, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{service}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Why Choose / Strengths */}
                {(partner.whyChoose || partner.strengths) && (
                    <div className="mb-6">
                        {partner.whyChoose && (
                            <>
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Why Carriers Choose {partner.name.split('—')[0].trim()}
                                </h4>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    {partner.whyChoose}
                                </p>
                            </>
                        )}
                        {partner.strengths && partner.strengths.length > 0 && (
                            <>
                                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    Strengths & Market Position
                                </h4>
                                <ul className="space-y-2">
                                    {partner.strengths.map((strength, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                )}

                {/* Relationship & CTA */}
                <div className="pt-6 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {partner.relationship}
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group/link"
                    >
                        <span className="text-sm sm:text-base">{partner.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

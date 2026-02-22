'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { HelpCircle, Plus, Minus } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateFAQProps {
    state: StateEntity
}

/**
 * StateFAQ Component
 * Presentation layer: FAQ section for state pages
 * Section 13: FAQ Section - Helps Google featured snippets
 */
export default function StateFAQ({ state }: StateFAQProps) {
    const [openId, setOpenId] = useState<number | null>(0) // First item open by default

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    // TODO: Add FAQ array to StateEntity type
    // Default FAQ questions based on master structure
    const faqs = [
        {
            question: `Do I need state authority to operate in ${state.displayName}?`,
            answer: `Yes, you need proper authority to operate in ${state.displayName}. This typically includes USDOT number, MC number, and state-specific permits. Some states require additional registrations. Consult with a compliance expert to ensure you have all necessary authority before operating in ${state.displayName}.`,
        },
        {
            question: `What insurance is required for trucking in ${state.displayName}?`,
            answer: `Minimum insurance requirements include primary liability coverage (typically $750,000-$1,000,000), cargo insurance, and physical damage coverage. ${state.displayName} may have additional requirements depending on the type of freight you're hauling. Always verify current insurance requirements with your insurance provider and state authorities.`,
        },
        {
            question: `What pays best in ${state.displayName}?`,
            answer: `Premium rates in ${state.displayName} typically come from specialized freight including refrigerated loads, flatbed freight, and time-sensitive deliveries. The ${state.keyIndustries?.[0] || 'primary industry'} sector often offers competitive rates. Outbound loads from major distribution hubs also command premium rates.`,
        },
        {
            question: `Is ${state.displayName} good for new owner operators?`,
            answer: `${state.displayName} offers opportunities for new owner operators, especially with strong freight volume and diverse industries. However, competition can be high in major metro areas. New operators should focus on building relationships with reliable brokers, understanding local regulations, and starting with established lanes before expanding.`,
        },
        {
            question: `What are the best lanes from ${state.displayName}?`,
            answer: `Top lanes from ${state.displayName} include routes to major distribution hubs in neighboring states, cross-country routes to high-demand markets, and lanes connecting to major ports. The ${state.majorCities?.[0] || 'primary metro'} area typically has the highest volume of outbound freight.`,
        },
        {
            question: `How do I find loads in ${state.displayName}?`,
            answer: `Load finding in ${state.displayName} involves using load boards, building relationships with brokers, working with dispatchers, and understanding peak booking times. Major load boards like DAT, Truckstop.com, and 123Loadboard have strong coverage in ${state.displayName}. Many successful operators also work with professional dispatchers who have established broker relationships.`,
        },
        {
            question: `What are the seasonal trends in ${state.displayName}?`,
            answer: `${state.displayName} experiences seasonal variations based on industry activity, weather patterns, and commodity movements. Generally, Q2 and Q3 see stronger rates due to increased freight volume. Q1 can be slower, while Q4 often sees peak activity. Understanding these patterns helps with strategic planning and rate negotiation.`,
        },
        {
            question: `What permits do I need for ${state.displayName}?`,
            answer: `Permit requirements in ${state.displayName} depend on your operation type. Standard operations require USDOT and MC numbers. Oversized/overweight loads, hazardous materials, and special routes may require additional permits. Some states have specific fuel tax permits or temporary registration requirements. Always verify current requirements before operating.`,
        },
    ]

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    FREQUENTLY ASKED QUESTIONS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Frequently Asked Questions About {state.displayName} Truck Dispatching
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Common questions about operating and finding loads in {state.displayName}. These answers are optimized for featured snippets and user intent.
                </p>

                <div className="max-w-4xl space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openId === index
                        return (
                            <div
                                key={index}
                                className={`border-2 rounded-xl transition-all duration-300 ${
                                    isOpen
                                        ? 'border-primary bg-white shadow-md'
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                }`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <div className="flex items-start gap-3 flex-1">
                                        <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <span className="text-sm sm:text-base font-semibold text-secondary">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className="flex-shrink-0 ml-4">
                                        {isOpen ? (
                                            <Minus className="w-5 h-5 text-primary" />
                                        ) : (
                                            <Plus className="w-5 h-5 text-gray-400" />
                                        )}
                                    </div>
                                </button>
                                {isOpen && (
                                    <div className="px-6 pb-6 pl-14">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

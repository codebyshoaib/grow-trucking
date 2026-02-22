'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Plus, Minus, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { StateEntity } from '@/types/state.types'

interface StateFAQProps {
    state: StateEntity
}

/**
 * FAQ Category Type
 * Domain layer: Business rules for FAQ categorization
 */
type FAQCategory = 'getting-started' | 'compliance' | 'operations' | 'rates' | 'lanes'

/**
 * FAQ Item Interface
 * Domain layer: FAQ data structure
 */
interface FAQItem {
    question: string
    answer: string
    category: FAQCategory
}

/**
 * StateFAQ Component
 * Presentation layer: FAQ section with category filters
 * Section 13: FAQ Section - Helps Google featured snippets
 * 
 * Architecture:
 * - Domain logic: FAQ categorization and filtering
 * - Presentation: Two-column layout with category chips
 * - State management: Selected category and open FAQ item
 */
export default function StateFAQ({ state }: StateFAQProps) {
    const [selectedCategory, setSelectedCategory] = useState<FAQCategory>('getting-started')
    const [openId, setOpenId] = useState<number | null>(0) // First item open by default

    /**
     * Domain Service: FAQ Data Factory
     * Creates FAQ items organized by category
     */
    const faqData: FAQItem[] = useMemo(() => [
        // Getting Started Category
        {
            category: 'getting-started',
            question: `Do I need state authority to operate in ${state.displayName}?`,
            answer: `Yes, you need proper authority to operate in ${state.displayName}. This typically includes USDOT number, MC number, and state-specific permits. Some states require additional registrations. Consult with a compliance expert to ensure you have all necessary authority before operating in ${state.displayName}.`,
        },
        {
            category: 'getting-started',
            question: `How do I find loads in ${state.displayName}?`,
            answer: `Load finding in ${state.displayName} involves using load boards, building relationships with brokers, working with dispatchers, and understanding peak booking times. Major load boards like DAT, Truckstop.com, and 123Loadboard have strong coverage in ${state.displayName}. Many successful operators also work with professional dispatchers who have established broker relationships.`,
        },
        {
            category: 'getting-started',
            question: `Is ${state.displayName} good for new owner operators?`,
            answer: `${state.displayName} offers opportunities for new owner operators, especially with strong freight volume and diverse industries. However, competition can be high in major metro areas. New operators should focus on building relationships with reliable brokers, understanding local regulations, and starting with established lanes before expanding.`,
        },
        // Compliance Category
        {
            category: 'compliance',
            question: `What insurance is required for trucking in ${state.displayName}?`,
            answer: `Minimum insurance requirements include primary liability coverage (typically $750,000-$1,000,000), cargo insurance, and physical damage coverage. ${state.displayName} may have additional requirements depending on the type of freight you're hauling. Always verify current insurance requirements with your insurance provider and state authorities.`,
        },
        {
            category: 'compliance',
            question: `What permits do I need for ${state.displayName}?`,
            answer: `Permit requirements in ${state.displayName} depend on your operation type. Standard operations require USDOT and MC numbers. Oversized/overweight loads, hazardous materials, and special routes may require additional permits. Some states have specific fuel tax permits or temporary registration requirements. Always verify current requirements before operating.`,
        },
        {
            category: 'compliance',
            question: `What are the weight and size limits in ${state.displayName}?`,
            answer: `${state.displayName} follows standard federal weight limits (80,000 lbs gross vehicle weight) but may have specific axle weight restrictions. Size limits typically allow 8.5 feet width, 13.5 feet height, and 53 feet length for standard trailers. Oversized loads require special permits. Check with ${state.displayName} DOT for current regulations.`,
        },
        // Operations Category
        {
            category: 'operations',
            question: `What are the seasonal trends in ${state.displayName}?`,
            answer: `${state.displayName} experiences seasonal variations based on industry activity, weather patterns, and commodity movements. Generally, Q2 and Q3 see stronger rates due to increased freight volume. Q1 can be slower, while Q4 often sees peak activity. Understanding these patterns helps with strategic planning and rate negotiation.`,
        },
        {
            category: 'operations',
            question: `What are the best truck stops and parking areas in ${state.displayName}?`,
            answer: `${state.displayName} has numerous truck stops along major highways. Key locations include stops near ${state.majorCities?.[0] || 'major metro areas'} and along I-${state.abbreviation || 'highway'} corridors. Parking can be challenging in urban areas, so plan ahead. Many operators use truck stop apps to find available parking.`,
        },
        {
            category: 'operations',
            question: `What freight types are most common in ${state.displayName}?`,
            answer: `${state.displayName} handles diverse freight types including ${state.commonFreightTypes?.slice(0, 3).join(', ') || 'general freight, consumer goods, and industrial products'}. The ${state.keyIndustries?.[0] || 'primary industry'} sector generates significant freight volume. Understanding local commodity patterns helps optimize your equipment and routes.`,
        },
        // Rates Category
        {
            category: 'rates',
            question: `What pays best in ${state.displayName}?`,
            answer: `Premium rates in ${state.displayName} typically come from specialized freight including refrigerated loads, flatbed freight, and time-sensitive deliveries. The ${state.keyIndustries?.[0] || 'primary industry'} sector often offers competitive rates. Outbound loads from major distribution hubs also command premium rates.`,
        },
        {
            category: 'rates',
            question: `What are average freight rates in ${state.displayName}?`,
            answer: `Average rates in ${state.displayName} vary by equipment type and route. Dry van rates typically range from $2.00-$2.40 per mile, reefer rates from $2.20-$2.60 per mile, and flatbed rates from $2.30-$2.70 per mile. Rates fluctuate based on season, demand, and specific lanes. Working with experienced dispatchers helps secure premium rates.`,
        },
        // Lanes Category
        {
            category: 'lanes',
            question: `What are the best lanes from ${state.displayName}?`,
            answer: `Top lanes from ${state.displayName} include routes to major distribution hubs in neighboring states, cross-country routes to high-demand markets, and lanes connecting to major ports. The ${state.majorCities?.[0] || 'primary metro'} area typically has the highest volume of outbound freight.`,
        },
        {
            category: 'lanes',
            question: `What are the deadhead risks for lanes from ${state.displayName}?`,
            answer: `Deadhead risk varies by destination. Outbound lanes from ${state.displayName} to major freight hubs typically have lower deadhead risk due to return load availability. Cross-country routes may have higher deadhead risk. Working with dispatchers who understand backhaul opportunities helps minimize empty miles.`,
        },
    ], [state])

    /**
     * Domain Service: Filter FAQs by Category
     * Business logic for category-based filtering
     */
    const filteredFAQs = useMemo(() => {
        return faqData.filter(faq => faq.category === selectedCategory)
    }, [faqData, selectedCategory])

    /**
     * Category Configuration
     * Domain layer: Category definitions and metadata
     */
    const categories: Array<{ id: FAQCategory; label: string }> = [
        { id: 'getting-started', label: 'Getting Started' },
        { id: 'compliance', label: 'Compliance & Permits' },
        { id: 'operations', label: 'Operations' },
        { id: 'rates', label: 'Rates & Pricing' },
        { id: 'lanes', label: 'Lanes & Routes' },
    ]

    /**
     * Event Handler: Toggle FAQ Item
     * Presentation layer: User interaction handling
     */
    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

    /**
     * Event Handler: Select Category
     * Presentation layer: Category filter interaction
     */
    const handleCategorySelect = (category: FAQCategory) => {
        setSelectedCategory(category)
        setOpenId(0) // Reset to first item when category changes
    }

    return (
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-primary/5 to-primary/10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Left Column - Title and Category Filters */}
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                FAQs
                            </h2>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
                                Everything you need to know about features, membership, and troubleshooting.
                            </p>

                            {/* Category Filter Chips */}
                            <div className="space-y-3">
                                {categories.map((category) => {
                                    const isActive = selectedCategory === category.id
                                    return (
                                        <button
                                            key={category.id}
                                            onClick={() => handleCategorySelect(category.id)}
                                            className={`w-full text-left px-6 py-3 rounded-full font-medium transition-all ${isActive
                                                ? 'bg-gray-900 text-white shadow-md'
                                                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300'
                                                }`}
                                        >
                                            {category.label}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Right Column - FAQ Questions */}
                        <div className="lg:col-span-3">
                            <div className="space-y-4">
                                {filteredFAQs.map((faq, index) => {
                                    const isOpen = openId === index
                                    return (
                                        <div
                                            key={index}
                                            className="bg-white rounded-lg border border-gray-200 overflow-hidden"
                                        >
                                            <button
                                                onClick={() => toggleFAQ(index)}
                                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="text-base sm:text-lg font-semibold text-gray-900 flex-1 pr-4">
                                                    {faq.question}
                                                </span>
                                                <div className="flex-shrink-0">
                                                    {isOpen ? (
                                                        <Minus className="w-5 h-5 text-gray-600" />
                                                    ) : (
                                                        <Plus className="w-5 h-5 text-gray-400" />
                                                    )}
                                                </div>
                                            </button>
                                            {isOpen && (
                                                <div className="px-5 pb-5 border-t border-gray-100">
                                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed pt-4">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Contact Support Section */}
                            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                    Still have questions?
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 mb-4">
                                    Contact our support team and we will make sure everything is clear and intuitive for you!
                                </p>
                                <Button
                                    asChild
                                    className="bg-primary hover:bg-primary/90 text-white"
                                >
                                    <Link href="/contact" className="flex items-center gap-2">
                                        <MessageCircle className="w-4 h-4" />
                                        Contact Support
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import faqsData from '@/data/careers/faqs.json'

/**
 * CareersFAQ Component
 * FAQ section using data from JSON file for easy updates
 */
export default function CareersFAQ() {
    const [openFaq, setOpenFaq] = useState<string | null>(null)

    const toggleFaq = (id: string) => {
        setOpenFaq(openFaq === id ? null : id)
    }

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                            Hiring FAQs
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqsData.faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(faq.id)}
                                    className="w-full px-6 py-4 sm:px-8 sm:py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-primary/20"
                                    aria-expanded={openFaq === faq.id}
                                >
                                    <h3 className="text-base sm:text-lg font-bold text-secondary pr-4">
                                        {faq.question}
                                    </h3>
                                    {openFaq === faq.id ? (
                                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                    ) : (
                                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                    )}
                                </button>
                                <div
                                    className={cn(
                                        "overflow-hidden transition-all duration-300",
                                        openFaq === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    )}
                                >
                                    <div className="px-6 sm:px-8 pb-4 sm:pb-5">
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

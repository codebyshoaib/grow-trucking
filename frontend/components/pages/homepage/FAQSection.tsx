'use client'

import React, { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const faqs = [
    {
        id: 1,
        number: '001',
        question: 'What exactly does Grow Trucking Dispatch do?',
        answer: 'We handle all aspects of dispatching, including finding high-paying loads, negotiating rates, planning lanes to reduce deadhead, and managing broker relationships—so you can focus on driving and increasing revenue'
    },
    {
        id: 2,
        number: '002',
        question: 'Who can use your dispatch services?',
        answer: 'We work with owner-operators, small fleets, and independent truck drivers across the USA, for trucks like Dry Van, Reefer, Flatbed, Box Truck, and more.'
    },
    {
        id: 3,
        number: '003',
        question: 'How do I know I’ll get good rates?',
        answer: 'We analyze market trends, compare broker rates, and negotiate for the best possible price for your loads. Our goal is to maximize your revenue per mile.'
    },
    {
        id: 4,
        number: '004',
        question: 'Are there any hidden fees?',
        answer: 'No. We operate with full transparency. All fees and percentages are disclosed upfront, so you always know exactly what you’re paying. ',
    },
    {
        id: 5,
        number: '005',
        question: 'How quickly can I start?',
        answer: 'Once you provide your truck and operational details, we can start dispatching within 24–48 hours after reviewing your audit and confirming your plan.'
    },
    {
        id: 6,
        number: '006',
        question: 'Do I need a minimum number of trucks or experience?',
        answer: 'No. We work with single-owner operators and small fleets. You don’t need prior dispatch experience—our team guides you step by step.'
    }
    {
        id: 7,
        number: '007',
        question: 'What makes Grow Trucking different from other dispatch services?',
        answer: 'Proven experience in the US freight market, Revenue-focused approach: we aim to increase your weekly earnings, Personalized service for your truck or fleet, Free tools and audits to identify revenue growth opportunities'
    }
    {
        id: 8,
        number: '008',
        question: 'Do you provide real-time support?',
        answer: 'Yes. We offer ongoing support via call, email, or chat to ensure your dispatch operations run smoothly.'
    }
    {
        id: 9,
        number: '009',
        question: 'Can you help with multiple truck types?',
        answer: 'Absolutely. We dispatch for a variety of equipment including Dry Van, Reefer, Flatbed, Box Truck, and more.'
    }
    {
        id: 10,
        number: '010',
        question: 'What if I want to try your service first?',
        answer: 'We offer a free Carrier Profitability Audit and Growth Checklist to show exactly how we can improve your revenue before committing.'
    }
]

export default function FAQSection() {
    const [openId, setOpenId] = useState(2) // Item 002 is open by default

    const toggleFAQ = (id: number) => {
        setOpenId(openId === id ? -1 : id)
    }

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    {/* Left Side - Content */}
                    <div className="space-y-8">
                        <div>
                            <Badge className="mb-4">FREQUENTLY ASKED QUESTIONS</Badge>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                                Frequently ask <br /> questions
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                Experience intelligent, efficient, and sustainable software designed to drive progress.
                            </p>
                        </div>

                        <Button
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                            iconPosition="right"
                            className="uppercase tracking-tighter"
                        >
                            <Link href="/contact">Contact us</Link>
                        </Button>
                    </div>

                    {/* Right Side - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq) => {
                            const isOpen = openId === faq.id
                            return (
                                <div
                                    key={faq.id}
                                    className={`border rounded-lg transition-all duration-300 ${isOpen
                                        ? 'border-primary bg-white shadow-md'
                                        : 'border-gray-200 bg-white hover:border-gray-300'
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(faq.id)}
                                        className="w-full flex items-center justify-between p-6 text-left"
                                    >
                                        <span className="text-lg font-semibold text-gray-800 pr-4">
                                            <span className="text-gray-500 font-normal mr-2">{faq.number}</span>
                                            {faq.question}
                                        </span>
                                        <div className="flex-shrink-0">
                                            {isOpen ? (
                                                <Minus className="w-5 h-5 text-[#F9D71C]" />
                                            ) : (
                                                <Plus className="w-5 h-5 text-gray-400" />
                                            )}
                                        </div>
                                    </button>
                                    {isOpen && (
                                        <div className="px-6 pb-6">
                                            <p className="text-gray-600 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

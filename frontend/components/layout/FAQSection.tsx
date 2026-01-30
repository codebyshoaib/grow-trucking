'use client'

import React, { useState } from 'react'
import { Plus, Minus, ArrowRight } from 'lucide-react'

const faqs = [
    {
        id: 1,
        number: '001',
        question: 'What features does this software offer?',
        answer: 'Our software provides comprehensive dispatching solutions including load booking, rate negotiation, paperwork management, and 24/7 support to streamline your fleet operations.'
    },
    {
        id: 2,
        number: '002',
        question: 'How does this solution improve efficiency?',
        answer: 'This solution boosts efficiency by automating tasks, streamlining workflows, and providing data insights that support faster, smarter decision-making.'
    },
    {
        id: 3,
        number: '003',
        question: 'What kind of support is provided?',
        answer: 'We offer 24/7 support with experienced dispatchers who handle all aspects of load management, broker communications, and administrative tasks so you can focus on driving.'
    },
    {
        id: 4,
        number: '004',
        question: 'How secure is the data managed by this software?',
        answer: 'We implement industry-standard security measures including encrypted data transmission, secure cloud storage, and regular security audits to protect your sensitive information.'
    },
    {
        id: 5,
        number: '005',
        question: 'Can the software integrate with our existing systems?',
        answer: 'Yes, our software is designed to integrate seamlessly with most existing fleet management systems, ELD devices, and accounting software through our comprehensive API.'
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
                            <span className="text-[#F9D71C] text-sm font-bold tracking-widest uppercase mb-4 block">
                                FAQs
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
                                Frequently ask <br /> questions
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                                Experience intelligent, efficient, and sustainable software designed to drive progress.
                            </p>
                        </div>

                        <button className="group flex items-center gap-3 bg-primary hover:bg-primary/90 text-white font-bold rounded-full px-8 py-4 transition-all hover:scale-105 shadow-lg">
                            <span>Contact us</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </button>
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

'use client'

import React from 'react'
import { TrendingUp, Users, Headphones, Clock, ArrowRight, Truck, Book, BookOpen, BriefcaseBusinessIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const reasons = [
    {
        icon: <BriefcaseBusinessIcon className="w-6 h-6" />,
        title: "10+ Years of Experience",
        description: "We have 10+ years of experience in US freight market. Managed thousands of loads for owner-operators and small fleets, Deep understanding of high-paying lanes, brokers, and rate trends.",
    },
    {
        icon: <Truck className="w-6 h-6" />,
        title: "Revenue-Focused Dispatch",
        description: "Our primary goal is increasing your weekly revenue. We optimize deadhead, lane selection, and broker negotiations. Many clients see $500–$2,000 extra per week. ",
    },
    {
        icon: < BookOpen className="w-6 h-6" />,
        title: "Free Tools & Resources",
        description: "Complimentary Carrier Profitability Audit, Free Growth Checklist for owner-operators, Insights and tips to maximize your profit per mile.",
    },
]

export default function WhyChooseUs() {
    const [firstTwo, thirdReason, fourthReason] = [reasons.slice(0, 2), reasons[2], reasons[3]]

    return (
        <section className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 lg:mb-16">
                    <Badge>WHY CHOOSE US</Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mt-4">
                        <span className="text-secondary">Why Grow Trucking</span>{' '}
                        <span className="text-primary">is The Right Choice</span>
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Side - 2 Blocks */}
                    <div className="md:col-span-2 flex flex-col gap-6 lg:gap-8">
                        {/* First Two Cards in 2-column grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                            {firstTwo.map((reason, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-6 lg:p-8 flex flex-col"
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-full bg-primary border border-secondary/80 flex items-center justify-center mb-6 text-white">
                                        {reason.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-black text-black mb-4">
                                        {reason.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-700 leading-relaxed text-sm lg:text-base flex-grow">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Right Side - 1 Tall Block */}
                    <div className="md:col-span-1">
                        <div className="bg-secondary rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white">
                                {thirdReason.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-black text-white mb-4">
                                {thirdReason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/90 leading-relaxed text-sm lg:text-base mb-8 flex-grow">
                                {thirdReason.description}
                            </p>

                            {/* CTA Button */}
                            <Button
                                className="w-full uppercase tracking-tight"
                                size="lg"
                                icon={<ArrowRight className="w-5 h-5" />}
                                iconPosition="right"
                            >
                                <Link href="/contact">Book Free Consultation</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import { TrendingUp, Users, Headphones, Clock, ArrowRight, Truck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const reasons = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Profit Maximization",
        description: "We don't just find loads; we engineer routes. Our dispatchers analyze market trends in real-time to secure top-tier rates that others miss.",
        stats: "15% Avg. Revenue Increase"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "True Partnership",
        description: "You're not a truck number to us. You get a dedicated strategist who knows your preferred lanes, home-time needs, and equipment specs.",
        stats: "1-on-1 Dedicated Support"
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "Flexible Operations",
        description: "At our dispatch service, we understand the importance of balancing work with your lifestyle. That's why our operations are available around the clock, allowing you to work at your own pace, anytime and anywhere. Whether you're an owner-operator or part of a fleet, you can customize your schedule to fit your needs.",
        stats: "Flexible Scheduling"
    },
    {
        icon: <Truck className="w-6 h-6" />,
        title: "Scalable Solutions",
        description: "Whether you're a single truck owner or part of a large fleet, our scalable dispatch solutions grow with you. We provide the tools and resources to handle small operations as well as large fleets, ensuring you always have the support you need.",
        stats: "Scalable Solutions"
    }
]

export default function WhyChooseUs() {
    const [firstTwo, thirdReason, fourthReason] = [reasons.slice(0, 2), reasons[2], reasons[3]]

    return (
        <section className="relative bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-12 lg:mb-16">
                    <Badge>WHY CHOOSE US</Badge>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black leading-tight mt-4">
                        Why{' '}
                        <span className="text-primary">Truck Dispatch</span>{' '}
                        is The Right Choice for You
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Left Side - 3 Blocks */}
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

                        {/* Third Card - Full Width */}
                        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 flex flex-col">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-primary border border-secondary/80 flex items-center justify-center mb-6 text-white">
                                {thirdReason.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-black text-black mb-4">
                                {thirdReason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-700 leading-relaxed text-sm lg:text-base flex-grow">
                                {thirdReason.description}
                            </p>
                        </div>
                    </div>

                    {/* Right Side - 1 Tall Block */}
                    <div className="md:col-span-1">
                        <div className="bg-secondary rounded-2xl p-6 lg:p-8 h-full flex flex-col">
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white">
                                {fourthReason.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl lg:text-2xl font-black text-white mb-4">
                                {fourthReason.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/90 leading-relaxed text-sm lg:text-base mb-8 flex-grow">
                                {fourthReason.description}
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

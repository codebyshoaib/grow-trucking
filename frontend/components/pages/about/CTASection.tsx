'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
interface CTASectionProps {
    headline?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

export default function CTASection({
    headline = "Ready to Supercharge Your Business with Grow Trucking",
    description = "Partner with Grow Trucking to maximize your revenue, reduce deadhead miles, and grow your trucking business. Get your free Carrier Profitability Audit today!",
    buttonText = "Get Started Now",
    buttonLink = "#"
}: CTASectionProps) {
    return (
        <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
            <div className="relative max-w-7xl flex flex-col items-center justify-center mx-auto bg-black rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl min-h-[400px] sm:min-h-[500px] lg:min-h-[600px]">
                <Image
                    src={"/case-studies/truck19.webp"}
                    alt="CTA Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/80 z-10" />
                <div className="relative z-20 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 text-left sm:text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
                        {headline}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-start sm:justify-center">
                        <Button
                            size="lg"
                            className="text-base md:text-lg py-6 md:py-8"
                            icon={<ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" />}
                            iconPosition="right"
                        >
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

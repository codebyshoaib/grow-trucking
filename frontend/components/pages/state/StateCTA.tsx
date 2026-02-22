'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { StateEntity } from '@/types/state.types'

interface StateCTAProps {
    state: StateEntity
}

/**
 * StateCTA Component
 * Presentation layer: Call to action section for state pages
 * Split-screen design with dark blue text section and image
 */
export default function StateCTA({ state }: StateCTAProps) {
    // Use content structure format from master config
    const headline = state.ctaHeadline || `Get Professional ${state.displayName} Truck Dispatching Services`
    const description = state.ctaDescription || `Maximize your revenue and minimize deadhead miles with our expert dispatch services in ${state.displayName}.`

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="flex flex-col lg:flex-row rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left Section - Dark Blue Background with Text */}
                    <div className="lg:w-1/2 bg-secondary p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                        {/* Badge */}
                        <div className="mb-4 sm:mb-6">
                            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary border-0">
                                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                                <span className="text-white text-xs sm:text-sm font-bold tracking-wider uppercase">
                                    GROWTH ACCELERATOR
                                </span>
                            </div>
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-tight">
                            {headline}
                        </h2>

                        {/* First Point */}
                        <div className="mb-4 sm:mb-6">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">
                                        Secure Your Strategy:
                                    </p>
                                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                                        Apply for your FREE Custom 90-Day Growth Plan (a $1,500 value). This begins your Business Audit to pinpoint Revenue Leaks and define your profit targets.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Second Point */}
                        <div className="mb-6 sm:mb-8">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-white font-bold text-sm sm:text-base md:text-lg mb-1">
                                        Guarantee Your GROWTH:
                                    </p>
                                    <p className="text-white/90 text-xs sm:text-sm md:text-base leading-relaxed">
                                        Start your 90-day partnership to implement the plan. We back it with our "Growth or Your Money Back" Guarantee.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-4 sm:py-5 md:py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
                        >
                            <Link href="/contact" className="flex items-center justify-center gap-2">
                                Get Started Today
                            </Link>
                        </Button>
                    </div>

                    {/* Right Section - Image */}
                    <div className="lg:w-1/2 relative h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px] xl:h-[750px]">
                        <Image
                            src={state.heroImage || state.contentImage || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg'}
                            alt={`${state.displayName} Dispatch Services`}
                            fill
                            className="object-cover grayscale"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

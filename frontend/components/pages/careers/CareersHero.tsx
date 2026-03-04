import React from 'react'
import { Badge } from '@/components/ui/badge'

/**
 * CareersHero Component
 * Hero section for careers page with intro content
 */
export default function CareersHero() {
    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <Badge className="mb-4">GROW TRUCKING</Badge>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-4 sm:mb-6 leading-tight">
                        Careers & Employment
                    </h1>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8">
                        Join the Team That's Driving the Future of Truck Dispatching
                    </h2>

                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 mb-8">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-4 sm:mb-6">
                            We Are Looking for Motivated, Driven Professionals
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                            At Grow Trucking, we don't just dispatch freight — we build careers. We are expanding our team and actively seeking skilled Truck Dispatching Sales Executives who are passionate about logistics, hungry for growth, and ready to make a real impact in the U.S. trucking industry.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base font-semibold text-primary">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                Remote & On-Site Positions Available
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                Competitive Pay + Commission
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full"></span>
                                Growth-Focused Culture
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

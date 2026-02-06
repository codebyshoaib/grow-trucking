import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function NextMoving() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-stretch gap-0 lg:gap-0 max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    {/* Left Section - Content (2/3 width) */}
                    <div className="lg:w-2/3 bg-secondary p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                        <div className="space-y-8">
                            {/* Main Title */}
                            <div className="space-y-2">
                                <Badge className="mb-4 w-fit">GROWTH ACCELERATOR</Badge>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                                    Next Moving Business Step
                                </h2>
                            </div>

                            {/* Bullet Points */}
                            <div className="space-y-6 mt-8">
                                {/* First Bullet Point */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                                        <ArrowRight className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white text-lg md:text-xl leading-relaxed">
                                            <span className="font-bold">Secure Your Strategy:</span> Apply for your FREE Custom 90-Day Growth Plan (a $1,500 value). This begins your Business Audit to pinpoint Revenue Leaks and define your profit targets.
                                        </p>
                                    </div>
                                </div>

                                {/* Second Bullet Point */}
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center mt-1">
                                        <ArrowRight className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white text-lg md:text-xl leading-relaxed">
                                            <span className="font-bold">Guarantee Your GROWTH:</span> Start your 90-day partnership to implement the plan. We back it with our "Growth or Your Money Back" Guarantee.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Call to Action Button */}
                            <div className="mt-8">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                                    Get Started Today
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Image (1/3 width) */}
                    <div className="lg:w-1/3 relative">
                        <div className="relative h-[400px] lg:h-full w-full">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Business meeting with handshake"
                                fill
                                className="object-cover grayscale"
                            />
                            {/* Orange L-shaped border */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import Image from 'next/image'
import { Binoculars, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function OurVision() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Right Column - Image Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Bottom Left Image */}
                            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Business Growth"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Right Image */}
                            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Strategic Planning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Left Column - Content */}
                    <div className="lg:w-1/2 flex flex-col items-start">
                        <Badge className="mb-4">OUR VISION</Badge>

                        <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            Our Special Services
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Our vision is to be your strategic partner for
                            sustainable financial independence. We move
                            beyond daily transactions to help you maximize
                            your Profitability-Per-Mile and achieve your
                            target weekly income. We offer the Strategic
                            Infrastructure and operational support needed to
                            convert the time you spend driving into long
                            term wealth creation for your business
                        </p>
                        <div className="flex flex-row items-center justify-center gap-4">
                            <div className="bg-primary/30 rounded-full p-4">
                                <Binoculars className="w-12 h-12 text-primary" />
                            </div>
                            <div>
                                <p className="text-xl font-bold text-secondary">Looking For the best trucking partner?</p>
                                <p className="text-lg text-gray-900"> Let grow trucking grow your business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function ServicesIntro() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left Section - Text Content */}
                    <div className="lg:w-1/2 w-full">
                        <Badge className="mb-4">
                            Maximize Revenue • Reduce Stress • Scale Your Trucking Business
                        </Badge>

                        <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            Comprehensive Truck Dispatch & Trucking Services in the USA
                        </h1>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            At Grow Trucking, we are a full-service truck dispatching and trucking support company dedicated to helping owner-operators, small fleets, and motor carriers unlock consistent revenue, improved operational efficiency, and long-term business growth through expert dispatch services and back-office solutions. Our professional team works around the clock to handle your freight, compliance, paperwork, route planning and financial systems — so you stay focused on driving.
                        </p>

                        <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                            Whether you're just starting your trucking business or scaling an existing fleet, our services are structured to meet modern dispatcher expectations with personalized attention and industry-leading tools.
                        </p>

                        <Button className="mt-4" size="lg" icon={<PhoneCall className="w-5 h-5" />} iconPosition="left">
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>

                    {/* Right Section - Image Grid */}
                    <div className="lg:w-1/2 w-full">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top Left - Data Analysis */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Data Analysis and Analytics"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Top Right - Team Collaboration */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Team Collaboration"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Bottom Left - Planning and Strategy */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                                <Image
                                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Planning and Strategy"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Bottom Right - Professional Service */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Professional Service"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

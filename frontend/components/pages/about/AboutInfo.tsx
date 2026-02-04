import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, PhoneCall } from 'lucide-react'

export default function AboutInfo() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left Section - Text Content */}
                    <div className="lg:w-1/2">
                        <Badge className="mb-4">OUR JOURNEY</Badge>

                        <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            Grow Trucking - Your partner on road
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                            Backed by experience, teamwork, and a drive for excellence. Elovana was founded to support ambitious businesses through strategy, design, and innovation. Today, we work with brands across industries to turn challenges into measurable results.
                        </p>
                        <Button className="mt-4" size="lg" icon={<PhoneCall className="w-5 h-5" />} iconPosition="left">Call Now</Button>
                    </div>

                    {/* Right Section - Image Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top Left - Laptop with Graph */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Data Analysis"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Top Right - Workspace */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Modern Workspace"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Left - Sticky Notes */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Brainstorming Session"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Right - Light Bulb */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Innovation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

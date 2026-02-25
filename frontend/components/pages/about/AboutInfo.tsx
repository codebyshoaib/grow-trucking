import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'

export default function AboutInfo() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
                    {/* Left Section - Text Content */}
                    <div className="lg:w-1/2">
                        <Badge className="mb-4">WELCOME MESSAGE</Badge>

                        <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            Grow Trucking - Your partner on road
                        </h2>

                        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                            Welcome to GROW Trucking, your Strategic
                            Business Partner. We have 5+ years of real-world
                            expertise in the trucking industry, offering the
                            Strategic Infrastructure designed to maximize your
                            revenue and build wealth. We deliver compliant,
                            operational strategy so you can sustainably GROW
                            your authority, focusing on your profit—not just
                            moving freight
                        </p>
                        <Button className="mt-4" size="lg" icon={<PhoneCall className="w-5 h-5" />} iconPosition="left">
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>

                    {/* Right Section - Image Grid */}
                    <div className="lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            {/* Top Left - Laptop with Graph */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/about-partners/JBhunt-growtrucking-logistics-partner-usa.webp.webp"
                                    alt="Data Analysis"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Top Right - Workspace */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/case-studies/truck1.webp"
                                    alt="Modern Workspace"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Left - Sticky Notes */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/case-studies/truck2.webp"
                                    alt="Brainstorming Session"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Bottom Right - Light Bulb */}
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                                <Image
                                    src="/case-studies/truck3.webp"
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

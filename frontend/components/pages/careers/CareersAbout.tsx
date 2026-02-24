import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'

export default function CareersAbout() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto flex flex-col gap-16 px-4 sm:px-6 md:px-8 lg:px-12">
                {/* First Row - Centered Heading and Text */}
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
                    <Badge>ABOUT GROW TRUCKING</Badge>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6 sm:mb-8 leading-tight">
                        Why Work With Us
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                        Join the Grow Trucking team and help shape the future of truck dispatch services.
                        We are committed to building a diverse and inclusive workplace where everyone can thrive.
                    </p>
                </div>

                {/* Second Row - Two Column Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                                <Image
                                    src="https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg"
                                    alt="Careers at Grow Trucking"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    width={800}
                                    height={600}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                                Our people are like no one else
                            </h3>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Our people keep the world moving forward with curiosity, persistence and unity -
                                all supercharged by the most advanced form of artificial intelligence in logistics -
                                so you're empowered to do your best work and grow every day.
                            </p>
                            <ul className="space-y-3 text-base sm:text-lg text-gray-700">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Competitive salary and benefits package</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Flexible work arrangements</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Professional growth and development opportunities</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">•</span>
                                    <span>Collaborative and inclusive work culture</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Row - Two Column Layout */}
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Column - Image */}
                    <div className="lg:w-1/2 w-full order-2 lg:order-1">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                                <Image
                                    src="https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg"
                                    alt="Careers at Grow Trucking"
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    width={800}
                                    height={600}
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Content */}
                    <div className="lg:w-1/2 w-full order-1 lg:order-2">
                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary leading-tight">
                                Born to breakthrough
                            </h3>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                Explore the legacy of our trailblazers, built on human ingenuity. For over 120 years, our trailblazers have been at the heart of every innovative breakthrough – to keep goods flowing, economies thriving, and to serve communities around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

'use client'

import React from 'react'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, PhoneCall } from 'lucide-react'
import Link from 'next/link'
import PageBanner from '@/components/pages/PageBanner'
import CTASection from '@/components/pages/about/CTASection'
import type { Service } from '@/constants/services.config'

interface ServicePageProps {
    service: Service
}

export default function ServicePage({ service }: ServicePageProps) {
    return (
        <main className="min-h-screen bg-white">
            {/* Banner Section */}
            <PageBanner
                title={service.title}
                description={service.subTitle}
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: service.title, href: `/services/${service.id}` }
                ]}
                imageUrl="https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg"
                imageAlt={`${service.title} Banner`}
            />

            {/* Overview Section - 2 Column Layout */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                        {/* Left Section - Text Content */}
                        <div className={(service.overview?.imageUrl || service.imageUrl) ? "lg:w-1/2 w-full" : "w-full"}>
                            <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                                {service.title.toUpperCase()} OVERVIEW
                            </Badge>

                            <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                                {service.title}
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 whitespace-pre-line">
                                {service.overview?.text || service.description}
                            </p>

                            {service.features && service.features.length > 0 && (
                                <ul className="space-y-3 sm:space-y-4 md:space-y-5 mb-6 sm:mb-8">
                                    {service.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-3 sm:gap-4 md:gap-5 group"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                <Check className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-primary" />
                                            </div>
                                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed flex-1">
                                                {feature}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <Button
                                size="lg"
                                className="mt-4 sm:mt-6 w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                                icon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />}
                                iconPosition="left"
                            >
                                <Link href={service.buttonLink}>
                                    {service.buttonText}
                                </Link>
                            </Button>
                        </div>

                        {/* Right Section - Image */}
                        {(service.overview?.imageUrl || service.imageUrl) && (
                            <div className="lg:w-1/2 w-full">
                                <div className="relative group">
                                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                                        <Image
                                            src={service.overview?.imageUrl || service.imageUrl || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={1600}
                                            height={1600}
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                            WHY CHOOSE US
                        </Badge>
                        <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 leading-[1.1] sm:leading-tight">
                            {service.whyChooseUs?.title || `Why Choose Our ${service.title}`}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
                        {(service.whyChooseUs?.points && service.whyChooseUs.points.length > 0
                            ? service.whyChooseUs.points
                            : service.features.map(f => `Benefit from our ${f.toLowerCase()}`)
                        ).map((point, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed flex-1">
                                        {point}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Info Section - 2 Column Layout */}
            <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
                        {/* Left Section - Image (if provided) */}
                        {(service.additionalInfo?.imageUrl || service.imageUrl) && (
                            <div className="lg:w-1/2 w-full order-2 lg:order-1">
                                <div className="relative group">
                                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                                        <Image
                                            src={service.additionalInfo?.imageUrl || service.imageUrl || 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'}
                                            alt={service.title}
                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                            width={800}
                                            height={600}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Right Section - Text Content */}
                        <div className={(service.additionalInfo?.imageUrl || service.imageUrl) ? "lg:w-1/2 w-full order-1 lg:order-2" : "w-full"}>
                            <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                                ADDITIONAL INFORMATION
                            </Badge>

                            <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                                {service.title} Details
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 whitespace-pre-line">
                                {service.additionalInfo?.text || `Our ${service.title.toLowerCase()} service provides comprehensive solutions tailored to your trucking business needs. We combine industry expertise with personalized service to help you achieve your operational goals and maximize profitability.`}
                            </p>

                            <Button
                                size="lg"
                                className="mt-4 sm:mt-6 w-full sm:w-auto min-h-[48px] text-sm sm:text-base"
                                icon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />}
                                iconPosition="left"
                            >
                                <Link href={service.buttonLink}>
                                    {service.buttonText}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CTASection
                headline={service.ctaHeadline || `Ready to Get Started with ${service.title}?`}
                description={service.ctaDescription || `Contact us today to learn more about our ${service.title.toLowerCase()} services and how we can help grow your trucking business.`}
                buttonText="Contact Us Now"
                buttonLink="/contact"
            />
        </main>
    )
}

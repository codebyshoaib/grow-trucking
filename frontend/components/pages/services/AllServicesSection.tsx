'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateServicesSchema } from '@/lib/schema'
import { allServices } from '@/constants/services.config'

export default function AllServicesSection() {
    // Generate Services Schema
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.growtrucking.com"
    const servicesSchema = generateServicesSchema(
        allServices.map((service) => ({
            name: service.title,
            description: service.description,
            provider: {
                name: "Grow Trucking",
                url: siteUrl,
            },
            areaServed: "US",
            serviceType: "Truck Dispatch Service",
        }))
    )

    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <SchemaScript schema={servicesSchema} />
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">Our Services & Solutions</Badge>
                    <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                        Professional Truck Dispatch Services
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Enhance and secure your trucking business with our professional services. We offer comprehensive dispatch solutions, compliance services, and business growth strategies to support your success.
                    </p>
                </div>

                {/* Services Grid - 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {allServices.map((service) => {
                        return (
                            <div
                                key={service.id}
                                id={service.id}
                                className="group relative scroll-mt-24"
                            >
                                {/* Service Card */}
                                <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 flex flex-col">
                                    {/* Icon */}
                                    <div className="mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center border-2 border-primary/20 group-hover:bg-primary/20 transition-colors">
                                            <service.icon className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="mb-6 space-y-2">
                                        {service.features.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-2 text-sm text-gray-700"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-auto">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="w-full uppercase tracking-tighter group-hover:shadow-lg transition-all"
                                            icon={<ArrowRight className="w-5 h-5" />}
                                            iconPosition="right"
                                            asChild
                                        >
                                            <Link href={service.buttonLink}>
                                                {service.buttonText}
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

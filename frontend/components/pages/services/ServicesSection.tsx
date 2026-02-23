'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateServicesSchema } from '@/lib/schema'

type ServiceItem = {
    number: string
    title: string
    value?: string
    subItems: string[]
    description?: string
    buttonText?: string
    buttonLink?: string
}

const services: ServiceItem[] = [
    {
        number: '01',
        title: 'Free Business Audit Report',
        value: '$500',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'Get a comprehensive analysis of your trucking business operations. Our expert team evaluates your current processes, identifies growth opportunities, and provides actionable insights to maximize your profitability.',
        buttonText: 'Get Free Audit',
        buttonLink: '/api/download-pdf?type=business_audit_report',
    },
    {
        number: '02',
        title: 'Free Growth Checklist',
        value: '$200',
        subItems: ['Business Analysis', 'Growth Opportunities', 'Action Items'],
        description:
            'A strategic checklist designed to help you identify and capitalize on growth opportunities in your trucking business. Perfect for owner-operators and small fleets looking to scale.',
        buttonText: 'Download Checklist',
        buttonLink: '/api/download-pdf?type=growth_checklist',
    },
    {
        number: '03',
        title: 'Free Custom 90 Day Growth Plan',
        value: '$800',
        subItems: ['Custom Strategy', '90-Day Roadmap', 'Performance Metrics'],
        description:
            'Receive a personalized 90-day growth plan tailored to your specific business needs. Our team creates a detailed roadmap with milestones, strategies, and metrics to track your progress.',
        buttonText: 'Get Your Plan',
        buttonLink: '/contact',
    },
    {
        number: '04',
        title: 'Rate Maximization & Negotiation',
        subItems: ['Rate Analysis', 'Negotiation Strategy', 'Market Intelligence'],
        description:
            'Maximize your revenue with our expert rate negotiation services. We analyze market rates, negotiate better deals with brokers, and ensure you get the best rates for every load.',
        buttonText: 'Boost Your Rates',
        buttonLink: '/api/download-pdf?type=rate_maximization_checklist',
    },
    {
        number: '05',
        title: 'Operational Growth Strategy',
        subItems: ['Route Optimization', 'Load Selection', 'Fleet Management'],
        description:
            'Comprehensive operational strategies to grow your fleet efficiently. We help you optimize routes, select profitable loads, and manage your operations for maximum profitability.',
        buttonText: 'Scale Operations',
        buttonLink: '/contact',
    },
    {
        number: '06',
        title: 'Comprehensive Trip Planning',
        subItems: ['Trip Planning', 'Load Selection', 'Route Optimization'],
        description:
            'End-to-end trip planning services that ensure every journey is profitable and efficient. From load selection to route optimization, we handle all the details so you can focus on driving.',
        buttonText: 'Plan Your Trip',
        buttonLink: '/contact',
    }
]

// Helper function to convert service title to slug for hash links
function titleToSlug(title: string): string {
    return title
        .trim()
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

interface ServicesSectionProps {
    itemsFilter?: 'growth-plans' | 'checklist' | 'services' | 'all'
}

export default function ServicesSection({ itemsFilter = 'all' }: ServicesSectionProps) {
    // Define which items belong to which category
    const growthPlanTitles = [
        'Free Custom 90 Day Growth Plan',
        'Free Business Audit Report',
        'Free Growth Checklist',
        'Operational Growth Strategy',
        'Rate Maximization & Negotiation',
        'Comprehensive Trip Planning'
    ]

    const checklistTitles: string[] = [] // Checklist items moved to Growth Plans

    const serviceTitles: string[] = [] // Services will be added later

    // Filter services based on category
    let filteredServices = services
    if (itemsFilter === 'growth-plans') {
        filteredServices = services.filter(s => growthPlanTitles.includes(s.title))
    } else if (itemsFilter === 'checklist') {
        filteredServices = services.filter(s => checklistTitles.includes(s.title))
    } else if (itemsFilter === 'services') {
        filteredServices = services.filter(s => serviceTitles.includes(s.title))
    }

    // Generate Services Schema
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.growtrucking.com"
    const servicesSchema = generateServicesSchema(
        filteredServices.map((service) => ({
            name: service.title,
            description: service.description || `${service.title} - ${service.subItems.join(', ')}`,
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
                    <Badge className="mb-4">
                        {itemsFilter === 'growth-plans' ? 'Growth Plans' :
                            itemsFilter === 'checklist' ? 'Checklist' :
                                'Our Services'}
                    </Badge>
                    <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                        {itemsFilter === 'growth-plans' ? 'Strategic Growth Roadmaps' :
                            itemsFilter === 'checklist' ? 'Essential Growth Checklists' :
                                'Your Success is Our Success'}
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {itemsFilter === 'growth-plans' ? 'Comprehensive growth plans and strategies to scale your trucking business. Get personalized roadmaps, audits, and operational strategies.' :
                            itemsFilter === 'checklist' ? 'Strategic checklists designed to help you identify and capitalize on growth opportunities in your trucking business.' :
                                'From free audits to comprehensive growth strategies, we offer everything you need to scale your trucking operations and maximize profitability.'}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1  lg:grid-cols-2 gap-6 lg:gap-8">
                    {filteredServices.map((service, index) => {
                        const serviceSlug = titleToSlug(service.title)
                        // Determine the base path based on category
                        let basePath = '/services'
                        if (growthPlanTitles.includes(service.title)) {
                            basePath = '/growth-plans'
                        } else if (checklistTitles.includes(service.title)) {
                            basePath = '/checklist'
                        }
                        const serviceHref = `${basePath}#${serviceSlug}`

                        return (
                            <div
                                key={`${service.title}-${index}`}
                                id={serviceSlug}
                                className="group relative scroll-mt-24"
                            >
                                {/* Service Card */}
                                <div className="h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 transition-all duration-300 hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 flex flex-col">
                                    {/* Number Badge */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex justify-between  gap-3 w-full">
                                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                                {service.number}
                                            </div>
                                            {/* {service.value && (
                                                <div className=" rounded-xl bg-secondary/90 text-white border-secondary/20 text-right text-xs p-2 flex items-center justify-center">
                                                    {service.value}  Value
                                                </div>
                                            )} */}
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
                                    {/* Sub Items */}
                                    <div className="mb-4 flex flex-wrap gap-2">
                                        {service.subItems.slice(0, 3).map((item, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full"
                                            >
                                                <CheckCircle2 className="w-3 h-3 text-primary" />
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                    {/* CTA Button */}
                                    <div className="mt-auto">
                                        {service.buttonLink?.startsWith('/api/download-pdf') || service.buttonLink?.startsWith('/api/download-audit') ? (
                                            <Button
                                                variant="default"
                                                size="lg"
                                                className="w-fit uppercase tracking-tighter group-hover:shadow-lg transition-all"
                                                icon={<ArrowRight className="w-5 h-5" />}
                                                iconPosition="right"
                                                onClick={() => {
                                                    window.location.href = service.buttonLink || serviceHref;
                                                }}
                                            >
                                                {service.buttonText || 'Learn More'}
                                            </Button>
                                        ) : (
                                            <Button
                                                variant="default"
                                                size="lg"
                                                className="w-fit uppercase tracking-tighter group-hover:shadow-lg transition-all"
                                                icon={<ArrowRight className="w-5 h-5" />}
                                                iconPosition="right"
                                                asChild
                                            >
                                                <Link href={service.buttonLink || serviceHref}>
                                                    {service.buttonText || 'Learn More'}
                                                </Link>
                                            </Button>
                                        )}
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

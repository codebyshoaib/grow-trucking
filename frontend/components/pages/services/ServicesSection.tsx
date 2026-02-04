'use client'

import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

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
        title: 'Free Business Audit Report ',
        value: '$500',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'Our expert dispatchers bring your trucking operations to life with strategic load selection, route optimization, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    },
    {
        number: '02',
        title: 'Free Growth Checklist',
        value: '$200',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'Our expert dispatchers bring your trucking operations to life with strategic load selection, route optimization, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    },
    {
        number: '03',
        title: 'Free Custom 90 Day Growth Plan',
        value: '$800',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'Our expert dispatchers bring your trucking operations to life with strategic load selection, route optimization, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    },
    {
        number: '04',
        title: 'Rate Maximization & Negotiation',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'Our expert dispatchers bring your trucking operations to life with strategic load selection, route optimization, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    },
    {
        number: '05',
        title: 'Operational Growth Strategy',
        subItems: ['Trucking Business Analysis', 'Market Research', 'Competitive Analysis'],
        description:
            'We provide a comprehensive operational growth strategy that includes route optimization, load selection, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    },
    {
        number: '06',
        title: 'Comprehensive Trip Planning',
        subItems: ['Trip Planning', 'Load Selection', 'Route Optimization'],
        description:
            'We provide a comprehensive operational growth strategy that includes route optimization, load selection, and 24/7 support. Using industry-leading loadboards and market intelligence, we ensure that your fleet operates at maximum efficiency and profitability, providing a seamless experience for both owner-operators and fleet managers.',
        buttonText: 'GET STARTED',
        buttonLink: '/contact',
    }
]

function BulletsInline({ items }: { items: string[] }) {
    return (
        <div className="text-[12px] sm:text-sm text-gray-600 tracking-wide">
            {items.map((item, i) => (
                <span key={item}>
                    {item}
                    {i < items.length - 1 && <span className="mx-2 text-gray-300">•</span>}
                </span>
            ))}
        </div>
    )
}

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState<number>(2) // default open like your reference
    const [isHovering, setIsHovering] = useState(false)

    const handlers = useMemo(() => {
        const open = (i: number) => setActiveIndex(i)
        const toggle = (i: number) => setActiveIndex((prev) => (prev === i ? -1 : i))
        return { open, toggle }
    }, [])

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                <div className="w-full mx-auto">
                    <div className="rounded-4xl border border-primary/20 bg-white shadow-[0_18px_60px_rgba(0,0,0,0.06)] overflow-hidden">
                        {services.map((service, index) => {
                            const isActive = activeIndex === index

                            return (
                                <div
                                    key={service.number}
                                    className="relative"
                                    onMouseEnter={() => {
                                        setIsHovering(true)
                                        handlers.open(index)
                                    }}
                                    onMouseLeave={() => setIsHovering(false)}
                                >
                                    {/* row */}
                                    <button
                                        type="button"
                                        onClick={() => handlers.toggle(index)}
                                        aria-expanded={isActive}
                                        className={[
                                            'w-full text-left',
                                            'border-b border-primary/20 last:border-b-0',
                                            'transition-colors duration-300',
                                            isActive ? 'bg-primary/5' : 'bg-white hover:bg-primary/5',
                                        ].join(' ')}
                                    >
                                        <div className="px-6 md:px-10 lg:px-12 py-7 md:py-9">
                                            <div className="flex flex-row justify-between gap-4 md:gap-8 items-start">
                                                {/* number (left rail like reference) */}
                                                <div className="pt-2">
                                                    <span className="block text-4xl font-bold tracking-[0.38em] text-gray-400">
                                                        {service.number}
                                                    </span>
                                                </div>

                                                {/* title + subitems */}
                                                <div>
                                                    <h3 className="text-2xl md:text-3xl lg:text-[34px] leading-tight font-semibold text-gray-900 tracking-tight flex items-center justify-between">
                                                        {service.title}
                                                        {service.value && (
                                                            <Badge className="ml-2">
                                                                {service.value} Value
                                                            </Badge>
                                                        )}
                                                    </h3>

                                                    <div className="mt-2.5">
                                                        <BulletsInline items={service.subItems} />
                                                    </div>

                                                    {/* expandable area (sleek + smooth, like reference) */}
                                                    <div
                                                        className={[
                                                            'grid transition-[grid-template-rows] duration-500 ease-out',
                                                            isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
                                                        ].join(' ')}
                                                    >
                                                        <div className="overflow-hidden">
                                                            <div
                                                                className={[
                                                                    'pt-5 md:pt-7',
                                                                    'transition-all duration-500',
                                                                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1',
                                                                ].join(' ')}
                                                            >
                                                                {service.description && (
                                                                    <p className="max-w-3xl text-sm md:text-[15px] text-gray-700 leading-relaxed">
                                                                        {service.description}
                                                                    </p>
                                                                )}

                                                                {service.buttonText && (
                                                                    <div className="mt-5 md:mt-6">
                                                                        <Button
                                                                            variant="default"
                                                                            size="lg"
                                                                            icon={<ArrowRight className="w-5 h-5" />}
                                                                            iconPosition="right"
                                                                            className="uppercase tracking-tighter hidden md:flex shadow-none hover:shadow-none"
                                                                        >
                                                                            {service.buttonText}
                                                                        </Button>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

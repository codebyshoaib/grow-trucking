'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { PhoneCall } from 'lucide-react'
import Link from 'next/link'
import type { StateEntity } from '@/types/state.types'

interface StateCTAProps {
    state: StateEntity
}

/**
 * StateCTA Component
 * Presentation layer: Call to action section for state pages
 */
export default function StateCTA({ state }: StateCTAProps) {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                    {state.ctaHeadline}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
                    {state.ctaDescription}
                </p>
                <Button
                    size="lg"
                    variant="default"
                    className="min-h-[48px] text-sm sm:text-base"
                    icon={<PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />}
                    iconPosition="left"
                >
                    <Link href="/contact">Get Started Today</Link>
                </Button>
            </div>
        </section>
    )
}

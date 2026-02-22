'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { StateEntity } from '@/types/state.types'

interface StateKeyIndustriesProps {
    state: StateEntity
}

/**
 * StateKeyIndustries Component
 * Presentation layer: Key industries section for state pages
 */
export default function StateKeyIndustries({ state }: StateKeyIndustriesProps) {
    if (!state.keyIndustries || state.keyIndustries.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    KEY INDUSTRIES
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Major Industries in {state.displayName}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                    {state.keyIndustries.map((industry, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary transition-colors"
                        >
                            <h3 className="text-lg sm:text-xl font-bold text-secondary mb-2">
                                {industry}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

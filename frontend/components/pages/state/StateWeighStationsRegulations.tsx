'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Scale, FileText, AlertTriangle, CheckCircle } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateWeighStationsRegulationsProps {
    state: StateEntity
}

/**
 * StateWeighStationsRegulations Component
 * Presentation layer: Weigh stations and regulations section for state pages
 * Section 9: Weigh Stations & Regulations Section - Builds authority
 */
export default function StateWeighStationsRegulations({ state }: StateWeighStationsRegulationsProps) {
    const regulations = state.regulations || []

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    COMPLIANCE & REGULATIONS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Weigh Stations & Regulations in {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Comprehensive regulatory information including weight limits, permits, and emission requirements. Understanding these regulations builds authority and ensures compliance.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                    {/* Weight Limits */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Scale className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Weight Limits
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific weight limit data to StateEntity */}
                            {state.displayName} follows standard federal weight limits:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Single Axle:</strong> 20,000 lbs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Tandem Axle:</strong> 34,000 lbs</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Gross Vehicle Weight:</strong> 80,000 lbs (standard)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Size Limits */}
                    <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Size Limits
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific size limit data to StateEntity */}
                            Standard federal size limits apply:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Width:</strong> 8.5 feet (102 inches)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Height:</strong> 13.5 feet (varies by route)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-gray-700"><strong>Length:</strong> 53 feet (trailer), varies by state</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* State-Specific Rules */}
                {regulations.length > 0 && (
                    <div className="mt-8 sm:mt-10 bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                State-Specific Rules
                            </h3>
                        </div>
                        <ul className="space-y-3">
                            {regulations.map((regulation, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-primary font-bold">•</span>
                                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                        {regulation}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Permits */}
                <div className="mt-8 sm:mt-10 bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        Permits
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">
                        {/* TODO: Add specific permit requirements to StateEntity */}
                        {state.displayName} may require special permits for:
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-sm text-gray-700">Oversized/overweight loads</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-sm text-gray-700">Hazardous materials</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-sm text-gray-700">Special route requirements</span>
                        </li>
                    </ul>
                </div>

                {/* Emission Laws */}
                {state.slug === 'california' && (
                    <div className="mt-8 sm:mt-10 bg-orange-50 rounded-xl p-6 sm:p-8 border-2 border-orange-200">
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                            Emission Laws (CARB)
                        </h3>
                        <p className="text-sm sm:text-base text-gray-700">
                            California has strict CARB (California Air Resources Board) emission requirements. Ensure your vehicle meets current CARB standards before entering California. Non-compliant vehicles may face fines and restrictions.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

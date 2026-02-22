'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, TrendingDown, BarChart3, Calendar } from 'lucide-react'
import type { StateEntity } from '@/types/state.types'

interface StateRateTrendsProps {
    state: StateEntity
}

/**
 * StateRateTrends Component
 * Presentation layer: Rate trends section for state pages
 * Section 10: Rate Trends (10-Year Analysis) - Makes content look institutional
 */
export default function StateRateTrends({ state }: StateRateTrendsProps) {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    MARKET ANALYSIS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Rate Trends: 10-Year Analysis for {state.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Long-term rate analysis with historical data and future projections. This comprehensive view helps you understand market cycles and make informed decisions.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
                    {/* Historical Rates */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <BarChart3 className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Historical Rates (2015-2024)
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            {/* TODO: Add specific historical rate data to StateEntity */}
                            Over the past decade, {state.displayName} has experienced significant rate fluctuations:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">2018-2019: Strong Market</p>
                                    <p className="text-xs text-gray-600">Rates reached peak levels due to capacity constraints</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingDown className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">2020: COVID Impact</p>
                                    <p className="text-xs text-gray-600">Initial volatility followed by strong recovery</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">2021-2022: Peak Period</p>
                                    <p className="text-xs text-gray-600">Record-high rates driven by demand surge</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <TrendingDown className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">2023-2024: Market Correction</p>
                                    <p className="text-xs text-gray-600">Normalization with seasonal variations</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Market Correction Periods */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Calendar className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                Market Correction Periods
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Understanding correction cycles helps with strategic planning:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Q1 2023:</strong> Significant correction as capacity increased
                                </p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Mid-2024:</strong> Stabilization with improved balance
                                </p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-primary font-bold">•</span>
                                <p className="text-sm text-gray-700">
                                    <strong>Pattern:</strong> Corrections typically last 6-12 months before recovery
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 2025 Projection */}
                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        2025 Projection
                    </h3>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">
                        {/* TODO: Add specific 2025 projection data to StateEntity */}
                        Based on current market indicators and historical patterns, {state.displayName} is expected to see:
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Moderate Growth:</strong> Steady rate increases as market continues to stabilize
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Seasonal Patterns:</strong> Traditional Q2-Q3 strength expected
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Capacity Balance:</strong> Improved equilibrium between supply and demand
                            </p>
                        </li>
                    </ul>
                </div>

                {/* What Drives Rates */}
                <div className="mt-8 sm:mt-10 bg-white rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        What Drives Rates in {state.displayName}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-2">Key Factors:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Freight volume and demand</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Available truck capacity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Fuel costs and operating expenses</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900 mb-2">State-Specific:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Major industry activity ({state.keyIndustries?.[0] || 'key sectors'})</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Port and intermodal traffic</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">Seasonal commodity movements</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

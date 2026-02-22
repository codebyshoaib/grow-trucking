'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { DollarSign, Clock, AlertCircle, CheckCircle } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneRateNegotiationProps {
    lane: LaneEntity
}

/**
 * LaneRateNegotiation Component
 * Presentation layer: Rate negotiation strategy section for lane pages
 * Section 6: Rate Negotiation Strategy - Tactical booking guidance
 */
export default function LaneRateNegotiation({ lane }: LaneRateNegotiationProps) {
    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    RATE STRATEGY
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    Rate Negotiation Strategy: {lane.displayName}
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Strategic guidance on rate negotiation and optimal booking timing for the {lane.displayName} lane. Understanding when to book, which brokers pay more, and when to avoid can significantly impact your profitability.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
                    {/* When to Book */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                When to Book
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Optimal booking times for the {lane.displayName} lane:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Early Morning (6-9 AM)</p>
                                    <p className="text-xs text-gray-600">Peak booking times with best rate opportunities</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Monday-Wednesday</p>
                                    <p className="text-xs text-gray-600">Strongest rates early in the week</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Pre-Weekend</p>
                                    <p className="text-xs text-gray-600">Time-sensitive loads often pay premium</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* What Brokers Pay More */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <DollarSign className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                What Brokers Pay More
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Brokers typically pay premium rates for:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Time-Sensitive Freight</p>
                                    <p className="text-xs text-gray-600">Hot loads with tight delivery windows</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Specialized Equipment</p>
                                    <p className="text-xs text-gray-600">Reefer, flatbed, or specialized trailers</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Reliable Carriers</p>
                                    <p className="text-xs text-gray-600">Established relationships command better rates</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* When to Avoid */}
                    <div className="bg-gray-50 rounded-xl p-6 sm:p-8 border-2 border-gray-200">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertCircle className="w-6 h-6 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary">
                                When to Avoid
                            </h3>
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 mb-4">
                            Situations to avoid or negotiate carefully:
                        </p>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Low-Ball Offers</p>
                                    <p className="text-xs text-gray-600">Rates significantly below market average</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Unreliable Brokers</p>
                                    <p className="text-xs text-gray-600">Check broker ratings and payment history</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-900">Peak Competition Times</p>
                                    <p className="text-xs text-gray-600">Friday afternoons often have rate pressure</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rate Negotiation Tips */}
                <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                    <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                        Rate Negotiation Tips for {lane.displayName}
                    </h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Know Your Costs:</strong> Calculate your cost per mile including fuel, maintenance, and deadhead. Never accept rates below your break-even point.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Market Research:</strong> Check current market rates on load boards before negotiating. Use this data to support your rate requests.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Build Relationships:</strong> Consistent work with reliable brokers often leads to better rates over time. Prioritize relationship-building.
                            </p>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary font-bold">•</span>
                            <p className="text-sm sm:text-base text-gray-700">
                                <strong>Timing Matters:</strong> Book early in the week and early in the day for best rates. Last-minute loads can command premiums but also carry risks.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

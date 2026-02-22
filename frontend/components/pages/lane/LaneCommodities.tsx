'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Package, TrendingUp, Calendar } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'

interface LaneCommoditiesProps {
    lane: LaneEntity
}

/**
 * LaneCommodities Component
 * Presentation layer: Commodities section for lane pages
 * Section 4: What Moves on This Lane?
 */
export default function LaneCommodities({ lane }: LaneCommoditiesProps) {
    const freightTypes = lane.freightTypes || []
    const peakSeasons = lane.peakSeasons || []

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                    FREIGHT ANALYSIS
                </Badge>

                <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-6 sm:mb-8 md:mb-10 leading-[1.1] sm:leading-tight">
                    What Moves on This Lane?
                </h2>

                <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-8 sm:mb-10">
                    Detailed breakdown of what freight moves on the {lane.displayName} lane, including primary commodities, secondary freight, and seasonal cargo patterns.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {/* Primary Commodities */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-5">
                            <Package className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                            <h3 className="text-lg sm:text-xl font-bold text-secondary">
                                Primary Commodities
                            </h3>
                        </div>
                        {lane.primaryCommodities && lane.primaryCommodities.length > 0 ? (
                            <ul className="space-y-2.5">
                                {lane.primaryCommodities.map((type, index) => (
                                    <li key={index} className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm sm:text-base text-gray-700">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : freightTypes.length > 0 ? (
                            <ul className="space-y-2.5">
                                {freightTypes.slice(0, 4).map((type, index) => (
                                    <li key={index} className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm sm:text-base text-gray-700">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-sm text-gray-600">
                                This lane handles a variety of primary commodities including general freight, consumer goods, and industrial products.
                            </p>
                        )}
                    </div>

                    {/* Secondary Commodities */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-5">
                            <TrendingUp className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                            <h3 className="text-lg sm:text-xl font-bold text-secondary">
                                Secondary Commodities
                            </h3>
                        </div>
                        {lane.secondaryCommodities && lane.secondaryCommodities.length > 0 ? (
                            <ul className="space-y-2.5">
                                {lane.secondaryCommodities.map((type, index) => (
                                    <li key={index} className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm sm:text-base text-gray-700">{type}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <>
                                <p className="text-sm text-gray-600 mb-4">
                                    Secondary freight on this lane includes specialized cargo, partial loads, and less-than-truckload (LTL) shipments. These loads often offer good rates with less competition.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm text-gray-700">Specialized equipment freight</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm text-gray-700">Partial and LTL shipments</span>
                                    </li>
                                    <li className="flex items-start gap-2.5">
                                        <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                        <span className="text-sm text-gray-700">Time-sensitive deliveries</span>
                                    </li>
                                </ul>
                            </>
                        )}
                    </div>

                    {/* Seasonal Cargo */}
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="mb-5">
                            <Calendar className="w-8 h-8 text-primary mb-3" strokeWidth={1.5} />
                            <h3 className="text-lg sm:text-xl font-bold text-secondary">
                                Seasonal Cargo
                            </h3>
                        </div>
                        {lane.seasonalCargo && lane.seasonalCargo.length > 0 ? (
                            <>
                                <p className="text-sm text-gray-600 mb-3">Peak seasons for this lane:</p>
                                <ul className="space-y-2">
                                    {lane.seasonalCargo.map((cargo, index) => (
                                        <li key={index} className="flex items-start gap-2.5">
                                            <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                            <span className="text-sm text-gray-700">{cargo}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : peakSeasons.length > 0 ? (
                            <>
                                <p className="text-sm text-gray-600 mb-3">Peak seasons for this lane:</p>
                                <ul className="space-y-2">
                                    {peakSeasons.map((season, index) => (
                                        <li key={index} className="flex items-start gap-2.5">
                                            <span className="text-primary font-bold text-lg leading-none mt-0.5">•</span>
                                            <span className="text-sm text-gray-700">{season}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-sm text-gray-600">
                                Seasonal cargo patterns vary by commodity type. Monitor load boards for seasonal trends.
                            </p>
                        )}
                    </div>
                </div>

                {/* Additional Commodity Information */}
                {freightTypes.length > 5 && (
                    <div className="mt-8 sm:mt-10 bg-primary/5 rounded-xl p-6 sm:p-8 border-2 border-primary/20">
                        <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                            Additional Freight Types
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {freightTypes.slice(5).map((type, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-sm text-gray-700">{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

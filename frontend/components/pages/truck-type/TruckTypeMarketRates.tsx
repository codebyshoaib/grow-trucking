'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeMarketRatesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeMarketRates Component
 * Displays current market rates in a table format
 */
export default function TruckTypeMarketRates({ truckType }: TruckTypeMarketRatesProps) {
    if (!truckType.marketRates || truckType.marketRates.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        MARKET RATES
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Current {truckType.displayName} Market Rates (February 2026)
                    </h2>

                    {truckType.marketRatesDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {truckType.marketRatesDescription}
                        </p>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-md border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                        Route Type
                                    </th>
                                    <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                        Rate Per Mile
                                    </th>
                                    <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                        Average Load Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {truckType.marketRates.map((rate, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-secondary">
                                            {rate.routeType}
                                        </td>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700">
                                            {rate.ratePerMile}
                                        </td>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700">
                                            {rate.averageLoadValue}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

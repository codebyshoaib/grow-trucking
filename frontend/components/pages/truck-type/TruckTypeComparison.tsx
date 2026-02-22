'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeComparisonProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeComparison Component
 * Displays comparison table with other truck types
 */
export default function TruckTypeComparison({ truckType }: TruckTypeComparisonProps) {
    if (!truckType.comparisonTable || truckType.comparisonTable.length === 0) {
        return null
    }

    // Get all unique other types from comparison rows
    const otherTypes = new Set<string>()
    truckType.comparisonTable.forEach(row => {
        Object.keys(row.otherTypes).forEach(type => otherTypes.add(type))
    })
    const otherTypesArray = Array.from(otherTypes)

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-6xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        COMPARISON
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        {truckType.displayName} vs. Other Trailer Types
                    </h2>

                    {truckType.comparisonDescription && (
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                            {truckType.comparisonDescription}
                        </p>
                    )}

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-md border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                        Feature
                                    </th>
                                    <th className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider">
                                        {truckType.name}
                                    </th>
                                    {otherTypesArray.map((type, index) => (
                                        <th
                                            key={index}
                                            className="px-4 py-3 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold uppercase tracking-wider"
                                        >
                                            {type}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {truckType.comparisonTable.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-medium text-secondary">
                                            {row.feature}
                                        </td>
                                        <td className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700 font-semibold">
                                            {row.currentType}
                                        </td>
                                        {otherTypesArray.map((type, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="px-4 py-3 sm:px-6 sm:py-4 text-sm sm:text-base text-gray-700"
                                            >
                                                {row.otherTypes[type] || '-'}
                                            </td>
                                        ))}
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

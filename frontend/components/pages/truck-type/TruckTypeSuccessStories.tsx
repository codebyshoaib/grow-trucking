'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Quote } from 'lucide-react'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypeSuccessStoriesProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypeSuccessStories Component
 * Displays customer success stories/testimonials
 */
export default function TruckTypeSuccessStories({ truckType }: TruckTypeSuccessStoriesProps) {
    if (!truckType.successStories || truckType.successStories.length === 0) {
        return null
    }

    return (
        <section className="py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <Badge className="mb-3 sm:mb-4 md:mb-6 text-xs sm:text-sm">
                        SUCCESS STORIES
                    </Badge>

                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-secondary mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-tight">
                        Success Stories
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {truckType.successStories.map((story, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-lg shadow-md p-6 sm:p-8 border-l-4 border-primary"
                            >
                                <div className="flex items-start gap-3 sm:gap-4 mb-4">
                                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                                    </div>
                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed italic flex-1">
                                        "{story.quote}"
                                    </p>
                                </div>
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                    <p className="text-sm sm:text-base font-semibold text-secondary">
                                        {story.author}
                                    </p>
                                    {story.equipment && (
                                        <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                            {story.equipment}
                                        </p>
                                    )}
                                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                                        {story.location}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Target, BookOpen, MessageSquare, TrendingUp } from 'lucide-react'

/**
 * WhatWeValue Component
 * Shows the values and qualities Grow Trucking looks for
 */
export default function WhatWeValue() {
    const values = [
        {
            icon: Target,
            title: 'Results-Driven Mindset',
            description: 'We reward people who take ownership, set ambitious goals, and do what it takes to hit them.'
        },
        {
            icon: BookOpen,
            title: 'Industry Knowledge',
            description: 'Understanding trucking, freight, and dispatch gives you a major edge in serving our clients.'
        },
        {
            icon: MessageSquare,
            title: 'Communication Excellence',
            description: 'Our business runs on clear, professional, and timely communication — with clients and with the team.'
        },
        {
            icon: TrendingUp,
            title: 'Hunger to Grow',
            description: 'Whether it\'s your first sales job or your tenth, we want people who are always looking to level up.'
        }
    ]

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                            What We Value in Our Team
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-primary/30"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl sm:text-2xl font-bold text-secondary mb-2 sm:mb-3">
                                                {value.title}
                                            </h3>
                                            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                {value.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

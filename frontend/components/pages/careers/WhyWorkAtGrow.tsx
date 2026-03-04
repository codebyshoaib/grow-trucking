import React from 'react'
import { Rocket, Globe, TrendingUp, Users, BookOpen, Trophy } from 'lucide-react'

/**
 * WhyWorkAtGrow Component
 * Benefits section explaining why to work at Grow Trucking
 */
export default function WhyWorkAtGrow() {
    const benefits = [
        {
            icon: Rocket,
            title: 'High Earning Potential',
            description: 'Base salary + uncapped commission. Top performers earn $4,000–$6,000/month.'
        },
        {
            icon: Globe,
            title: 'Remote-Friendly',
            description: 'Work from anywhere in the U.S. with full team support and the tools you need to succeed.'
        },
        {
            icon: TrendingUp,
            title: 'Real Growth Path',
            description: 'Clear career progression from Sales Executive to Senior Dispatcher to Team Lead.'
        },
        {
            icon: Users,
            title: 'Supportive Team Culture',
            description: 'We invest in your success with mentorship, training, and a team that has your back.'
        },
        {
            icon: BookOpen,
            title: 'Ongoing Training',
            description: 'Access to internal resources, tools, and our dispatch training library to sharpen your skills.'
        },
        {
            icon: Trophy,
            title: 'Performance Recognition',
            description: 'Monthly bonuses, leaderboards, and shout-outs for top performers. Results get noticed here.'
        }
    ]

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                        Why Work at Grow Trucking?
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Grow Trucking is more than a dispatch company — we are a growth partner for owner-operators and fleets across the United States. When you join our team, you become part of a fast-moving, revenue-focused organization where your skills, effort, and results are recognized and rewarded.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
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
                                            {benefit.title}
                                        </h3>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

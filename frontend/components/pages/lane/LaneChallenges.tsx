'use client'

import React from 'react'
import { AlertTriangle, AlertCircle, AlertOctagon } from 'lucide-react'
import type { LaneEntity } from '@/types/state.types'
import { Badge } from '@/components/ui/badge'

interface LaneChallengesProps {
    lane: LaneEntity
}

/**
 * LaneChallenges Component
 * Colored card design matching reference style
 */
export default function LaneChallenges({ lane }: LaneChallengesProps) {
    const challenges = lane.challenges || []

    if (challenges.length === 0) return null

    // Challenge icons and colors
    const challengeConfig = [
        { icon: AlertTriangle, color: 'bg-orange-500', text: 'Long Distance Planning' },
        { icon: AlertCircle, color: 'bg-blue-500', text: 'Weather Considerations' },
        { icon: AlertOctagon, color: 'bg-green-500', text: 'Fuel Cost Management' },
    ]

    // Get up to 3 challenges
    const displayChallenges = challenges.slice(0, 3)

    return (
        <>
            <style jsx>{`
                .flip-card-container {
                    perspective: 1000px;
                }
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    transition: transform 0.7s;
                    transform-style: preserve-3d;
                }
                .flip-card-container:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                .flip-card-front,
                .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                .flip-card-back {
                    transform: rotateY(180deg);
                }
            `}</style>
            <section className="py-12 md:py-16 lg:py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto text-center">
                        {/* Subheading */}
                        <Badge className="mb-6">
                            CHALLENGES & SOLUTIONS
                        </Badge>

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-12 sm:mb-16">
                            Common Challenges
                        </h2>

                        {/* Three Colored Cards with Flip Effect */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {displayChallenges.map((challenge, index) => {
                                const config = challengeConfig[index % challengeConfig.length]
                                const IconComponent = config.icon
                                const challengeTitle = challenge.split('.')[0] || challenge.substring(0, 30).toUpperCase() || config.text
                                const challengeDescription = challenge.length > 50
                                    ? challenge
                                    : 'Understanding and preparing for this challenge helps optimize your operations and maximize profitability on this lane.'

                                return (
                                    <div
                                        key={index}
                                        className="flip-card-container min-h-[280px] lg:min-h-[320px]"
                                    >
                                        <div className="flip-card-inner">
                                            {/* Front Face */}
                                            <div className={`flip-card-front ${config.color} rounded-lg p-8 lg:p-12 flex flex-col items-center justify-center text-center`}>
                                                {/* Icon */}
                                                <div className="mb-6">
                                                    <IconComponent className="w-16 h-16 lg:w-20 lg:h-20 text-white stroke-2" />
                                                </div>

                                                {/* Title */}
                                                <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold uppercase mb-4 tracking-wide">
                                                    {challengeTitle}
                                                </h3>

                                                {/* Separator Line */}
                                                <div className="w-16 h-0.5 bg-white"></div>
                                            </div>

                                            {/* Back Face */}
                                            <div className={`flip-card-back ${config.color} rounded-lg p-8 lg:p-12 flex flex-col items-center justify-center text-center`}>
                                                <p className="text-white text-base sm:text-lg leading-relaxed">
                                                    {challengeDescription}
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
        </>
    )
}

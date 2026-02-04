'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface CTASectionProps {
    headline?: string
    description?: string
    buttonText?: string
    buttonLink?: string
}

export default function CTASection({
    headline = "Ready to Supercharge Your Business with Truck Dispatch",
    description = "Unlock AI-powered insights, improve operational efficiency, and drive revenue growth effortlessly. Start your free consultation today!",
    buttonText = "Get Started Now",
    buttonLink = "#"
}: CTASectionProps) {
    return (
        <section className="relative w-full py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
            {/* Dark background container with rounded corners */}
            <div className="relative max-w-7xl mx-auto bg-black rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-primary" />

                {/* Abstract wave shapes - Left side */}
                <div className="absolute left-0 bottom-0 w-1/3 h-full opacity-40 pointer-events-none overflow-hidden animate-gentle-pulse">
                    <svg
                        className="absolute bottom-0 left-0 w-full h-full"
                        viewBox="0 0 500 700"
                        preserveAspectRatio="none"
                    >
                        {/* Outer dark brown curve layer 1 */}
                        <path
                            d="M0,700 Q80,500 120,400 Q180,250 250,200 Q350,120 500,0 L500,700 Z"
                            fill="oklch(0.15 0.03 25)"
                            opacity="0.7"
                        />
                        {/* Outer dark brown curve layer 2 */}
                        <path
                            d="M0,700 Q100,450 140,350 Q200,200 270,150 Q380,80 500,0 L500,700 Z"
                            fill="oklch(0.18 0.04 28)"
                            opacity="0.5"
                        />
                        {/* Inner glowing orange curve */}
                        <path
                            d="M0,700 Q90,480 130,380 Q190,230 260,180 Q360,100 500,0 L500,700 Z"
                            fill="url(#orangeGradientLeft)"
                            opacity="0.5"
                        />
                        <defs>
                            <linearGradient id="orangeGradientLeft" x1="0%" y1="100%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#F48120" stopOpacity="0.9" />
                                <stop offset="50%" stopColor="#F48120" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#F48120" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Abstract wave shapes - Right side */}
                <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-40 pointer-events-none overflow-hidden animate-gentle-pulse-delayed">
                    <svg
                        className="absolute bottom-0 right-0 w-full h-full"
                        viewBox="0 0 500 700"
                        preserveAspectRatio="none"
                    >
                        {/* Outer dark brown curve layer 1 */}
                        <path
                            d="M500,700 Q420,500 380,400 Q320,250 250,200 Q150,120 0,0 L0,700 Z"
                            fill="oklch(0.15 0.03 25)"
                            opacity="0.7"
                        />
                        {/* Outer dark brown curve layer 2 */}
                        <path
                            d="M500,700 Q400,450 360,350 Q300,200 230,150 Q120,80 0,0 L0,700 Z"
                            fill="oklch(0.18 0.04 28)"
                            opacity="0.5"
                        />
                        {/* Inner glowing orange curve */}
                        <path
                            d="M500,700 Q410,480 370,380 Q310,230 240,180 Q140,100 0,0 L0,700 Z"
                            fill="url(#orangeGradientRight)"
                            opacity="0.6"
                        />
                        {/* Fiery streak effect at bottom right */}
                        <path
                            d="M450,650 Q400,550 350,450 Q280,300 200,200 Q120,100 50,50"
                            stroke="url(#orangeGradientStreak)"
                            strokeWidth="4"
                            fill="none"
                            opacity="0.7"
                        />
                        <defs>
                            <linearGradient id="orangeGradientRight" x1="100%" y1="100%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="#F48120" stopOpacity="1" />
                                <stop offset="50%" stopColor="#F48120" stopOpacity="0.7" />
                                <stop offset="100%" stopColor="#F48120" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="orangeGradientStreak" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#F48120" stopOpacity="1" />
                                <stop offset="30%" stopColor="#FF9500" stopOpacity="0.9" />
                                <stop offset="70%" stopColor="#FFB84D" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#F48120" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20 text-center">
                    {/* Headline */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
                        {headline}
                    </h2>

                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 max-w-3xl mx-auto px-2">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex justify-center">
                        {buttonLink.startsWith('http') || buttonLink.startsWith('mailto:') || buttonLink.startsWith('tel:') ? (
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-b from-[#F48120] to-[#D66A00] hover:from-[#FF9500] hover:to-[#F48120] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-[0_20px_40px_rgba(244,129,32,0.4)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <a href={buttonLink} target={buttonLink.startsWith('http') ? '_blank' : undefined} rel={buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined} className="flex items-center justify-center gap-2">
                                    {buttonText}
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>
                        ) : (
                            <Button
                                asChild
                                size="lg"
                                className="bg-gradient-to-b from-[#F48120] to-[#D66A00] hover:from-[#FF9500] hover:to-[#F48120] text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-2xl hover:shadow-[0_20px_40px_rgba(244,129,32,0.4)] hover:-translate-y-1 transition-all duration-300"
                            >
                                <Link href={buttonLink} className="flex items-center justify-center gap-2">
                                    {buttonText}
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

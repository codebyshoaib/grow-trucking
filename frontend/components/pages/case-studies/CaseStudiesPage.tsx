'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Search, Phone, FileText, FileText as CaseStudyIcon, TrendingUp as GrowthIcon, DollarSign, TrendingDown, ChevronLeft, ChevronRight } from 'lucide-react'
import { caseStudies, type CaseStudy } from '@/constants/case-studies.config'
import CTASection from '../about/CTASection'

export default function CaseStudiesPage() {
    const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState(0)

    const featuredStudies = caseStudies.filter(cs => cs.featured)

    const nextFeatured = () => {
        setCurrentFeaturedIndex((prev) => (prev + 1) % featuredStudies.length)
    }

    const prevFeatured = () => {
        setCurrentFeaturedIndex((prev) => (prev - 1 + featuredStudies.length) % featuredStudies.length)
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{
                        backgroundImage: 'url(/about-partners/JBhunt-growtrucking-logistics-partner-usa.webp.webp)'
                    }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight">
                            Driver Success Case Studies
                        </h1>
                        <p className="text-xl md:text-2xl font-bold mb-2 text-gray-200">
                            15 Real Stories. Real Results. Real Revenue.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                            <Button size="lg" className="text-lg px-8 py-6" asChild>
                                <Link href="/contact">
                                    Get a Free Lane Audit
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-transparent border-white text-white hover:bg-white hover:text-gray-900" asChild>
                                <Link href="/contact">
                                    <Phone className="mr-2 w-5 h-5" />
                                    Schedule a Call
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description & Stats Section */}
            <section className="bg-gray-50 py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-base md:text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
                            At Grow Trucking Dispatch, we believe every driver deserves maximum earning potential.
                            These 15 case studies represent real owner-operators and small fleet drivers who came to us
                            facing financial hardship, isolation, and burnout — and left with more money, more time, and more confidence.
                        </p>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                            <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-blue-500 rounded-lg p-3">
                                        <CaseStudyIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-4xl md:text-5xl font-black mb-2 text-gray-900">15</div>
                                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Case Studies</div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-8 border border-green-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-green-500 rounded-lg p-3">
                                        <GrowthIcon className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-4xl md:text-5xl font-black mb-2 text-green-600">+127%</div>
                                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Avg RPM Increase</div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-primary rounded-lg p-3">
                                        <DollarSign className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-4xl md:text-5xl font-black mb-2 text-primary">+$4.2K</div>
                                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Avg Revenue Lift</div>
                            </div>

                            <div className="group relative bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-8 border border-purple-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="bg-purple-500 rounded-lg p-3">
                                        <TrendingDown className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-2 h-2 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="text-4xl md:text-5xl font-black mb-2 text-purple-600">-68%</div>
                                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Empty Miles Reduced</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Featured Case Studies Carousel */}
            {featuredStudies.length > 0 && (
                <section className="py-16 bg-gray-50">
                    <div className="flex flex-col items-center justify-center container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                        <Badge className="mb-4">Featured</Badge>
                        <h2 className="text-4xl md:text-5xl font-black text-secondary mb-8">Featured Case Studies</h2>
                        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl text-center">
                            These are the stories of drivers who have taken control of their earnings, fuel savings, and home time. See how they did it.
                        </p>

                        <div className="relative w-full max-w-[95%] mx-auto">
                            {/* Carousel Container */}
                            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                                {featuredStudies.map((study, index) => {
                                    const isActive = index === currentFeaturedIndex
                                    return (
                                        <div
                                            key={study.id}
                                            className={`absolute inset-0 transition-all duration-700 ease-in-out ${isActive
                                                ? 'opacity-100 translate-x-0 z-10'
                                                : index < currentFeaturedIndex
                                                    ? 'opacity-0 -translate-x-full z-0'
                                                    : 'opacity-0 translate-x-full z-0'
                                                }`}
                                        >
                                            {/* Background Image */}
                                            <div
                                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                                style={{
                                                    backgroundImage: 'url(/about-partners/JBhunt-growtrucking-logistics-partner-usa.webp.webp)'
                                                }}
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/75 to-gray-900/80" />

                                            {/* Content */}
                                            <div className="relative z-10 h-full flex flex-col justify-center p-8 md:p-12 lg:p-32 text-white">
                                                <div className="max-w-2xl">
                                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 uppercase tracking-tight">
                                                        {study.driverName}
                                                    </h3>
                                                    <p className="text-lg md:text-xl text-gray-300 mb-6">
                                                        {study.lane} • {study.equipmentBadge}
                                                    </p>

                                                    <div className="mb-6">
                                                        <div className="text-3xl md:text-4xl font-black text-green-400 mb-2">
                                                            {study.revenueIncrease}
                                                        </div>
                                                        <div className="text-base md:text-lg text-gray-300 mb-4">
                                                            RPM: {study.rpmBefore} → <span className="font-semibold text-white">{study.rpmAfter}/mile</span>
                                                        </div>
                                                        <p className="text-base md:text-lg text-gray-300">
                                                            {study.summary}
                                                        </p>
                                                    </div>

                                                    <Link
                                                        href={`/case-studies/${study.slug}`}
                                                        className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-gray-200 transition-colors underline"
                                                    >
                                                        Read Full Case Study
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            {/* Navigation Buttons */}
                            <button
                                onClick={prevFeatured}
                                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                                aria-label="Previous case study"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={nextFeatured}
                                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-900 rounded-full p-3 shadow-lg hover:shadow-xl transition-all"
                                aria-label="Next case study"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex justify-center gap-2 mt-6">
                                {featuredStudies.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentFeaturedIndex(index)}
                                        className={`h-2 rounded-full transition-all ${index === currentFeaturedIndex
                                            ? 'w-8 bg-primary'
                                            : 'w-2 bg-gray-300 hover:bg-gray-400'
                                            }`}
                                        aria-label={`Go to case study ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Case Studies Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">All Case Studies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {caseStudies.map((study) => (
                            <CaseStudyCard key={study.id} study={study} />
                        ))}
                    </div>
                </div>
            </section>
            <CTASection />
        </main>
    )
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
    return (
        <Card className="hover:shadow-xl transition-all duration-300 border border-gray-200 h-full flex flex-col">
            <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{study.driverName}</h3>
                    <p className="text-sm text-gray-600 mb-3">{study.lane}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className="bg-gray-100 text-gray-800">
                            {study.equipmentBadge}
                        </Badge>
                        <Badge className="bg-green-100 text-green-800 border-green-200">
                            {study.outcome}
                        </Badge>
                    </div>
                </div>

                <div className="mb-4 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <span className="text-2xl font-black text-green-600">{study.revenueIncrease}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">RPM:</span> {study.rpmBefore} → <span className="font-bold text-gray-900">{study.rpmAfter}/mile</span>
                    </div>
                    <p className="text-sm text-gray-700">{study.summary}</p>
                </div>

                <Link
                    href={`/case-studies/${study.slug}`}
                    className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-2 mt-auto"
                >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </CardContent>
        </Card>
    )
}

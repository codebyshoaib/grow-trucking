'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, TrendingUp, Phone, ArrowRight, Gauge, Package, Rocket } from 'lucide-react'
import type { CaseStudy } from '@/constants/case-studies.config'

interface CaseStudyDetailProps {
    caseStudy: CaseStudy
}

// Map case study IDs to images from the case-studies folder
const getCaseStudyImage = (id: string): string => {
    const imageMap: Record<string, string> = {
        '1': '/case-studies/truck1.webp',
        '2': '/case-studies/truck2.webp',
        '3': '/case-studies/truck3.webp',
        '4': '/case-studies/truck5.webp',
        '5': '/case-studies/truck6.webp',
        '6': '/case-studies/truck7.webp',
        '7': '/case-studies/truck8.webp',
        '8': '/case-studies/truck9.webp',
        '9': '/case-studies/truck11.webp',
        '10': '/case-studies/truck5.webp',
        '11': '/case-studies/truck3.webp',
        '12': '/case-studies/truck9.webp',
        '13': '/case-studies/truck5.webp',
        '14': '/case-studies/truck8.webp',
        '15': '/case-studies/truck6.webp',
    }
    return imageMap[id] || '/case-studies/truck1.webp'
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 md:py-24 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
                    style={{
                        backgroundImage: `url(${getCaseStudyImage(caseStudy.id)})`
                    }}
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/50" />

                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
                    <div className="max-w-4xl relative z-10">
                        <Badge className="bg-secondary text-white border border-white/30 mb-8">
                            Case Study #{caseStudy.id}
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 uppercase tracking-tight">
                            {caseStudy.driverName}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-6">
                            {caseStudy.freightLane} • {caseStudy.equipmentBadge}
                        </p>
                        <div className="flex flex-wrap gap-3 mb-8">
                            <p className="text-xl md:text-2xl text-gray-200 font-bold">
                                {caseStudy.equipmentType} • {caseStudy.outcome} • {caseStudy.region}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Metrics Banner */}
            <section className="bg-white py-12 border-b">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Revenue Impact Box */}
                        <div className="bg-white rounded-lg p-6 border border-gray-400">
                            <div className="flex items-center justify-center mb-3 bg-primary w-fit rounded-lg p-2 mx-auto">
                                <TrendingUp className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-green-600 mb-2 text-center">
                                {caseStudy.revenueIncrease}
                            </div>
                            <div className="text-sm text-gray-600 text-center">Revenue Impact</div>
                        </div>

                        {/* RPM Before Box */}
                        <div className="bg-white rounded-lg p-6 border border-gray-400">
                            <div className="flex items-center justify-center mb-3 bg-primary w-fit rounded-lg p-2 mx-auto">
                                <Gauge className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-secondary mb-2 text-center">
                                {caseStudy.rpmBefore}
                            </div>
                            <div className="text-sm text-gray-600 text-center">RPM Before</div>
                        </div>

                        {/* RPM After Box */}
                        <div className="bg-white rounded-lg p-6 border border-gray-400">
                            <div className="flex items-center justify-center mb-3 bg-primary w-fit rounded-lg p-2 mx-auto">
                                <Rocket className="w-12 h-12 text-white" />
                            </div>
                            <div className="text-3xl md:text-4xl font-black text-primary mb-2 text-center">
                                {caseStudy.rpmAfter}
                            </div>
                            <div className="text-sm text-gray-600 text-center">RPM After</div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                    <div className="max-w-4xl mx-auto">
                        {/* The Challenge */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">The Challenge</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
                            </div>
                        </div>

                        {/* Grow Trucking Solution */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">Grow Trucking Solution</h2>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-lg text-gray-700 leading-relaxed">{caseStudy.solution}</p>
                            </div>
                        </div>

                        {/* Route Optimization */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">Route Optimization</h2>
                            <Card className="bg-blue-50 border-blue-200">
                                <CardContent className="p-6">
                                    <p className="text-base md:text-lg text-gray-800 leading-relaxed">{caseStudy.routeOptimization}</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Results at a Glance */}
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-4xl font-black text-secondary mb-6">Results at a Glance</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Metric</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-gray-900">Before Grow Trucking</th>
                                            <th className="border border-gray-300 px-4 py-3 text-left font-bold text-primary">After Grow Trucking</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {caseStudy.metrics.map((metric, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{metric.label}</td>
                                                <td className="border border-gray-300 px-4 py-3 text-gray-700">{metric.before}</td>
                                                <td className="border border-gray-300 px-4 py-3 font-semibold text-primary">{metric.after}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 mb-12">
                            <CardContent className="p-8 text-center">
                                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">
                                    Ready to Write Your Success Story?
                                </h3>
                                <p className="text-lg text-gray-700 mb-6">
                                    Join {caseStudy.driverName} and hundreds of other drivers earning more with Grow Trucking Dispatching.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="text-lg px-8" asChild>
                                        <Link href="/contact">
                                            Get a Free Lane Audit
                                            <ArrowRight className="ml-2 w-5 h-5" />
                                        </Link>
                                    </Button>
                                    <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                                        <Link href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}`}>
                                            <Phone className="mr-2 w-5 h-5" />
                                            Call {process.env.NEXT_PUBLIC_COMPANY_PHONE_NUMBER}
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Back to Case Studies */}
                        <div className="text-center">
                            <Link
                                href="/case-studies"
                                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                View All Case Studies
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

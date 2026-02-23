'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, TrendingUp, Shield, Clock, DollarSign, FileCheck, Users, Route, ClipboardList } from 'lucide-react'

const features = [
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: 'Dedicated Personal Dispatcher',
        description: 'Get exclusive attention from a dedicated professional who knows your business inside and out'
    },
    {
        icon: <Clock className="w-6 h-6 text-primary" />,
        title: '24/7 Dispatch and Weekend Support',
        description: 'Round-the-clock assistance whenever you need it, including weekends and holidays'
    },
    {
        icon: <TrendingUp className="w-6 h-6 text-primary" />,
        title: 'High-Paying Load Strategy & Route Optimization',
        description: 'Maximize revenue per mile with strategic load selection and optimized routing'
    },
    {
        icon: <FileCheck className="w-6 h-6 text-primary" />,
        title: 'IFTA Reporting & Compliance Services',
        description: 'Stay compliant with comprehensive reporting and regulatory support'
    },
    {
        icon: <DollarSign className="w-6 h-6 text-primary" />,
        title: 'QuickBooks Bookkeeping Integration',
        description: 'Professional financial management tailored for trucking businesses'
    },
    {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: 'Fleet Management System & ELD Monitoring',
        description: 'Centralized control and real-time monitoring for your entire fleet'
    },
    {
        icon: <ClipboardList className="w-6 h-6 text-primary" />,
        title: 'Shipper Credit Checks and Paperwork Management',
        description: 'Protect your business with credit verification and streamlined documentation'
    },
    {
        icon: <Shield className="w-6 h-6 text-primary" />,
        title: 'Audit Assistance and Carrier Security',
        description: 'Expert support during audits and comprehensive security compliance'
    },
    {
        icon: <Route className="w-6 h-6 text-primary" />,
        title: 'Customized Business Growth Roadmap',
        description: 'Strategic planning tailored to your specific business goals and market position'
    }
]

export default function WhyCarrierOwners() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-24">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16">
                    <Badge className="mb-4">WHY CARRIER OWNERS CHOOSE US</Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                        Why Carrier Owners Choose Grow Trucking
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        Grow Trucking delivers trucking and dispatching services that go beyond just booking loads — we provide strategic support to grow your profit per mile, maintain compliance, optimize routes, manage fleets, and protect your authority. Our approach covers every key aspect that truckers frequently search for when looking for a professional dispatcher.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border-2 border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                                    {feature.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg md:text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

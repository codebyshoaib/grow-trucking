import React from 'react'
import { ArrowRight } from 'lucide-react'

/**
 * CareerGrowthPath Component
 * Shows the career progression path at Grow Trucking
 */
export default function CareerGrowthPath() {
    const steps = [
        {
            step: 'STEP 1',
            title: 'Truck Dispatching Sales Executive',
            level: 'Entry Level',
            duration: ''
        },
        {
            step: 'STEP 2',
            title: 'Senior Sales Executive',
            level: '6–12 Months',
            duration: ''
        },
        {
            step: 'STEP 3',
            title: 'Dispatch Team Lead',
            level: '1–2 Years',
            duration: ''
        },
        {
            step: 'STEP 4',
            title: 'Sales Manager',
            level: '2–3 Years',
            duration: ''
        },
        {
            step: 'STEP 5',
            title: 'Operations Director',
            level: '3+ Years',
            duration: ''
        }
    ]

    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary mb-4 sm:mb-6">
                            Career Growth Path at Grow Trucking
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                            We believe in promoting from within. Every Sales Executive who joins Grow Trucking has a clearly defined path to grow with us. Here is what your career journey can look like:
                        </p>
                    </div>

                    {/* Desktop View - Horizontal Flow */}
                    <div className="hidden lg:block">
                        <div className="flex items-center justify-between gap-4">
                            {steps.map((step, index) => (
                                <React.Fragment key={index}>
                                    <div className="flex-1 text-center">
                                        <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                                            <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                                                {step.step}
                                            </div>
                                            <h3 className="text-lg font-bold text-secondary mb-2">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {step.level}
                                            </p>
                                        </div>
                                    </div>
                                    {index < steps.length - 1 && (
                                        <ArrowRight className="w-6 h-6 text-primary flex-shrink-0" />
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Mobile/Tablet View - Vertical Flow */}
                    <div className="lg:hidden space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex-1 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border-2 border-primary/20">
                                    <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-secondary mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {step.level}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 rotate-90" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

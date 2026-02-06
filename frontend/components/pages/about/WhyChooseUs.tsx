import { Badge } from '@/components/ui/badge'
import React from 'react'
import { Handshake, MapPin, Lightbulb } from 'lucide-react'

const features = [
    {
        icon: <Handshake className="w-6 h-6 text-primary" />,
        title: "Create The Best Strategy",
        description: "We Provide Strategic Business Consultation: We offer 5+ years of real-world expertise and a comprehensive Business Audit"
    },
    {
        icon: <MapPin className="w-6 h-6 text-primary" />,
        title: "Give The Best Solution",
        description: "We Deliver Guaranteed Profit Strategy: We eliminate Revenue Leaks and build a custom 90Day Growth Plan with a clear profit target,backed by our Growth or Your Money Back Guarantee"
    },
    {
        icon: <Lightbulb className="w-6 h-6 text-primary" />,
        title: "Growing Up the Ideas",
        description: "We Handle Compliance and Administration: We manage complex tasks like paperwork, Shipper Credit Checks, and rate negotiation, freeing you to focus on the road and sustainable GROWTH"
    }
]

export default function WhyChooseUs() {
    return (
        <section className="flex flex-col items-start sm:items-center bg-gray-100 justify-center py-16 sm:py-20 md:py-24 px-6 md:px-24">
            <div><Badge className="mb-4">WHY CHOOSE US</Badge></div>
            <div className="text-left sm:text-center max-w-4xl mb-12">
                <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                    Your Success is Our Success
                </h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                    We provide the Strategic Infrastructure to
                    transform your authority into a high
                    performance business, allowing you to
                    effectively compete against much larger
                    fleets and brokers. Our goal is to help you
                    GROW your profitability and operational
                    capability to a competitive leve
                </p>
            </div>

            {/* Icon Section */}
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center bg-white rounded-2xl border border-primary/40 p-6 lg:p-8">
                            <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

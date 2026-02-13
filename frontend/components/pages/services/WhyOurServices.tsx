import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowUpRight, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const reasons = [
    {
        id: 1,
        title: "Expert Dispatching",
        description: "Grow Trucking's dispatchers are experts in finding the most profitable loads for your fleet, with 10+ years of experience in the US freight market."
    },
    {
        id: 2,
        title: "Reliable Support",
        description: "Grow Trucking provides 24/7 support to ensure your dispatch operations run smoothly. We handle paperwork and broker communications so you can focus on driving."
    },
    {
        id: 3,
        title: "Flexible Operations",
        description: "Grow Trucking works with owner-operators and small fleets of any size. We adapt our services to your specific needs and operational requirements."
    },
    {
        id: 4,
        title: "Scalable Solutions",
        description: "As your business grows, Grow Trucking scales with you. From single trucks to expanding fleets, we provide solutions that grow with your operation."
    },
    {
        id: 5,
        title: "Compliance First",
        description: "Grow Trucking ensures all loads and carriers meet safety and regulatory standards. We handle compliance so you don't have to worry about violations."
    },
    {
        id: 6,
        title: "Data-Driven Insights",
        description: "Grow Trucking provides free Carrier Profitability Audits and Growth Checklists to identify revenue opportunities and maximize your profit per mile."
    },

]
export default function WhyOurServices() {
    return (
        <section className="bg-white py-16 sm:py-20 md:py-24">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">

                    {/* Left: Copy (sticky on desktop) */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                        <Badge className="mb-4">WHY CHOOSE OUR SERVICES</Badge>

                        <h2 className="uppercase text-4xl md:text-5xl font-extrabold text-secondary leading-tight">
                            Your Success is Our Success
                        </h2>

                        <p className="mt-5 text-gray-600 leading-relaxed">
                            Grow Trucking combines experienced dispatching, real-time support, and compliance-first processes
                            to keep your fleet profitable and stress-free. With 10+ years of market experience, we help you compete with larger fleets.
                        </p>

                        <Button className="mt-4" size="lg" icon={<PhoneCall className="w-5 h-5" />} iconPosition="left">
                            <Link href="/contact">Contact Us Now</Link>
                        </Button>
                    </div>

                    {/* Right: Features (2 columns) */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {reasons.map((reason) => (
                                <div
                                    key={reason.id}
                                    className="
                      group rounded-2xl border border-gray-200 bg-white p-6
                      transition-all duration-300
                      hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg
                    "
                                >
                                    <div className="flex items-start gap-4">
                                        <div
                                            className="
                          flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
                          bg-primary/10 text-primary ring-1 ring-primary/15
                          transition-all duration-300
                          group-hover:bg-primary group-hover:text-white group-hover:ring-primary/40
                        "
                                        >
                                            <ArrowUpRight className="h-5 w-5" />
                                        </div>

                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                                {reason.title}
                                            </h3>
                                            <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-gray-600">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* subtle footer line */}
                        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                    </div>
                </div>
            </div>
        </section>
    )
}


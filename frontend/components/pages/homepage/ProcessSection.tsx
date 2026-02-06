'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const steps = [
    {
        number: "01",
        title: "Customized Dispatch For Trucks",
        description: "When you become a Resolute Logistics family member, our team takes special care of your paperwork, preferences, goals and capacity choosing the best way to boost your business."
    },
    {
        number: "02",
        title: "Dedicated Assistance",
        description: "Once you're set up with our company, you'll get your personal dispatcher who's going to plan your routes from A to Z. Our specialist will come to your assistance at any time of the day or night until the job is done."
    },
    {
        number: "03",
        title: "Best Possible Rates",
        description: "Our freight dispatchers grab a load based only on your preferences. Negotiating with brokers, our team will get you the best rates and schedule your trips as far ahead as possible."
    },
    {
        number: "04",
        title: "Set-Up Paperwork",
        description: "When you confirm that you are happy with our dispatching services, your dispatcher takes care of all the necessary paperwork for you to be focused only on the road."
    },
    {
        number: "05",
        title: "Streamlined Payments",
        description: "When the load is delivered to the final destination, your personal truck dispatcher collects and submits all the paperwork to brokers and factoring companies portals for you to get your money asap and enjoy your time off."
    },
    {
        number: "06",
        title: "End-To-End Support",
        description: "In case of any disputes or conflicts with brokers/shippers/receivers/factoring and insurance companies, our truck dispatch company is always ready to help you out with making a well-weighted decision."
    }
]

export default function ProcessSection() {
    const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
    if (!videoUrl) {
        return null;
    }

    return (
        <section className="relative py-24 bg-secondary overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Content & Video */}
                    <div className="space-y-8">
                        <Badge>HOW IT WORKS</Badge>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            Our Simple Processes
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-white/90 leading-relaxed max-w-xl">
                            Our mission is to drive progress and enhance the lives of our customers by delivering superior products and services that exceed expectations.
                        </p>

                        {/* CTA Button */}
                        <Button
                            size="lg"
                            icon={<ArrowRight className="w-5 h-5" />}
                            iconPosition="right"
                        >
                            Get Started
                        </Button>

                        {/* Video Player Placeholder */}
                        <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/50 border border-white/10 mt-8">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    preload="none"
                                    src={videoUrl}
                                    className="w-full h-full object-cover"
                                >
                                    Your browser does not support the video tag.
                                </video>
                                <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center border-2 border-primary/50 cursor-pointer hover:bg-primary/30 transition-all group">
                                </div>
                            </div>
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/80 text-sm">
                                <Play className="w-4 h-4" />
                                <span> Watch Video</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Vertical Timeline */}
                    <div className="relative">
                        {/* Timeline Line - Dashed */}
                        <div
                            className="absolute left-6 top-0 bottom-0 w-0.5"
                            style={{
                                background: 'repeating-linear-gradient(to bottom, transparent, transparent 12px, rgba(255, 255, 255, 0.2) 12px, rgba(255, 255, 255, 0.2) 16px)',
                            }}
                        />

                        {/* Steps */}
                        <div className="space-y-16">
                            {steps.slice(0, 3).map((step, index) => (
                                <div key={index} className="relative pl-24">
                                    {/* Timeline Circle with Step Number */}
                                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_20px_rgba(244,129,32,0.3)]">
                                        <span className="text-sm font-black text-white">
                                            {step.number}
                                        </span>
                                    </div>

                                    {/* Step Content Box */}
                                    <div className="bg-white border-2 border-primary/30 rounded-2xl p-6 hover:border-primary hover:shadow-[0_0_30px_rgba(244,129,32,0.2)] transition-all duration-300 group">
                                        {/* Step Label */}
                                        <div className="inline-flex items-center gap-2 mb-4">
                                            <span className="text-xs font-black tracking-widest uppercase text-primary">
                                                STEP-{step.number}
                                            </span>
                                        </div>

                                        {/* Step Title */}
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>

                                        {/* Step Description */}
                                        <p className="text-gray-700 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

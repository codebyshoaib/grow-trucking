"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'

const specialities = [
    {
        id: 'box-truck',
        title: 'Box Truck',
        subtitle: 'Any type of 26\'L + * 96"W * 96"H (10K lbs+) trucks with LG',
        contentTitle: 'Box Truck Dispatch',
        description: 'Box trucks are essential for final-mile delivery and localized freight movements. We specialize in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'dry-van',
        title: 'Dry Van',
        subtitle: 'Any type of 48\'-53\' trucks',
        contentTitle: 'Dry Van',
        description: 'Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Our dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver\'s seat.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'reefer',
        title: 'Reefer',
        subtitle: 'Any type of trailer',
        contentTitle: 'Reefer Dispatch',
        description: 'Temperature-sensitive freight requires extra attention and care. Our dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'power-only',
        title: 'Power Only',
        subtitle: 'Both Day Cabs and OTR units',
        contentTitle: 'Power Only Dispatch',
        description: 'Maximize your versatility with our Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
        id: 'hotshot',
        title: 'Hotshot',
        subtitle: 'Any type of 40\'L+ (15K lbs+) trucks',
        contentTitle: 'Hotshot Dispatch',
        description: 'Hotshot trucking demands agility and quick response times. We excel at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.',
        image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
]

export default function SpecialitiesSection() {
    const [activeTab, setActiveTab] = useState(specialities[1].id)
    const activeData = specialities.find(s => s.id === activeTab) || specialities[1]

    return (
        <section className="relative min-h-[700px] overflow-hidden bg-white">
            {/* Dynamic Background Image */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeData.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={activeData.image}
                        alt="Truck Background"
                        className="w-full h-full object-cover grayscale"
                    />
                </motion.div>
            </AnimatePresence>

            <div className="flex flex-col lg:flex-row h-full relative z-10">

                {/* Left Side: Sidebar Tabs */}
                <div className="lg:w-[400px] bg-primary min-h-full py-12 lg:py-20">
                    <div className="flex flex-col">
                        {specialities.map((spec) => (
                            <button
                                key={spec.id}
                                onClick={() => setActiveTab(spec.id)}
                                className={`w-full text-right px-10 py-8 transition-all duration-300 flex flex-col items-end gap-1 group
                  ${activeTab === spec.id
                                        ? 'bg-black text-white'
                                        : 'text-black hover:bg-black/5'
                                    }`}
                            >
                                <span className={`text-2xl font-black uppercase tracking-tighter ${activeTab === spec.id ? 'text-primary' : ''}`}>
                                    {spec.title}
                                </span>
                                <span className={`text-[10px] max-w-[200px] leading-tight font-bold uppercase tracking-widest ${activeTab === spec.id ? 'text-gray-400' : 'text-black/60'}`}>
                                    {spec.subtitle}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Side: Content Area */}
                <div className="flex-grow p-8 lg:p-24 bg-white/80 lg:bg-transparent">
                    <div className="max-w-3xl">
                        <h2 className="text-sm font-black tracking-[0.3em] uppercase text-black mb-12">
                            Specialities
                        </h2>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeData.id}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.4 }}
                            >
                                <div className="mb-8">
                                    <h3 className="text-5xl lg:text-6xl font-black text-black mb-8 leading-none">
                                        {activeData.contentTitle}
                                    </h3>

                                    <p className="text-lg text-gray-700 leading-relaxed mb-12 border-l-4 border-primary pl-8">
                                        {activeData.description}
                                    </p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button
                                            size="lg"
                                            className="bg-black text-white hover:bg-primary hover:text-black font-black rounded-full px-10 py-7 uppercase tracking-tighter transition-all"
                                        >
                                            Start Trucking Dispatch
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            className="border-2 border-primary bg-primary/10 hover:bg-primary text-black font-black rounded-full px-10 py-7 uppercase tracking-tighter transition-all"
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </section>
    )
}

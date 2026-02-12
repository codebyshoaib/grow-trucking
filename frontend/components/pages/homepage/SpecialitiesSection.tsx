"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const specialities = [
    {
        id: "box-truck",
        title: "Box Truck",
        subtitle: "Any type of 26'L + * 96\"W * 96\"H (10K lbs+) trucks with LG",
        contentTitle: "Box Truck Dispatch",
        description:
            "Box trucks are essential for final-mile delivery and localized freight movements. We specialize in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.",
        image:
            "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg",
    },
    {
        id: "dry-van",
        title: "Dry Van",
        subtitle: "Any type of 48'-53' trucks",
        contentTitle: "Dry Van",
        description:
            "Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Our dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver's seat.",
        image:
            "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg",
    },
    {
        id: "reefer",
        title: "Reefer",
        subtitle: "Any type of trailer",
        contentTitle: "Reefer Dispatch",
        description:
            "Temperature-sensitive freight requires extra attention and care. Our dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.",
        image:
            "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg",
    },
    {
        id: "power-only",
        title: "Power Only",
        subtitle: "Both Day Cabs and OTR units",
        contentTitle: "Power Only Dispatch",
        description:
            "Maximize your versatility with our Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.",
        image:
            "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg",
    },
    {
        id: "hotshot",
        title: "Hotshot",
        subtitle: "Any type of 40'L+ (15K lbs+) trucks",
        contentTitle: "Hotshot Dispatch",
        description:
            "Hotshot trucking demands agility and quick response times. We excel at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.",
        image:
            "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg",
    },
]

export default function SpecialitiesSection() {
    const [activeTab, setActiveTab] = useState(specialities[1].id)

    const activeData = useMemo(
        () => specialities.find((s) => s.id === activeTab) || specialities[1],
        [activeTab]
    )

    // --- swipeable header helpers (mobile)
    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})

    useEffect(() => {
        // keep the active tab visible when user changes it
        tabRefs.current[activeTab]?.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
        })
    }, [activeTab])

    return (
        <section className="relative overflow-hidden bg-white py-12 lg:py-20">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    key={activeData.id}
                    src={activeData.image}
                    alt="Truck Background"
                    fill
                    className="object-cover grayscale opacity-10 transition-opacity duration-500"
                    loading="lazy"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
                {/* Section Header */}
                <div className="mb-12 lg:mb-16">
                    {/* Badge */}
                    <div className="mb-6">
                        <Badge>SPECIALITIES</Badge>
                    </div>

                    {/* Heading and Tabs Row */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
                        {/* Section Heading */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-black leading-tight tracking-tight">
                            Trucks We Dispatch
                        </h2>

                        {/* Controller Tabs - Next to Heading */}
                        <div className="flex-shrink-0">
                            {/* Mobile: horizontal swipe */}
                            <div
                                className="
                  flex lg:hidden
                  overflow-x-auto
                  snap-x snap-mandatory
                  gap-4
                  pb-2
                  [-ms-overflow-style:none] [scrollbar-width:none]
                  [&::-webkit-scrollbar]:hidden
                "
                            >
                                {specialities.map((spec) => {
                                    const isActive = activeTab === spec.id
                                    return (
                                        <button
                                            key={spec.id}
                                            ref={(el) => {
                                                tabRefs.current[spec.id] = el
                                            }}
                                            onClick={() => setActiveTab(spec.id)}
                                            className="snap-start shrink-0 relative pb-3 px-2"
                                        >
                                            <span className={`text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-gray-400"}`}>
                                                {spec.title}
                                            </span>
                                            {/* Underline - Only show for active tab on mobile */}
                                            {isActive && (
                                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary transition-colors" />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Desktop: horizontal tabs with continuous underline */}
                            <div className="hidden lg:flex items-center gap-6 xl:gap-8 relative pb-2">
                                {specialities.map((spec, index) => {
                                    const isActive = activeTab === spec.id

                                    return (
                                        <button
                                            key={spec.id}
                                            onClick={() => setActiveTab(spec.id)}
                                            className="relative pb-3 px-2 py-2"
                                        >
                                            <span className={`text-base font-medium transition-colors ${isActive ? "text-primary" : "text-gray-400"}`}>
                                                {spec.title}
                                            </span>
                                            {/* Active tab underline - extends to next tab */}
                                            {isActive && (
                                                <div
                                                    className="absolute top-0 left-0 h-0.5 bg-primary z-10"
                                                    style={{
                                                        width: index === specialities.length - 1
                                                            ? '100%'
                                                            : 'calc(100% + 1rem)'
                                                    }}
                                                />
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content - Two Column Layout */}
                <div className="mb-12 lg:mb-16">
                    <div key={activeData.id} className="animate-fade-in">
                        {/* Two Column Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                            {/* Left Column - Image */}
                            <div className="relative group">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white">
                                    <Image
                                        src={activeData.image}
                                        alt={activeData.title}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        width={800}
                                        height={600}
                                        priority
                                    />
                                    {/* Subtle overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>

                            {/* Right Column - Text and Buttons */}
                            <div className="">
                                {/* Title */}
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-black mb-6 lg:mb-8 leading-tight tracking-tight">
                                    {activeData.contentTitle}
                                </h3>

                                {/* Description with Accent Border */}
                                <div className="mb-8 lg:mb-10">
                                    <p className="text-sm sm:text-base lg:text-base text-gray-700 leading-relaxed">
                                        {activeData.description}
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                                    <Button
                                        size="lg"
                                        variant="default"
                                        className="uppercase tracking-tighter text-base sm:text-lg px-8 sm:px-10"
                                    >
                                        <Link href="/contact">Start Trucking Dispatch</Link>
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="border-2 border-primary bg-transparent text-black font-black uppercase tracking-tighter hover:bg-primary hover:text-white hover:border-primary text-base sm:text-lg px-8 sm:px-10"
                                    >
                                        <Link href="/about">Learn more</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const specialities = [
    {
        id: "box-truck",
        title: "Box Truck",
        subtitle: "Any type of 26'L + * 96\"W * 96\"H (10K lbs+) trucks with LG",
        contentTitle: "Box Truck Dispatch",
        description:
            "Box trucks are essential for final-mile delivery and localized freight movements. We specialize in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "dry-van",
        title: "Dry Van",
        subtitle: "Any type of 48'-53' trucks",
        contentTitle: "Dry Van",
        description:
            "Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Our dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver's seat.",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "reefer",
        title: "Reefer",
        subtitle: "Any type of trailer",
        contentTitle: "Reefer Dispatch",
        description:
            "Temperature-sensitive freight requires extra attention and care. Our dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "power-only",
        title: "Power Only",
        subtitle: "Both Day Cabs and OTR units",
        contentTitle: "Power Only Dispatch",
        description:
            "Maximize your versatility with our Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
        id: "hotshot",
        title: "Hotshot",
        subtitle: "Any type of 40'L+ (15K lbs+) trucks",
        contentTitle: "Hotshot Dispatch",
        description:
            "Hotshot trucking demands agility and quick response times. We excel at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.",
        image:
            "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
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
        <section className="relative overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    key={activeData.id}
                    src={activeData.image}
                    alt="Truck Background"
                    fill
                    className="object-cover grayscale opacity-15 transition-opacity duration-500"
                    loading="lazy"
                />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row">
                {/* Tabs */}
                <div className="lg:w-[400px] bg-primary">
                    {/* Mobile: horizontal swipe */}
                    <div
                        className="
              flex lg:hidden
              overflow-x-auto
              snap-x snap-mandatory
              gap-3
              px-4 py-5
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
                                    className={`
                    snap-start shrink-0
                    rounded-2xl
                    px-5 py-4
                    text-left
                    transition-all duration-200
                    border-2
                    ${isActive ? "bg-secondary border-secondary" : "bg-white/10 border-black/20"}
                  `}
                                >
                                    <div className={`text-lg font-black uppercase tracking-tight ${isActive ? "text-primary" : "text-black"}`}>
                                        {spec.title}
                                    </div>
                                    <div className={`${isActive ? "text-gray-300" : "text-black/70"} mt-1 text-[10px] font-bold uppercase tracking-widest leading-tight max-w-[220px]`}>
                                        {spec.subtitle}
                                    </div>
                                </button>
                            )
                        })}
                    </div>

                    {/* Desktop: vertical sidebar */}
                    <div className="hidden lg:flex lg:flex-col py-12 lg:py-20">
                        {specialities.map((spec) => {
                            const isActive = activeTab === spec.id
                            return (
                                <button
                                    key={spec.id}
                                    onClick={() => setActiveTab(spec.id)}
                                    className={`
                    w-full text-right px-10 py-8
                    transition-all duration-300
                    flex flex-col items-end gap-1
                    ${isActive ? "bg-secondary text-white" : "text-black hover:bg-black/5"}
                  `}
                                >
                                    <span className={`text-2xl font-black uppercase tracking-tighter ${isActive ? "text-white" : ""}`}>
                                        {spec.title}
                                    </span>
                                    <span className={`text-[10px] max-w-[200px] leading-tight font-bold uppercase tracking-widest ${isActive ? "text-gray-400" : "text-black/60"}`}>
                                        {spec.subtitle}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white/80 lg:bg-transparent px-5 py-10 sm:px-8 lg:p-24">
                    <div className="max-w-3xl">
                        <Badge>SPECIALITIES</Badge>
                        <div key={activeData.id} className="mb-8 mt-8 animate-fade-in">
                            <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black mb-6 lg:mb-8 leading-none">
                                {activeData.contentTitle}
                            </h3>

                            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-10 lg:mb-12 border-l-4 border-primary pl-6 sm:pl-8">
                                {activeData.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    size="lg"
                                    variant="default"
                                    className="uppercase tracking-tighter"
                                >
                                    Start Trucking Dispatch
                                </Button>
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="border-2 text-black border-primary bg-transparent uppercase tracking-tighter hover:text-white hover:bg-primary hover:border-primary"
                                >
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

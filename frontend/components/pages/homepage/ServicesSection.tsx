import React from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
const services = [
    {
        title: "Dry Van Dispatch",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: true
    },
    {
        title: "Reefer Dispatch",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },
    {
        title: "Flatbed Dispatch",
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    },

    {
        title: "Box Truck Dispatch",
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        highlight: false
    }
]

export default function ServicesSection() {
    return (
        <section className="py-24 bg-[#F5f5f5]">
            <div className="container mx-auto px-6">
                {/* Header Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center mb-16 gap-8">
                    <div className="">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold tracking-widest uppercase text-gray-800">The Competitive Edge</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-extrabold mb-8 leading-[1.1] tracking-tight text-gray-800">
                            We Don't Just Dispatch. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                                We Scale Fleets.
                            </span>
                        </h2>
                    </div>

                    <div className="">
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            From load booking and rate negotiation to paperwork and 24/7 support, we've got your fleet covered. Choose reliability, choose Resolute.In an industry where every cent and every minute counts, we provide the precision logistics and aggressive negotiation needed to stay ahead of the curve.In an industry where every cent and every minute counts, we provide the precision logistics and aggressive negotiation needed to stay ahead of the curve.
                        </p>

                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div key={index} className="group relative aspect-[4/5] cursor-pointer">
                            {/* Card Body with Refined Inverted-Radius Mask */}
                            <div
                                className="absolute inset-0 bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-sm group-hover:shadow-xl"
                                style={{
                                    maskImage: `radial-gradient(circle 48px at 100% 100%, transparent 100%, black 0)`,
                                    WebkitMaskImage: `radial-gradient(circle 48px at 100% 100%, transparent 100%, black 0)`
                                }}
                            >
                                {/* Background Image */}
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500" />

                                {/* Title Area */}
                                <div className="absolute bottom-0 left-0 w-full p-8 pr-20">
                                    <h3 className={`text-white text-xl font-bold leading-tight ${service.highlight ? 'text-primary' : ''}`}>
                                        {service.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Button nested perfectly into the inverted corner */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 flex items-center justify-center">
                                {/* The "White" background for the notch - perfectly matching the section bg */}
                                <div className="absolute inset-0 bg-[#F5f5f5] rounded-full scale-[1.1] z-0" />

                                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${service.highlight ? 'bg-primary text-black' : 'bg-[#1A1A1A] text-white group-hover:bg-primary group-hover:text-black group-hover:scale-110'}`}>
                                    <ArrowUpRight size={28} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6 items-center">
                    <Button
                        size="lg"
                        className="text-xl uppercase tracking-tighter"
                        icon={<ChevronRight className="w-5 h-5" />}
                        iconPosition="right"
                    >
                        View All Services
                    </Button>
                </div>
            </div>
        </section>
    )
}

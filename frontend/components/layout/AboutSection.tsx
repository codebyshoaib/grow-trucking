import React from 'react'
import { CheckCircle2, Truck, Shield, Clock, ArrowUpRight } from 'lucide-react'

const features = [
    {
        icon: <Truck className="w-5 h-5 text-primary" />,
        title: "Expert Dispatching",
        description: "Experienced dispatchers finding the most profitable loads for your fleet."
    },
    {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: "Reliable Support",
        description: "We handle paperwork and broker communications so you can focus on driving."
    },
    {
        icon: <Clock className="w-5 h-5 text-primary" />,
        title: "24/7 Operations",
        description: "Our support team is available around the clock for your logistics needs."
    },
    {
        icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
        title: "Compliance First",
        description: "Ensuring all loads and carriers meet safety and regulatory standards."
    }
]

export default function AboutSection() {
    return (
        <section className="py-24 bg-[#F8F9FA] overflow-hidden border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* Image Side - Refined with Industrial Borders */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 p-4 bg-white rounded-3xl shadow-sm border border-gray-100">
                            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                                <img
                                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                    alt="Trucking Logistics"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-10 -right-6 bg-black text-white p-8 rounded-3xl shadow-2xl z-20 border border-white/10 max-w-[240px]">
                            <div className="flex items-start justify-between mb-4">
                                <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                                    <ArrowUpRight className="w-6 h-6" />
                                </div>
                                <span className="text-3xl font-black tracking-tighter">10+</span>
                            </div>
                            <p className="text-sm font-bold uppercase tracking-widest text-gray-400 leading-tight">
                                Years of Market Leadership
                            </p>
                        </div>

                        {/* Subtle decorative background shape */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-0" />
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-[1px] w-12 bg-primary" />
                            <span className="text-xs font-black tracking-[0.2em] text-primary uppercase">
                                Company Overview
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 leading-[1.15] tracking-tight">
                            A Strategic Partner <br />
                            <span className="text-primary">For The Modern Road.</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-12 leading-relaxed max-w-xl">
                            We empower independent owner-operators and small fleets by providing premium dispatching solutions that maximize earnings and minimize administrative stress.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                            {features.map((feature, index) => (
                                <div key={index} className="group">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 shadow-sm group-hover:border-primary/50 transition-colors">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-base font-bold text-black">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

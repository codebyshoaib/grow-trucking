import React from 'react'
import { TrendingUp, Users, Headphones, ShieldCheck, DollarSign, Zap, ArrowRight } from 'lucide-react'

const reasons = [
    {
        icon: <TrendingUp className="w-6 h-6" />,
        title: "Profit Maximization",
        description: "We don't just find loads; we engineer routes. Our dispatchers analyze market trends in real-time to secure top-tier rates that others miss.",
        stats: "15% Avg. Revenue Increase"
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "True Partnership",
        description: "You're not a truck number to us. You get a dedicated strategist who knows your preferred lanes, home-time needs, and equipment specs.",
        stats: "1-on-1 Dedicated Support"
    },
    {
        icon: <Headphones className="w-6 h-6" />,
        title: "Elite Operations",
        description: "From complex paperwork to roadside emergencies, our command center is active 24/7/365. We handle the chaos so you can focus on the road.",
        stats: "24/7 Command Center"
    }
]

export default function WhyChooseUs() {
    return (
        <section className="py-32 bg-[#f5f5f5] text-white overflow-hidden relative border-t border-white/5">
            {/* Subtle Grid Texture for differentiation */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[5%] w-[30%] h-[50%] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">

                    {/* Left Side: Bold Typography & Image */}
                    <div className="lg:w-5/12">
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

                        <p className="text-xl text-gray-800 mb-12 leading-relaxed max-w-xl">
                            In an industry where every cent and every minute counts, we provide the precision logistics and aggressive negotiation needed to stay ahead of the curve.
                        </p>

                        <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                alt="Modern Logistics Hub"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8">
                                <div className="flex items-center gap-4">
                                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-black">
                                        <Zap className="w-6 h-6 fill-current" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold uppercase tracking-tighter text-primary">Live Market Data</p>
                                        <p className="text-white font-medium">Real-time lane analysis active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Feature Cards */}
                    <div className="lg:w-7/12 grid gap-6">
                        {reasons.map((reason, index) => (
                            <div
                                key={index}
                                className="group relative bg-white/[0.6] hover:bg-white/[0.06] border border-primary/50 p-10 rounded-[2.5rem] transition-all duration-500 hover:border-primary/50 text-gray-800"
                            >
                                <div className="flex flex-col items-center md:flex-row md:items-center gap-8">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                        {reason.icon}
                                    </div>

                                    <div className="flex-grow ">
                                        <div className="flex flex-col items-center justify-between mb-3 lg:flex-row">
                                            <h3 className="text-2xl font-bold">{reason.title}</h3>
                                            <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                                                {reason.stats}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-lg">
                                            {reason.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Final CTA Card */}
                        <div className="mt-4 p-1 bg-gradient-to-r from-primary/50 via-yellow-200/50 to-primary/50 rounded-[2.5rem]">
                            <div className="bg-[#0A0A0A] p-10 rounded-[2.3rem] flex flex-col md:flex-row items-center justify-between gap-8">
                                <div>
                                    <h4 className="text-2xl font-bold mb-2">Ready for a better bottom line?</h4>
                                    <p className="text-gray-400">Join the elite network of carriers today.</p>
                                </div>
                                <button className="group flex items-center gap-3 bg-primary hover:bg-white text-black font-bold py-5 px-10 rounded-full transition-all duration-300 hover:scale-105">
                                    Get Started
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

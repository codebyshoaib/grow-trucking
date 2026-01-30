import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

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
    return (
        <section className="relative py-32 bg-black overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1501700493717-9c998ece7a02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    fill
                    className="object-cover opacity-30 grayscale"
                    alt="Trucking background"
                    priority={false}
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                        Resolute Logistics Company as the <br />
                        <span className="text-primary">Leading Freight Dispatching Service</span>
                    </h2>
                </div>

                {/* Process Path Grid */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-32">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                {/* Step Indicator */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="relative flex items-center justify-center z-10">
                                        <div className="w-12 h-12 rounded-full border-2 border-primary/30 bg-black flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(249,240,98,0.1)]">
                                            {index + 1}
                                        </div>
                                        {/* Glowing Dot */}
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_rgba(249,240,98,0.8)]" />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-primary/10 pl-4 group-hover:border-primary/50 transition-colors">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA Area */}
                <div className="mt-32 flex flex-col items-center justify-center gap-10">
                    <div className="relative group">
                        {/* Big Truck SVG from public */}
                        <div className="relative w-64 md:w-96 h-auto">
                            <Image
                                src="/truck-big.svg"
                                alt="Truck Graphic"
                                width={384}
                                height={85}
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                        {/* Cinematic Glow */}
                        <div className="absolute inset-0 bg-primary/10 blur-[100px] rounded-full -z-10" />
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <Button
                            size="lg"
                            className="bg-primary hover:bg-white text-black font-black rounded-full px-16 py-8 text-xl uppercase tracking-tighter transition-all hover:scale-105 shadow-[0_0_50px_rgba(249,240,98,0.2)]"
                        >
                            Start Trucking Dispatch
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

import React from 'react'
import { Button } from '@/components/ui/button'
import { Youtube, Linkedin, Facebook } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative h-[95vh] w-full overflow-hidden flex items-center bg-black">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/banner-poster.png"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    src="/video.mp4"
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                        Truck Dispatch Services
                    </h1>
                    <p className="text-base md:text-xl text-white font-medium mb-10 max-w-xl leading-relaxed drop-shadow-lg">
                        We provide high-quality freight dispatch service for interstate carriers and fleet owners in the USA and Canada
                    </p>
                    <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-6 text-lg transition-all hover:scale-105 shadow-xl"
                    >
                        Start Trucking Dispatch
                    </Button>
                </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-10 left-0 w-full px-6 md:px-12 flex justify-between items-center z-20">
                <div className="flex items-center gap-6">
                    <div className="flex gap-4">
                        <a href="#" className="text-primary hover:text-white transition-colors">
                            <Youtube size={24} />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-primary hover:text-white transition-colors">
                            <Facebook size={24} />
                        </a>
                    </div>
                    <div className="hidden md:block h-[1px] w-32 bg-primary" />
                </div>

                <div className="flex flex-col items-center gap-2 text-white/70">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                        <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                </div>
            </div>

            {/* Top Yellow Border Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[#F9F062] z-30" />
        </section>
    )
}

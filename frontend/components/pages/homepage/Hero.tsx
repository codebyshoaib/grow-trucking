import React from 'react'
import { Button } from '@/components/ui/button'
import { Youtube, Linkedin, Facebook } from 'lucide-react'
import Link from 'next/link';

export default function Hero() {
    const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
    if (!videoUrl) {
        return null;
    }

    return (
        <section className="relative min-h-[calc(100vh+6.25rem)] w-full overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster="/banner-poster.png"
                    className="absolute inset-0 w-full h-full object-cover"
                    src={videoUrl}
                >
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 top left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent z-10" />
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-4xl">
                    <h1 className="text-6xl uppercase md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
                        A reliable trucking partner
                    </h1>
                    <p className="text-base md:text-xl text-white font-medium mb-10 max-w-xl leading-relaxed drop-shadow-lg">
                        We provide high-quality freight dispatch service for interstate carriers and fleet owners in the USA and Canada
                    </p>
                    <Button
                        size="lg"
                        className="text-lg"

                    >
                        <Link href="/contact">Book Free Consultation</Link>
                    </Button>

                </div>
            </div>

            {/* Bottom Elements */}
            <div className="absolute bottom-10 left-5 w-full px-6 md:px-12 flex justify-between items-center z-20">
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

        </section>
    )
}

'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { useModal } from '@/hooks/useModal'
import ClaimModal from './ClaimModal'
import { getSocialLinksByPlatform } from '@/constants/social.config'

export default function Hero() {
    const videoUrl = process.env.NEXT_PUBLIC_HERO_VIDEO_URL;
    const { isOpen, open, close } = useModal();
    
    // Get social links for Hero section (LinkedIn, Facebook, and X/Twitter)
    const heroSocialLinks = getSocialLinksByPlatform(['linkedin', 'facebook', 'twitter']);

    if (!videoUrl) {
        return null;
    }

    return (
        <>
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
                            Grow Trucking - Your reliable partner
                        </h1>
                        <p className="text-base md:text-xl text-white font-medium mb-10 max-w-xl leading-relaxed drop-shadow-lg">
                            Grow Trucking provides high quality truck dispatch services for owner-operators, small fleets, and independent truck drivers across the USA.
                        </p>
                        <Button
                            size="lg"
                            className="text-lg"
                            onClick={open}
                        >
                            Claim Free Loads
                        </Button>

                    </div>
                </div>

                {/* Bottom Elements */}
                <div className="absolute bottom-10 left-5 w-full px-6 md:px-12 flex justify-between items-center z-20">
                    <div className="flex items-center gap-6">
                        <div className="flex gap-4">
                            {heroSocialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a 
                                        key={social.platform}
                                        href={social.href} 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </a>
                                )
                            })}
                        </div>
                        <div className="hidden md:block h-[1px] w-32 bg-primary" />
                    </div>

                    <a
                        href="#about"
                        className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer scroll-smooth"
                    >
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    </a>
                </div>

            </section>

            <ClaimModal isOpen={isOpen} onClose={close} />
        </>
    )
}

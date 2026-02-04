'use client'

import { Breadcrumb } from '@/components/navigation/breadcrumb'
import Image from 'next/image'
import React from 'react'

export default function ContactBanner() {
    return (
        <section className="relative bg-secondary min-h-[60vh]  md:min-h-[70vh] w-full overflow-hidden flex items-end px-4 sm:px-6 md:px-12 lg:px-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={"https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg"}
                    alt="About Banner"
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>
            <div className="container relative z-20 flex flex-col gap-3 sm:gap-4">
                <Breadcrumb className="mb-1 sm:mb-2" items={[{ label: 'Home', href: '/' }, { label: 'Contact Us', href: '/contact' }]} />
                <div className="max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase font-bold text-white mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl leading-tight">
                        Contact Us
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white font-primary--400 tracking-wide leading-relaxed">
                        Get in touch with our team. We're here to help with your dispatch needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

'use client'

import { Breadcrumb, type Breadcrumb as BreadcrumbType } from '@/components/navigation/breadcrumb'
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

type PageBannerProps = {
    title: string
    description: string | React.ReactNode
    breadcrumbItems: BreadcrumbType[]
    imageUrl?: string
    imageAlt?: string
    downloadButton?: boolean
}

export default function PageBanner({
    title,
    description,
    breadcrumbItems,
    imageUrl = "https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg",
    imageAlt = "Page Banner",
    downloadButton = false
}: PageBannerProps) {
    return (
        <section className="relative bg-secondary min-h-[100vh] w-full overflow-hidden flex items-end px-4 sm:px-6 md:px-12 lg:px-24 pb-8 sm:pb-12 md:pb-16 lg:pb-24">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
            </div>
            <div className="container relative z-20 flex flex-col gap-3 sm:gap-4">
                <Breadcrumb className="mb-1 sm:mb-2" items={breadcrumbItems} />
                <div className="max-w-4xl">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-bold text-white mb-4 sm:mb-5 md:mb-6 drop-shadow-2xl leading-tight">
                        {title}
                    </h1>
                    <p className="text-lg md:text-2xl text-white font-primary--400 tracking-wide leading-relaxed">
                        {description}
                    </p>
                    {downloadButton && <div className="mt-6 sm:mt-8">
                        <Button
                            size="lg"
                            onClick={() => (window.location.href = "/api/download-brochure")}
                            icon={<Download className="w-5 h-5" />}
                            iconPosition="left"
                            className="bg-white text-black hover:bg-white/90"
                        >
                            Download Brochure
                        </Button>
                    </div>
                    }
                </div>
            </div>
        </section>
    )
}

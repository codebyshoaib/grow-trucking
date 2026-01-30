'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 900)

        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500">
            <div className="flex flex-col items-center gap-4">
                <div className="relative animate-pulse">
                    <Image
                        src="/truck-big.svg"
                        alt="Loading"
                        width={200}
                        height={200}
                        className="opacity-90"
                        priority
                    />
                </div>
                <div className="h-0.5 w-48 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-loading origin-left" />
                </div>
            </div>
        </div>
    )
}

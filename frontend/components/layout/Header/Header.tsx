'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '../../ui/button'
import { UserIcon, Menu, X, Hamburger, MenuIcon } from "lucide-react";
import HeaderNav from './HeaderNav';
import MobileMenu from './MobileMenu';
import Link from 'next/link';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setIsScrolled(scrollPosition > 200)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-md'
                : 'bg-transparent'
                }`}>
                {!isScrolled && (
                    <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/50 to-transparent" />
                )}
                <div className='relative flex items-center justify-between p-4 container mx-auto'>
                    <div className='flex items-center gap-2'>
                        <Link href="/">
                            <Image
                                src="/logo.webp"
                                alt="logo"
                                width={150}
                                height={150}

                            />
                        </Link>
                    </div>
                    <div className='hidden md:flex items-center gap-2'>
                        <HeaderNav isScrolled={isScrolled} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button
                            type="button"
                            variant="ghost"
                            className={`size-9 md:hidden p-2 transition-colors ${isScrolled
                                ? 'text-gray-900 hover:bg-gray-100'
                                : 'text-white hover:text-white hover:bg-white/10'
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </Button>
                        <Link href="/signup">
                            <Button
                                variant="default"
                                size="lg"
                                icon={<UserIcon className="w-5 h-5" />}
                                iconPosition="left"
                                className="uppercase tracking-tighter hidden md:flex"
                            >
                                Sign Up
                            </Button>
                        </Link>
                    </div>
                </div>
                {/* Yellow Border Line */}
                <div className={`w-full h-0.5 transition-colors ${isScrolled
                    ? 'bg-gray-200'
                    : 'bg-primary/10'
                    }`} />
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
        </>
    )
}

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
            setIsScrolled(scrollPosition > 50)
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
                <div className='flex items-center justify-between p-4 container mx-auto'>
                    <div className='flex items-center gap-2'>
                        <Link href="/">
                            <Image src="/logo.webp" alt="logo" width={150} height={150} />
                        </Link>
                    </div>
                    <div className='hidden md:flex items-center gap-2'>
                        <HeaderNav isScrolled={isScrolled} />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button
                            type="button"
                            variant="ghost"
                            className={`md:hidden p-2 transition-colors ${isScrolled
                                ? 'text-gray-900 hover:bg-gray-100'
                                : 'text-white hover:text-white hover:bg-white/10'
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                        </Button>
                        <Button variant="default" className='bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:flex'>
                            <UserIcon />
                            Sign Up
                        </Button>
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

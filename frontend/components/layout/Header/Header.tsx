'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '../../ui/button'
import { UserIcon, Menu, X } from "lucide-react";
import HeaderNav from './HeaderNav';
import MobileMenu from './MobileMenu';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const handleCloseMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <>
            <header className='border-b border-gray-200'>
                <div className='flex items-center justify-between p-4 container mx-auto'>
                    <div className='flex items-center gap-2'>
                        <Image src="/logo.webp" alt="logo" width={150} height={150} />
                    </div>
                    <div className='hidden md:flex items-center gap-2'>
                        <HeaderNav />
                    </div>
                    <div className='flex items-center gap-2'>
                        <Button
                            type="button"
                            variant="ghost"
                            className='md:hidden p-2'
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                        <Button variant="default" className='bg-primary text-primary-foreground hover:bg-primary/90 hidden sm:flex'>
                            <UserIcon />
                            Sign Up
                        </Button>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMenu} />
        </>
    )
}

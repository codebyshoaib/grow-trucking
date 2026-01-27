import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { UserIcon } from "lucide-react";
import HeaderNav from './HeaderNav';
export default function Header() {
    return (
        <header className='border-b border-gray-200'>
            <div className='flex items-center justify-between p-4 container mx-auto'>
                <div className='flex items-center gap-2'>
                    <Image src="/logo.webp" alt="logo" width={150} height={150} />
                </div>
                <div className='flex items-center gap-2'>
                    <HeaderNav />
                </div>
                <div>
                    <Button variant="default" className='bg-primary text-primary-foreground hover:bg-primary/90'>
                        <UserIcon />
                        Sign Up
                    </Button>
                </div>
            </div>
        </header>
    )
}

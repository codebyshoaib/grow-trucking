'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '../../ui/button'
import { UserIcon } from 'lucide-react'
import { aboutItems } from '@/constants/navigation.config'
import type { SubmenuItem } from '@/types/navigation.types'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}

// Helper function to convert service title to slug for hash links
function titleToSlug(title: string): string {
    return title
        .trim()
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

// Services data - matches the services from ServicesSection
const services = [
    {
        title: 'Free Business Audit Report ',
        href: '/services#free-business-audit-report',
    },
    {
        title: 'Free Growth Checklist',
        href: '/services#free-growth-checklist',
    },
    {
        title: 'Free Custom 90 Day Growth Plan',
        href: '/services#free-custom-90-day-growth-plan',
    },
    {
        title: 'Rate Maximization & Negotiation',
        href: '/services#rate-maximization-and-negotiation',
    },
    {
        title: 'Operational Growth Strategy',
        href: '/services#operational-growth-strategy',
    },
    {
        title: 'Comprehensive Trip Planning',
        href: '/services#comprehensive-trip-planning',
    },
].map(service => ({
    ...service,
    href: `/services#${titleToSlug(service.title)}`
}))

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname()
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [expandedAboutItem, setExpandedAboutItem] = useState<string | null>(null)

    const navItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About',
            href: '/about',
            hasSubmenu: true,
            submenuItems: aboutItems,
        },
        {
            label: 'Services',
            href: '/services',
            hasSubmenu: true,
            submenuItems: services,
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ]

    // Close menu when route changes
    useEffect(() => {
        if (isOpen) {
            onClose()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] md:hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Menu Panel */}
            <div className="absolute inset-0 bg-white flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <span className="text-lg font-primary--600">Menu</span>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        aria-label="Close menu"
                    >
                        <X size={24} />
                    </Button>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 flex flex-col justify-center items-center gap-8 px-4 overflow-y-auto">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.submenuItems && item.submenuItems.some(subItem => pathname === subItem.href))

                        if (item.hasSubmenu && item.submenuItems) {
                            const isOpen = item.label === 'Services' ? isServicesOpen : isAboutOpen
                            const toggleOpen = item.label === 'Services' ? () => setIsServicesOpen(!isServicesOpen) : () => setIsAboutOpen(!isAboutOpen)

                            return (
                                <div key={item.href} className="w-full flex flex-col items-center">
                                    <button
                                        onClick={toggleOpen}
                                        className={`text-2xl font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center gap-2 ${isActive ? 'after:w-full text-primary' : ''
                                            }`}
                                    >
                                        {item.label}
                                        {isOpen ? (
                                            <ChevronUp className="w-5 h-5" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5" />
                                        )}
                                    </button>
                                    {isOpen && (
                                        <div className="mt-4 w-full max-w-xs flex flex-col gap-4">
                                            {item.submenuItems.map((subItem) => {
                                                const hasChildren = (subItem as SubmenuItem).children && (subItem as SubmenuItem).children!.length > 0
                                                const isExpanded = expandedAboutItem === subItem.title
                                                
                                                return (
                                                    <div key={subItem.href} className="flex flex-col">
                                                        <div className="flex items-center justify-between">
                                                            <Link
                                                                href={subItem.href}
                                                                onClick={onClose}
                                                                className="text-lg font-primary--400 tracking-wide text-gray-700 hover:text-primary transition-colors pl-4 border-l-2 border-gray-200 hover:border-primary flex-1"
                                                            >
                                                                {subItem.title}
                                                            </Link>
                                                            {hasChildren && (
                                                                <button
                                                                    onClick={() => setExpandedAboutItem(isExpanded ? null : subItem.title)}
                                                                    className="p-2 text-gray-500 hover:text-primary"
                                                                >
                                                                    {isExpanded ? (
                                                                        <ChevronUp className="w-4 h-4" />
                                                                    ) : (
                                                                        <ChevronDown className="w-4 h-4" />
                                                                    )}
                                                                </button>
                                                            )}
                                                        </div>
                                                        {hasChildren && isExpanded && (
                                                            <div className="mt-2 ml-8 flex flex-col gap-2">
                                                                {(subItem as SubmenuItem).children!.map((child) => (
                                                                    <Link
                                                                        key={child.href}
                                                                        href={child.href}
                                                                        onClick={onClose}
                                                                        className="text-base font-primary--400 tracking-wide text-gray-600 hover:text-primary transition-colors pl-4 border-l-2 border-gray-200 hover:border-primary"
                                                                    >
                                                                        {child.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    )}
                                </div>
                            )
                        }

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={onClose}
                                className={`text-2xl font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive ? 'after:w-full text-primary' : ''
                                    }`}
                            >
                                {item.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer with Sign Up Button */}
                <div className="p-4 border-t border-gray-200">
                    <Link href="/signup">
                        <Button
                            variant="default"
                            size="lg"
                            className="w-full"
                            icon={<UserIcon className="w-5 h-5" />}
                            iconPosition="left"
                            onClick={onClose}
                        >
                            Sign Up
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

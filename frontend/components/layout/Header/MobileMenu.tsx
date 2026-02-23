'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { X, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '../../ui/button'
import { UserIcon } from 'lucide-react'
import { aboutItems, truckTypes, areasWeServeItems, growthPlans, services } from '@/constants/navigation.config'
import type { SubmenuItem, RegionItem } from '@/types/navigation.types'

interface MobileMenuProps {
    isOpen: boolean
    onClose: () => void
}


export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    const pathname = usePathname()
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [isGrowthPlansOpen, setIsGrowthPlansOpen] = useState(false)
    const [isAboutOpen, setIsAboutOpen] = useState(false)
    const [isTruckTypeOpen, setIsTruckTypeOpen] = useState(false)
    const [isAreasWeServeOpen, setIsAreasWeServeOpen] = useState(false)
    const [expandedAboutItem, setExpandedAboutItem] = useState<string | null>(null)
    const [expandedRegion, setExpandedRegion] = useState<string | null>(null)

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
            label: 'Growth Plans',
            href: '/growth-plans',
            hasSubmenu: true,
            submenuItems: growthPlans,
        },
        // Services menu - only show if there are items (will be added later)
        ...(services.length > 0 ? [{
            label: 'Services',
            href: '/services',
            hasSubmenu: true,
            submenuItems: services,
        }] : []),
        {
            label: 'Areas We Serve',
            href: '/areas-we-serve',
            hasSubmenu: true,
            submenuItems: areasWeServeItems,
            isMultiLevel: true,
        },
        {
            label: 'Truck Type',
            href: '/truck-type',
            hasSubmenu: true,
            submenuItems: truckTypes,
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
                <nav className="flex-1 overflow-y-auto py-6 px-4">
                    <div className="max-w-md mx-auto flex flex-col gap-6">
                        {navItems.map((item) => {
                            // Check if current path matches item href or any submenu item
                            let isActive = pathname === item.href

                            if (item.submenuItems) {
                                if (item.isMultiLevel && item.label === 'Areas We Serve') {
                                    // For Areas We Serve, check regions and states
                                    const regionItems = item.submenuItems as RegionItem[]
                                    isActive = isActive || regionItems.some(region =>
                                        pathname === region.href ||
                                        (region.states && region.states.some(state => pathname === state.href))
                                    )
                                } else {
                                    // For standard submenus, check submenu items and their children
                                    const submenuItems = item.submenuItems as SubmenuItem[]
                                    isActive = isActive || submenuItems.some(subItem => {
                                        const matchesSubItem = pathname === subItem.href
                                        const matchesChild = subItem.children && subItem.children.some(child => pathname === child.href)
                                        return matchesSubItem || matchesChild
                                    })
                                }
                            }

                            if (item.hasSubmenu && item.submenuItems) {
                                let isOpen = false
                                let toggleOpen = () => { }

                                if (item.label === 'Services') {
                                    isOpen = isServicesOpen
                                    toggleOpen = () => setIsServicesOpen(!isServicesOpen)
                                } else if (item.label === 'Growth Plans') {
                                    isOpen = isGrowthPlansOpen
                                    toggleOpen = () => setIsGrowthPlansOpen(!isGrowthPlansOpen)
                                } else if (item.label === 'About') {
                                    isOpen = isAboutOpen
                                    toggleOpen = () => setIsAboutOpen(!isAboutOpen)
                                } else if (item.label === 'Truck Type') {
                                    isOpen = isTruckTypeOpen
                                    toggleOpen = () => setIsTruckTypeOpen(!isTruckTypeOpen)
                                } else if (item.label === 'Areas We Serve') {
                                    isOpen = isAreasWeServeOpen
                                    toggleOpen = () => setIsAreasWeServeOpen(!isAreasWeServeOpen)
                                }

                                return (
                                    <div key={item.href} className="w-full">
                                        {/* Main Menu Item Button */}
                                        <button
                                            onClick={toggleOpen}
                                            className={`w-full text-xl font-primary--600 tracking-wide relative flex items-center justify-between p-4 rounded-lg transition-all duration-200 ${isActive
                                                ? 'bg-primary/10 text-primary'
                                                : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                                                }`}
                                        >
                                            <span>{item.label}</span>
                                            <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </button>

                                        {/* Submenu Container with Animation */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100 mt-3' : 'max-h-0 opacity-0'
                                            }`}>
                                            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-3 space-y-2">
                                                {item.isMultiLevel && item.label === 'Areas We Serve' ? (
                                                    // Multi-level structure for Areas We Serve (Regions -> States)
                                                    (item.submenuItems as RegionItem[]).map((region) => {
                                                        const hasStates = region.states && region.states.length > 0
                                                        const isExpanded = expandedRegion === region.title
                                                        const isRegionActive = pathname === region.href ||
                                                            (region.states && region.states.some(state => pathname === state.href))

                                                        return (
                                                            <div
                                                                key={region.href}
                                                                className={`rounded-md overflow-hidden transition-all duration-200 ${isExpanded ? 'bg-gray-50' : 'bg-transparent'
                                                                    }`}
                                                            >
                                                                {/* Region Item */}
                                                                <div className="flex items-center justify-between group">
                                                                    <Link
                                                                        href={region.href}
                                                                        onClick={onClose}
                                                                        className={`flex-1 px-4 py-3 text-base font-medium transition-colors rounded-md ${isRegionActive
                                                                            ? 'text-primary bg-primary/5'
                                                                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                                                            }`}
                                                                    >
                                                                        {region.title}
                                                                    </Link>
                                                                    {hasStates && (
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault()
                                                                                setExpandedRegion(isExpanded ? null : region.title)
                                                                            }}
                                                                            className={`p-3 transition-all duration-200 rounded-md ${isExpanded
                                                                                ? 'bg-primary/10 text-primary'
                                                                                : 'text-gray-400 hover:text-primary hover:bg-gray-100'
                                                                                }`}
                                                                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${region.title} states`}
                                                                        >
                                                                            <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                                                <ChevronDown className="w-4 h-4" />
                                                                            </div>
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* States List with Animation */}
                                                                {hasStates && (
                                                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                                                                        }`}>
                                                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                                                            {region.states!.map((state) => {
                                                                                const isStateActive = pathname === state.href
                                                                                return (
                                                                                    <Link
                                                                                        key={state.href}
                                                                                        href={state.href}
                                                                                        onClick={onClose}
                                                                                        className={`block px-4 py-2.5 text-sm font-normal rounded-md transition-colors ${isStateActive
                                                                                            ? 'text-primary bg-primary/10 font-medium'
                                                                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                                                                            }`}
                                                                                    >
                                                                                        {state.title}
                                                                                    </Link>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    })
                                                ) : (
                                                    // Standard submenu items (About, Growth Plans, Checklist, Services, Truck Type)
                                                    item.submenuItems.map((subItem) => {
                                                        const hasChildren = (subItem as SubmenuItem).children && (subItem as SubmenuItem).children!.length > 0
                                                        const isExpanded = expandedAboutItem === subItem.title
                                                        const isSubItemActive = pathname === subItem.href ||
                                                            ((subItem as SubmenuItem).children &&
                                                                (subItem as SubmenuItem).children!.some(child => pathname === child.href))

                                                        return (
                                                            <div
                                                                key={subItem.href}
                                                                className={`rounded-md overflow-hidden transition-all duration-200 ${isExpanded ? 'bg-gray-50' : 'bg-transparent'
                                                                    }`}
                                                            >
                                                                {/* Submenu Item */}
                                                                <div className="flex items-center justify-between group">
                                                                    <Link
                                                                        href={subItem.href}
                                                                        onClick={onClose}
                                                                        className={`flex-1 px-4 py-3 text-base font-medium transition-colors rounded-md ${isSubItemActive
                                                                            ? 'text-primary bg-primary/5'
                                                                            : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                                                                            }`}
                                                                    >
                                                                        {subItem.title}
                                                                    </Link>
                                                                    {hasChildren && (
                                                                        <button
                                                                            onClick={(e) => {
                                                                                e.preventDefault()
                                                                                setExpandedAboutItem(isExpanded ? null : subItem.title)
                                                                            }}
                                                                            className={`p-3 transition-all duration-200 rounded-md ${isExpanded
                                                                                ? 'bg-primary/10 text-primary'
                                                                                : 'text-gray-400 hover:text-primary hover:bg-gray-100'
                                                                                }`}
                                                                            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${subItem.title}`}
                                                                        >
                                                                            <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                                                                                <ChevronDown className="w-4 h-4" />
                                                                            </div>
                                                                        </button>
                                                                    )}
                                                                </div>

                                                                {/* Children List with Animation */}
                                                                {hasChildren && (
                                                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                                                        }`}>
                                                                        <div className="pl-4 pr-2 py-2 space-y-1">
                                                                            {(subItem as SubmenuItem).children!.map((child) => {
                                                                                const isChildActive = pathname === child.href
                                                                                return (
                                                                                    <Link
                                                                                        key={child.href}
                                                                                        href={child.href}
                                                                                        onClick={onClose}
                                                                                        className={`block px-4 py-2.5 text-sm font-normal rounded-md transition-colors ${isChildActive
                                                                                            ? 'text-primary bg-primary/10 font-medium'
                                                                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                                                                            }`}
                                                                                    >
                                                                                        {child.title}
                                                                                    </Link>
                                                                                )
                                                                            })}
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )
                                                    })
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            // Simple menu item (no submenu)
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className={`block w-full text-xl font-primary--600 tracking-wide p-4 rounded-lg transition-all duration-200 ${isActive
                                        ? 'bg-primary/10 text-primary'
                                        : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </div>
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

'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import type { HeaderNavProps, NavItem, RegionItem, SubmenuItem } from '@/types/navigation.types'
import { services, growthPlans, aboutItems, areasWeServeItems, truckTypes } from '@/constants/navigation.config'

export default function HeaderNav({ isScrolled = false }: HeaderNavProps) {
    // Default to first region when menu opens
    const [hoveredRegion, setHoveredRegion] = useState<string | null>(areasWeServeItems[0]?.title || null)
    // State for About menu - track which item is hovered
    const [hoveredAboutItem, setHoveredAboutItem] = useState<string | null>(null)

    const navItems: NavItem[] = [
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
        {
            label: 'Services',
            href: '/services',
            hasSubmenu: true,
            submenuItems: services,
        },
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

    const textColorClass = isScrolled
        ? '!text-gray-900 hover:!text-gray-700'
        : '!text-white hover:!text-white focus:!text-white'

    const openStateTextColor = isScrolled
        ? 'data-[state=open]:!text-gray-900 data-[state=open]:hover:!text-gray-700'
        : 'data-[state=open]:!text-white data-[state=open]:hover:!text-white'

    // Get the currently hovered region's states
    const activeRegion = areasWeServeItems.find(region => region.title === hoveredRegion)
    const activeStates = activeRegion?.states || []

    // Get the currently hovered About item's children (partners)
    const activeAboutItem = aboutItems.find(item => item.title === hoveredAboutItem)
    const activePartners = (activeAboutItem?.children as SubmenuItem[]) || []

    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-6">
                {navItems.map((item) => {
                    if (item.hasSubmenu && item.submenuItems) {
                        // Special handling for multi-level "Areas We Serve" menu
                        if (item.isMultiLevel && item.label === 'Areas We Serve') {
                            return (
                                <NavigationMenuItem key={item.href} className="relative">
                                    <NavigationMenuTrigger
                                        className={`text-[.95rem] font-primary--500 tracking-widest !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent p-0 rounded-none transition-colors ${textColorClass} ${openStateTextColor}`}
                                    >
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="!z-[100] !bg-white !border !border-gray-200 !shadow-xl !rounded-md !mt-2 !left-0 !min-w-[700px] !w-auto !max-w-[800px] !overflow-hidden">
                                        <div className="flex bg-white">
                                            {/* Left column - Regions */}
                                            <ul className="w-[200px] border-r border-gray-300 p-0">
                                                {(item.submenuItems as RegionItem[]).map((region) => (
                                                    <li
                                                        key={region.href}
                                                        className="w-full"
                                                        onMouseEnter={() => setHoveredRegion(region.title)}
                                                    >
                                                        <NavigationMenuLink asChild>
                                                            <Link
                                                                href={region.href}
                                                                className={`block select-none px-4 py-2.5 leading-normal no-underline outline-none transition-colors w-full relative ${hoveredRegion === region.title
                                                                    ? ' text-gray-800 bg-gray-200'
                                                                    : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                                                                    }`}
                                                            >
                                                                <div className="text-sm font-medium leading-snug flex items-center justify-between">
                                                                    <span>{region.title}</span>
                                                                    <span className="text-gray-400">›</span>
                                                                </div>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Right column - States in 2-column grid */}
                                            <ul className="flex-1 p-2 min-h-[200px] grid grid-cols-2 gap-0">
                                                {activeStates.length > 0 ? (
                                                    activeStates.map((state) => (
                                                        <li key={state.href} className="w-full">
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={state.href}
                                                                    className="block select-none rounded-md px-4 py-2.5 leading-normal no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-gray-900 w-full"
                                                                >
                                                                    <div className="text-sm font-medium leading-snug break-words">
                                                                        {state.title}
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))
                                                ) : (
                                                    <li className="col-span-2 px-4 py-8 text-sm text-gray-500 text-center">
                                                        Hover over a region to see states
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }

                        // Special handling for "About" menu with third-level partners
                        if (item.label === 'About') {
                            return (
                                <NavigationMenuItem key={item.href} className="relative">
                                    <NavigationMenuTrigger
                                        className={`text-[.95rem] font-primary--500 tracking-widest !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent p-0 rounded-none transition-colors ${textColorClass} ${openStateTextColor}`}
                                    >
                                        {item.label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className={`!z-[100] !bg-white !border !border-gray-200 !shadow-xl !rounded-md !mt-2 !left-0 ${activePartners.length > 0 ? '!min-w-[600px] !max-w-[800px]' : '!min-w-[220px] !w-auto'} !overflow-hidden`}>
                                        <div className="flex bg-white">
                                            {/* Left column - About items */}
                                            <ul className={`w-[220px] ${activePartners.length > 0 ? 'border-r border-gray-300' : ''} p-0`}>
                                                {(item.submenuItems as SubmenuItem[]).map((aboutItem) => (
                                                    <li
                                                        key={aboutItem.href}
                                                        className="w-full"
                                                        onMouseEnter={() => setHoveredAboutItem(aboutItem.title)}
                                                    >
                                                        <NavigationMenuLink asChild>
                                                            <Link
                                                                href={aboutItem.href}
                                                                className={`block select-none px-4 py-2.5 leading-normal no-underline outline-none transition-colors w-full relative ${hoveredAboutItem === aboutItem.title
                                                                    ? ' text-gray-800 bg-gray-200'
                                                                    : 'text-gray-800 hover:bg-gray-700 hover:text-white'
                                                                    }`}
                                                            >
                                                                <div className="text-sm font-medium leading-snug flex items-center justify-between">
                                                                    <span>{aboutItem.title}</span>
                                                                    {aboutItem.children && aboutItem.children.length > 0 && (
                                                                        <span className="text-gray-400">›</span>
                                                                    )}
                                                                </div>
                                                            </Link>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                            {/* Right column - Partners in 2-column grid (only show when hovering "About Our Partners") */}
                                            {activePartners.length > 0 && (
                                                <ul className="flex-1 p-2 min-h-[200px] grid grid-cols-2 gap-0">
                                                    {activePartners.map((partner) => (
                                                        <li key={partner.href} className="w-full">
                                                            <NavigationMenuLink asChild>
                                                                <Link
                                                                    href={partner.href}
                                                                    className="block select-none rounded-md px-4 py-2.5 leading-normal no-underline outline-none transition-colors hover:bg-gray-200 focus:bg-gray-200 text-gray-900 w-full"
                                                                >
                                                                    <div className="text-sm font-medium leading-snug break-words">
                                                                        {partner.title}
                                                                    </div>
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            )
                        }

                        // Regular submenu rendering for other items
                        return (
                            <NavigationMenuItem key={item.href} className="relative">
                                <NavigationMenuTrigger
                                    className={`text-[.95rem] font-primary--500 tracking-widest !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent p-0 rounded-none transition-colors ${textColorClass} ${openStateTextColor}`}
                                >
                                    {item.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={`!z-[100] !bg-white !border !border-gray-200 !shadow-xl !rounded-md !mt-2 !left-0 !overflow-hidden ${item.label === 'Growth Plans' ? '!min-w-[500px] !w-auto !max-w-[650px]' : '!min-w-[280px] !w-auto !max-w-[400px]'}`}>
                                    <ul className={`grid gap-0 p-3 ${item.label === 'Services' || (item.label === 'Growth Plans' && item.submenuItems.length <= 3) ? 'grid-cols-1' : item.submenuItems.length > 3 ? 'grid-cols-2' : 'grid-cols-1'} bg-white`}>
                                        {item.submenuItems.map((subItem) => (
                                            <li key={subItem.href} className="w-full min-w-0">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={subItem.href}
                                                        className="block select-none rounded-md px-4 py-2.5 leading-normal no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100 text-gray-900 w-full"
                                                    >
                                                        <div className="text-sm font-medium leading-snug break-words">
                                                            {subItem.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    }

                    return (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.href}
                                    className={`text-[.95rem] font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary 
                                        after:transition-all after:duration-300 hover:after:w-full bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent p-0 
                                        rounded-none transition-colors 
                                        ${textColorClass}`}
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

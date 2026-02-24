/**
 * Navigation Configuration
 * Centralized configuration for navigation menu items
 * Domain layer: Business rules and navigation structure
 */

import { titleToSlug } from '@/lib/utils'
import type { SubmenuItem, RegionItem } from '@/types/navigation.types'
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'
import { PartnerRegistry } from '@/domain/partner/partner.config'
import { StateRegistry } from '@/domain/state/state.config'
import { allServices } from './services.config'

/**
 * Growth Plans menu items (includes checklist items)
 */
export const growthPlans: SubmenuItem[] = [
    {
        title: 'Free Custom 90 Day Growth Plan',
        href: '/growth-plans#free-custom-90-day-growth-plan',
    },
    {
        title: 'Free Business Audit Report',
        href: '/growth-plans#free-business-audit-report',
    },
    {
        title: 'Free Growth Checklist',
        href: '/growth-plans#free-growth-checklist',
    },
    {
        title: 'Operational Growth Strategy',
        href: '/growth-plans#operational-growth-strategy',
    },
    {
        title: 'Rate Maximization & Negotiation',
        href: '/growth-plans#rate-maximization-and-negotiation',
    },
    {
        title: 'Comprehensive Trip Planning',
        href: '/growth-plans#comprehensive-trip-planning',
    },
].map(item => ({
    ...item,
    href: `/growth-plans#${titleToSlug(item.title)}`
}))

/**
 * Checklist menu items (deprecated - moved to Growth Plans)
 * Kept for backward compatibility
 */
export const checklist: SubmenuItem[] = []

/**
 * Services menu items - actual services (growth plans and checklist moved to separate sections)
 * Shows first 3 services in menu, then "More..." links to full services page
 */
export const services: SubmenuItem[] = [
    {
        title: allServices[0].title,
        href: `/services/${allServices[0].id}`,
    },
    {
        title: allServices[1].title,
        href: `/services/${allServices[1].id}`,
    },
    {
        title: allServices[2].title,
        href: `/services/${allServices[2].id}`,
    },
    {
        title: 'More...',
        href: '/services',
    },
]

/**
 * Partners navigation items
 * Dynamically generated from domain registry (DDD: Single Source of Truth)
 */
const partners: SubmenuItem[] = PartnerRegistry.getAll().map((partner) => ({
    title: partner.displayName,
    href: `/partners/${partner.slug}`,
}))

/**
 * About submenu items with nested partners
 */
export const aboutItems: SubmenuItem[] = [
    {
        title: 'About Us',
        href: '/about',
    },
    {
        title: 'About Our Partners',
        href: '/about-our-partners',
        children: partners, // Third-level: individual partners
    },
    {
        title: 'Careers',
        href: '/careers',     
    }
]

/**
 * Truck type navigation items
 * Dynamically generated from domain registry (DDD: Single Source of Truth)
 * This ensures navigation stays in sync with available truck types
 */
export const truckTypes: SubmenuItem[] = TruckTypeRegistry.getAll().map((truckType) => ({
    title: truckType.name,
    href: `/truck-type/${truckType.slug}-dispatch-service`,
}))

/**
 * Helper function to get state URL by state name
 * Maps state display names to their slugs and generates URLs with -truck-dispatch suffix
 */
function getStateUrl(stateName: string): string {
    const allStates = StateRegistry.getAll()
    const state = allStates.find(s => 
        s.displayName === stateName || 
        s.name === stateName ||
        s.displayName.toLowerCase() === stateName.toLowerCase() ||
        s.name.toLowerCase() === stateName.toLowerCase()
    )
    
    if (state) {
        return `/states/${state.slug}-truck-dispatch`
    }
    
    // Fallback: convert state name to slug format
    const slug = stateName.toLowerCase().replace(/\s+/g, '-')
    return `/states/${slug}-truck-dispatch`
}

/**
 * Multi-level structure for Areas We Serve
 * Regions with nested states
 * State links now point directly to state pages with -truck-dispatch suffix
 */
export const areasWeServeItems: RegionItem[] = [
    {
        title: 'Northeast',
        href: '/areas-we-serve/northeast',
        states: [
            { title: 'Connecticut', href: getStateUrl('Connecticut') },
            { title: 'Maine', href: getStateUrl('Maine') },
            { title: 'Massachusetts', href: getStateUrl('Massachusetts') },
            { title: 'New Hampshire', href: getStateUrl('New Hampshire') },
            { title: 'New Jersey', href: getStateUrl('New Jersey') },
            { title: 'New York', href: getStateUrl('New York') },
            { title: 'Pennsylvania', href: getStateUrl('Pennsylvania') },
            { title: 'Rhode Island', href: getStateUrl('Rhode Island') },
            { title: 'Vermont', href: getStateUrl('Vermont') },
        ],
    },
    {
        title: 'Midwest',
        href: '/areas-we-serve/midwest',
        states: [
            { title: 'Illinois', href: getStateUrl('Illinois') },
            { title: 'Indiana', href: getStateUrl('Indiana') },
            { title: 'Iowa', href: getStateUrl('Iowa') },
            { title: 'Kansas', href: getStateUrl('Kansas') },
            { title: 'Michigan', href: getStateUrl('Michigan') },
            { title: 'Minnesota', href: getStateUrl('Minnesota') },
            { title: 'Missouri', href: getStateUrl('Missouri') },
            { title: 'Nebraska', href: getStateUrl('Nebraska') },
            { title: 'North Dakota', href: getStateUrl('North Dakota') },
            { title: 'Ohio', href: getStateUrl('Ohio') },
            { title: 'South Dakota', href: getStateUrl('South Dakota') },
            { title: 'Wisconsin', href: getStateUrl('Wisconsin') },
        ],
    },
    {
        title: 'Southern US',
        href: '/areas-we-serve/southern-us',
        states: [
            { title: 'Alabama', href: getStateUrl('Alabama') },
            { title: 'Arkansas', href: getStateUrl('Arkansas') },
            { title: 'Delaware', href: getStateUrl('Delaware') },
            { title: 'Florida', href: getStateUrl('Florida') },
            { title: 'Georgia', href: getStateUrl('Georgia') },
            { title: 'Kentucky', href: getStateUrl('Kentucky') },
            { title: 'Louisiana', href: getStateUrl('Louisiana') },
            { title: 'Maryland', href: getStateUrl('Maryland') },
            { title: 'Mississippi', href: getStateUrl('Mississippi') },
            { title: 'North Carolina', href: getStateUrl('North Carolina') },
            { title: 'Oklahoma', href: getStateUrl('Oklahoma') },
            { title: 'South Carolina', href: getStateUrl('South Carolina') },
            { title: 'Tennessee', href: getStateUrl('Tennessee') },
            { title: 'Texas', href: getStateUrl('Texas') },
            { title: 'Virginia', href: getStateUrl('Virginia') },
            { title: 'West Virginia', href: getStateUrl('West Virginia') },
        ],
    },
    {
        title: 'Western US',
        href: '/areas-we-serve/western-us',
        states: [
            { title: 'Alaska', href: getStateUrl('Alaska') },
            { title: 'Arizona', href: getStateUrl('Arizona') },
            { title: 'California', href: getStateUrl('California') },
            { title: 'Colorado', href: getStateUrl('Colorado') },
            { title: 'Hawaii', href: getStateUrl('Hawaii') },
            { title: 'Idaho', href: getStateUrl('Idaho') },
            { title: 'Montana', href: getStateUrl('Montana') },
            { title: 'Nevada', href: getStateUrl('Nevada') },
            { title: 'New Mexico', href: getStateUrl('New Mexico') },
            { title: 'Oregon', href: getStateUrl('Oregon') },
            { title: 'Utah', href: getStateUrl('Utah') },
            { title: 'Washington', href: getStateUrl('Washington') },
            { title: 'Wyoming', href: getStateUrl('Wyoming') },
        ],
    },
]

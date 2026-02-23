/**
 * Navigation Configuration
 * Centralized configuration for navigation menu items
 * Domain layer: Business rules and navigation structure
 */

import { titleToSlug } from '@/lib/utils'
import type { SubmenuItem, RegionItem } from '@/types/navigation.types'
import { TruckTypeRegistry } from '@/domain/truck-type/truck-type.config'
import { PartnerRegistry } from '@/domain/partner/partner.config'
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
        href: `/services#${allServices[0].id}`,
    },
    {
        title: allServices[1].title,
        href: `/services#${allServices[1].id}`,
    },
    {
        title: allServices[2].title,
        href: `/services#${allServices[2].id}`,
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
]

/**
 * Truck type navigation items
 * Dynamically generated from domain registry (DDD: Single Source of Truth)
 * This ensures navigation stays in sync with available truck types
 */
export const truckTypes: SubmenuItem[] = TruckTypeRegistry.getAll().map((truckType) => ({
    title: truckType.name,
    href: `/truck-type/${truckType.slug}`,
}))

/**
 * Multi-level structure for Areas We Serve
 * Regions with nested states
 */
export const areasWeServeItems: RegionItem[] = [
    {
        title: 'Northeast',
        href: '/areas-we-serve/northeast',
        states: [
            { title: 'Connecticut', href: '/areas-we-serve/northeast/connecticut' },
            { title: 'Maine', href: '/areas-we-serve/northeast/maine' },
            { title: 'Massachusetts', href: '/areas-we-serve/northeast/massachusetts' },
            { title: 'New Hampshire', href: '/areas-we-serve/northeast/new-hampshire' },
            { title: 'New Jersey', href: '/areas-we-serve/northeast/new-jersey' },
            { title: 'New York', href: '/areas-we-serve/northeast/new-york' },
            { title: 'Pennsylvania', href: '/areas-we-serve/northeast/pennsylvania' },
            { title: 'Rhode Island', href: '/areas-we-serve/northeast/rhode-island' },
            { title: 'Vermont', href: '/areas-we-serve/northeast/vermont' },
        ],
    },
    {
        title: 'Midwest',
        href: '/areas-we-serve/midwest',
        states: [
            { title: 'Illinois', href: '/areas-we-serve/midwest/illinois' },
            { title: 'Indiana', href: '/areas-we-serve/midwest/indiana' },
            { title: 'Iowa', href: '/areas-we-serve/midwest/iowa' },
            { title: 'Kansas', href: '/areas-we-serve/midwest/kansas' },
            { title: 'Michigan', href: '/areas-we-serve/midwest/michigan' },
            { title: 'Minnesota', href: '/areas-we-serve/midwest/minnesota' },
            { title: 'Missouri', href: '/areas-we-serve/midwest/missouri' },
            { title: 'Nebraska', href: '/areas-we-serve/midwest/nebraska' },
            { title: 'North Dakota', href: '/areas-we-serve/midwest/north-dakota' },
            { title: 'Ohio', href: '/areas-we-serve/midwest/ohio' },
            { title: 'South Dakota', href: '/areas-we-serve/midwest/south-dakota' },
            { title: 'Wisconsin', href: '/areas-we-serve/midwest/wisconsin' },
        ],
    },
    {
        title: 'Southern US',
        href: '/areas-we-serve/southern-us',
        states: [
            { title: 'Alabama', href: '/areas-we-serve/southern-us/alabama' },
            { title: 'Arkansas', href: '/areas-we-serve/southern-us/arkansas' },
            { title: 'Delaware', href: '/areas-we-serve/southern-us/delaware' },
            { title: 'Florida', href: '/areas-we-serve/southern-us/florida' },
            { title: 'Georgia', href: '/areas-we-serve/southern-us/georgia' },
            { title: 'Kentucky', href: '/areas-we-serve/southern-us/kentucky' },
            { title: 'Louisiana', href: '/areas-we-serve/southern-us/louisiana' },
            { title: 'Maryland', href: '/areas-we-serve/southern-us/maryland' },
            { title: 'Mississippi', href: '/areas-we-serve/southern-us/mississippi' },
            { title: 'North Carolina', href: '/areas-we-serve/southern-us/north-carolina' },
            { title: 'Oklahoma', href: '/areas-we-serve/southern-us/oklahoma' },
            { title: 'South Carolina', href: '/areas-we-serve/southern-us/south-carolina' },
            { title: 'Tennessee', href: '/areas-we-serve/southern-us/tennessee' },
            { title: 'Texas', href: '/areas-we-serve/southern-us/texas' },
            { title: 'Virginia', href: '/areas-we-serve/southern-us/virginia' },
            { title: 'West Virginia', href: '/areas-we-serve/southern-us/west-virginia' },
        ],
    },
    {
        title: 'Western US',
        href: '/areas-we-serve/western-us',
        states: [
            { title: 'Alaska', href: '/areas-we-serve/western-us/alaska' },
            { title: 'Arizona', href: '/areas-we-serve/western-us/arizona' },
            { title: 'California', href: '/areas-we-serve/western-us/california' },
            { title: 'Colorado', href: '/areas-we-serve/western-us/colorado' },
            { title: 'Hawaii', href: '/areas-we-serve/western-us/hawaii' },
            { title: 'Idaho', href: '/areas-we-serve/western-us/idaho' },
            { title: 'Montana', href: '/areas-we-serve/western-us/montana' },
            { title: 'Nevada', href: '/areas-we-serve/western-us/nevada' },
            { title: 'New Mexico', href: '/areas-we-serve/western-us/new-mexico' },
            { title: 'Oregon', href: '/areas-we-serve/western-us/oregon' },
            { title: 'Utah', href: '/areas-we-serve/western-us/utah' },
            { title: 'Washington', href: '/areas-we-serve/western-us/washington' },
            { title: 'Wyoming', href: '/areas-we-serve/western-us/wyoming' },
        ],
    },
]

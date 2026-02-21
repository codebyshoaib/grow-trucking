/**
 * Domain Types: Navigation
 * Type definitions for navigation-related entities
 */

/**
 * Base navigation item with optional submenu
 */
export interface NavItem {
    label: string
    href: string
    hasSubmenu?: boolean
    submenuItems?: SubmenuItem[] | RegionItem[]
    isMultiLevel?: boolean
}

/**
 * Standard submenu item (used for About, Services, etc.)
 */
export interface SubmenuItem {
    title: string
    href: string
}

/**
 * State item within a region
 */
export interface StateItem {
    title: string
    href: string
}

/**
 * Region item with nested states (used for Areas We Serve)
 */
export interface RegionItem {
    title: string
    href: string
    states?: StateItem[]
}

/**
 * Header navigation component props
 */
export interface HeaderNavProps {
    isScrolled?: boolean
}

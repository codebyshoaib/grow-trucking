import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Convert a title string to a URL-friendly slug
 * Used for generating hash links from service titles
 */
export function titleToSlug(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Convert truck type name to slug format
 * Handles special cases like "Box Truck" -> "box-truck"
 */
export function truckTypeNameToSlug(name: string): string {
  return titleToSlug(name)
}

/**
 * Convert slug to display name format
 * e.g., "box-truck" -> "Box Truck"
 */
export function slugToDisplayName(slug: string): string {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

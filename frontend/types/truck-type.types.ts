/**
 * Domain Types: Truck Type
 * Core domain entities and value objects for truck type pages
 * Following DDD principles - domain layer contains business logic and rules
 */

/**
 * Truck Type Slug - Value Object
 * Represents a URL-friendly identifier for a truck type
 */
export type TruckTypeSlug = 
    | 'dry-van'
    | 'reefer'
    | 'flatbed'
    | 'box-truck'
    | 'hotshot'
    | 'power-only'

/**
 * Feature Item - Value Object
 * Represents a single feature or benefit of a truck type service
 */
export interface FeatureItem {
    title: string
    description: string
    icon?: string // Optional icon identifier
}

/**
 * Benefit Item - Value Object
 * Represents a key benefit or advantage
 */
export interface BenefitItem {
    title: string
    description: string
}

/**
 * Truck Type Entity - Domain Entity
 * Represents the complete truck type with all its properties
 */
export interface TruckTypeEntity {
    // Identity
    id: TruckTypeSlug
    name: string
    displayName: string
    slug: TruckTypeSlug
    
    // Content
    tagline: string
    description: string
    longDescription: string
    keyFeaturesDescription: string
    subtitle?: string // e.g., "Any type of 48'-53' trucks"
    
    // Media
    heroImage: string
    contentImage: string
    
    // Features & Benefits
    features: FeatureItem[]
    benefits: BenefitItem[]
    keyPoints: string[] // Bullet points
    
    // SEO & Metadata
    metaTitle: string
    metaDescription: string
    keywords: string[]
    
    // Call to Action
    ctaHeadline: string
    ctaDescription: string
    
    // Service-specific details
    serviceType: string
    areaServed?: string
}

/**
 * Truck Type Registry - Domain Service Interface
 * Provides access to truck type entities
 */
export interface ITruckTypeRegistry {
    getBySlug(slug: TruckTypeSlug): TruckTypeEntity | null
    getAll(): TruckTypeEntity[]
    exists(slug: string): boolean
}

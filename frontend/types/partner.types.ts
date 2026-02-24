/**
 * Domain Types: Partner
 * Core domain entities and value objects for partner pages
 * Following DDD principles - domain layer contains business logic and rules
 */

/**
 * Partner Slug - Value Object
 * Represents a URL-friendly identifier for a partner
 */
export type PartnerSlug = 
    | 'c-h-robinson-worldwide-inc'
    | 'j-b-hunt-transport-services-inc'
    | 'total-quality-logistics-tql'
    | 'echo-global-logistics'
    | 'rxo'
    | 'landstar-system'
    | 'uber-freight'
    | 'mode-global'
    | 'wwex-group'
    | 'arrive-logistics'

/**
 * Partner Entity - Domain Entity
 * Represents the complete partner with all its properties
 */
export interface PartnerEntity {
    // Identity
    id: PartnerSlug
    name: string
    displayName: string
    partnerImage?: string
    slug: PartnerSlug
    
    // Content
    tagline: string
    overview: string
    longDescription: string
    
    // Services
    coreServices: string[]
    whyChoose?: string
    strengths?: string[]
    
    // Relationship
    relationship: string
    cta: string
    
    // SEO & Metadata
    metaTitle: string
    metaDescription: string
    keywords: string[]
    
    // Optional media
    logo?: string
    heroImage?: string
}

/**
 * Partner Registry - Domain Service Interface
 * Provides access to partner entities
 */
export interface IPartnerRegistry {
    getBySlug(slug: PartnerSlug): PartnerEntity | null
    getAll(): PartnerEntity[]
    exists(slug: string): boolean
}

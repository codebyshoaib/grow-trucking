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
 * Specification Item - Value Object
 * Represents a specification detail
 */
export interface SpecificationItem {
    label: string
    value: string
}

/**
 * Market Rate Row - Value Object
 * Represents a row in the market rates table
 */
export interface MarketRateRow {
    routeType: string
    ratePerMile: string
    averageLoadValue: string
}

/**
 * High Demand Lane - Value Object
 * Represents a high-demand freight lane
 */
export interface HighDemandLane {
    title: string
    description: string
    rate?: string
    distance?: string
}

/**
 * Dispatch Process Step - Value Object
 * Represents a step in the dispatch process
 */
export interface DispatchProcessStep {
    step: number
    title: string
    description: string
}

/**
 * Equipment Item - Value Object
 * Represents an equipment requirement or recommendation
 */
export interface EquipmentItem {
    category: 'essential' | 'premium'
    name: string
    description?: string
    ratePremium?: string
}

/**
 * Challenge Solution - Value Object
 * Represents a challenge and its solution
 */
export interface ChallengeSolution {
    challenge: string
    solution: string
}

/**
 * Success Story - Value Object
 * Represents a customer success story/testimonial
 */
export interface SuccessStory {
    quote: string
    author: string
    location: string
    equipment?: string
}

/**
 * Comparison Row - Value Object
 * Represents a row in a comparison table
 */
export interface ComparisonRow {
    feature: string
    currentType: string
    otherTypes: Record<string, string>
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
    whatIsDescription?: string // "What Is [Truck Type] Freight?" section
    
    // Media
    heroImage: string
    contentImage: string
    
    // Features & Benefits
    features: FeatureItem[]
    benefits: BenefitItem[]
    keyPoints: string[] // Bullet points
    
    // Specifications
    specifications?: SpecificationItem[]
    specificationsDescription?: string
    
    // Market Rates
    marketRates?: MarketRateRow[]
    marketRatesDescription?: string
    
    // High-Demand Lanes
    highDemandLanes?: HighDemandLane[]
    highDemandLanesDescription?: string
    
    // Dispatch Process
    dispatchProcess?: DispatchProcessStep[]
    
    // Equipment Requirements
    equipmentEssential?: EquipmentItem[]
    equipmentPremium?: EquipmentItem[]
    equipmentDescription?: string
    
    // Challenges & Solutions
    challenges?: ChallengeSolution[]
    
    // Pricing
    pricing?: {
        standardRate?: string
        premiumRate?: string
        setupFee?: string
        included?: string[]
    }
    
    // Success Stories
    successStories?: SuccessStory[]
    
    // Comparison Tables
    comparisonTable?: ComparisonRow[]
    comparisonDescription?: string
    
    // Types of Freight
    typesOfFreight?: string[]
    
    // Regional Hotspots
    regionalHotspots?: Array<{
        location: string
        description: string
        weeklyRevenue?: string
    }>
    
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

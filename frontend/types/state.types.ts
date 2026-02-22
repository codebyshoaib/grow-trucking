/**
 * Domain Types: State
 * Core domain entities and value objects for state pages
 * Following DDD principles - domain layer contains business logic and rules
 */

/**
 * State Slug - Value Object
 * Represents a URL-friendly identifier for a state
 */
export type StateSlug =
    | 'california'
    | 'texas'
    | 'illinois'
    | 'florida'
    | 'georgia'
    | 'pennsylvania'
    | 'ohio'
    | 'north-carolina'
    | 'arizona'
    | 'washington'
    | 'tennessee'
    | 'indiana'
    | 'michigan'
    | 'new-jersey'
    | 'wisconsin'
    | 'minnesota'
    | 'colorado'
    | 'oregon'
    | 'kentucky'
    | 'louisiana'
    | 'alabama'
    | 'virginia'
    | 'missouri'
    | 'oklahoma'
    | 'kansas'
    | 'south-carolina'
    | 'iowa'
    | 'arkansas'
    | 'maryland'
    | 'mississippi'
    | 'nevada'
    | 'new-mexico'
    | 'utah'
    | 'connecticut'
    | 'nebraska'
    | 'idaho'
    | 'massachusetts'
    | 'west-virginia'
    | 'maine'
    | 'montana'
    | 'rhode-island'
    | 'north-dakota'
    | 'south-dakota'
    | 'delaware'
    | 'vermont'
    | 'new-hampshire'
    | 'wyoming'
    | 'alaska'
    | 'hawaii'

/**
 * Lane Slug - Value Object
 * Represents a URL-friendly identifier for a lane
 */
export type LaneSlug = string // Dynamic based on lane names

/**
 * Lane Entity - Domain Entity
 * Represents a freight lane within a state
 */
export interface LaneEntity {
    // Identity
    id: string
    name: string
    displayName: string
    slug: LaneSlug
    stateSlug: StateSlug
    
    // Content
    description: string
    longDescription?: string
    
    // Route Information
    origin?: string
    destination?: string
    distance?: string
    averageTransitTime?: string
    
    // Market Information
    averageRate?: string
    ratePerMile?: string
    loadFrequency?: string
    peakSeasons?: string[]
    
    // Freight Types
    freightTypes?: string[]
    
    // Key Features
    keyFeatures?: string[]
    
    // Benefits
    benefits?: string[]
    
    // Challenges
    challenges?: string[]
    
    // Tips
    tips?: string[]
    
    // Commodities (Section 4)
    primaryCommodities?: string[]
    secondaryCommodities?: string[]
    seasonalCargo?: string[]
    
    // Seasonal Behavior (Section 5)
    seasonalBehavior?: {
        q1Slow?: boolean | string
        q4Peak?: boolean | string
        produceSeason?: boolean | string
        hurricaneRisk?: boolean | string
    }
    
    // Rate Negotiation (Section 6)
    rateNegotiation?: {
        whenToBook?: string[]
        whatBrokersPayMore?: string[]
        whenToAvoid?: string[]
    }
    
    // Backhaul Strategy (Section 7)
    backhaulStrategy?: {
        bestReturnCities?: string[]
        deadheadRiskPercentage?: string
        alternativeRoutes?: string[]
    }
    
    // Dispatcher Tips (Section 8) - using existing tips field
    
    // Media
    heroImage?: string
    contentImage?: string
    
    // SEO & Metadata
    metaTitle: string
    metaDescription: string
    keywords: string[]
    
    // Call to Action
    ctaHeadline?: string
    ctaDescription?: string
}

/**
 * State Entity - Domain Entity
 * Represents a state with all its properties and lanes
 */
export interface StateEntity {
    // Identity
    id: StateSlug
    name: string
    displayName: string
    slug: StateSlug
    abbreviation: string // e.g., "CA", "TX"
    
    // Content
    tagline: string
    description: string
    longDescription: string
    overview?: string
    
    // Market Information
    marketOverview?: string
    averageRates?: string
    marketTrends?: string[]
    
    // Key Industries
    keyIndustries?: string[]
    
    // Major Cities
    majorCities?: string[]
    
    // High-Demand Lanes
    highDemandLanes?: Array<{
        name: string
        description: string
        rate?: string
        distance?: string
        slug?: string // Lane slug for proper routing
    }>
    
    // Freight Types
    commonFreightTypes?: string[]
    
    // Benefits
    benefits?: string[]
    
    // Challenges
    challenges?: string[]
    
    // Regulations
    regulations?: string[]
    
    // Seasonal Considerations
    seasonalConsiderations?: string[]
    
    // Seasonal Trends (Section 6)
    seasonalTrends?: {
        q1?: { rateMovement?: string; weatherImpact?: string; strategy?: string }
        q2?: { rateMovement?: string; weatherImpact?: string; strategy?: string }
        q3?: { rateMovement?: string; weatherImpact?: string; strategy?: string }
        q4?: { rateMovement?: string; weatherImpact?: string; strategy?: string }
    }
    
    // Major Freight Hubs (Section 7)
    ports?: Array<{ name: string; description?: string }>
    intermodalCenters?: Array<{ name: string; description?: string }>
    borderCrossings?: Array<{ name: string; description?: string }>
    
    // Truck Parking & Fuel (Section 8)
    truckStops?: Array<{ name: string; location?: string; description?: string }>
    parkingDifficulty?: string
    strategicPositioning?: string[]
    
    // Weigh Stations & Regulations (Section 9)
    weightLimits?: {
        singleAxle?: string
        tandemAxle?: string
        grossVehicleWeight?: string
    }
    sizeLimits?: {
        width?: string
        height?: string
        length?: string
    }
    permits?: Array<{ type: string; description?: string }>
    emissionLaws?: string
    
    // Rate Trends (Section 10)
    rateTrends?: {
        historicalRates?: Array<{ period: string; description: string }>
        marketCorrections?: Array<{ period: string; description: string }>
        projection2025?: string
        rateDrivers?: string[]
    }
    
    // Deadhead Strategy (Section 11)
    deadheadStrategy?: {
        outboundPercentage?: string
        inboundPercentage?: string
        bestBackhaulLanes?: Array<{ name: string; description?: string; rate?: string }>
        positioningStrategies?: string[]
    }
    
    // Professional Dispatcher Insights (Section 12)
    dispatcherInsights?: string[]
    
    // FAQ Section (Section 13)
    faq?: Array<{ question: string; answer: string }>
    
    // Media
    heroImage: string
    contentImage?: string
    
    // Lanes
    lanes?: LaneEntity[]
    
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
 * State Registry - Domain Service Interface
 * Provides access to state entities
 */
export interface IStateRegistry {
    getBySlug(slug: StateSlug): StateEntity | null
    getAll(): StateEntity[]
    exists(slug: string): boolean
    getLanesByState(stateSlug: StateSlug): LaneEntity[]
}

/**
 * Lane Registry - Domain Service Interface
 * Provides access to lane entities
 */
export interface ILaneRegistry {
    getBySlug(slug: LaneSlug, stateSlug: StateSlug): LaneEntity | null
    getAll(stateSlug?: StateSlug): LaneEntity[]
    exists(slug: string, stateSlug: StateSlug): boolean
}

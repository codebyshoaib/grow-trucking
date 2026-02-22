/**
 * Master Content Structure Configuration
 * 
 * Defines the exact content structure for:
 * 1. State Pages (14 sections)
 * 2. Lane Pages (9 sections including H1)
 * 
 * This configuration ensures consistency across all content pages
 * and serves as the master template for content generation and validation.
 * 
 * This is highly practical = high retention.
 */

/**
 * State Page Content Structure
 * Every state page must follow this exact order and structure
 */
export const STATE_PAGE_STRUCTURE = {
    /**
     * Section 1: State H1
     * Format: [State] Truck Dispatcher | [State Abbreviation] Freight Loads & Dispatch Services
     * Example: "Texas Truck Dispatcher | TX Freight Loads & Dispatch Services"
     */
    h1: {
        order: 1,
        name: 'State H1',
        template: '[State] Truck Dispatcher | [State Abbreviation] Freight Loads & Dispatch Services',
        required: true,
        description: 'Main page heading with state name and abbreviation',
    },

    /**
     * Section 2: Intro Section
     * 150-200 words covering:
     * - State freight importance ranking
     * - Major industries
     * - Why owner-operators benefit
     * - Year-round opportunity angle
     */
    intro: {
        order: 2,
        name: 'Intro Section',
        wordCount: { min: 150, max: 200 },
        required: true,
        elements: [
            'State freight importance ranking',
            'Major industries',
            'Why owner-operators benefit',
            'Year-round opportunity angle',
        ],
        description: 'Introduction that establishes state freight importance and owner-operator value proposition',
    },

    /**
     * Section 3: State Market Overview Section
     * Data authority section with key metrics
     */
    marketOverview: {
        order: 3,
        name: 'State Market Overview Section',
        required: true,
        metrics: [
            'Annual Freight Tonnage',
            'Average Dry Van Rate',
            'Average Reefer Rate',
            'Average Flatbed Rate',
            'Registered Commercial Trucks',
            'Active Motor Carriers',
            'Load-to-Truck Ratio',
            'Major Freight Corridors',
            'Ports (if applicable)',
        ],
        description: 'Comprehensive market data that establishes authority and provides actionable insights',
    },

    /**
     * Section 4: Top 15 Freight Lanes From [State]
     * High-intent keyword goldmine
     */
    topFreightLanes: {
        order: 4,
        name: 'Top 15 Freight Lanes From [State]',
        count: 15,
        required: true,
        format: 'list',
        fields: [
            'City A → City B',
            'Distance',
            'Average Rate',
            'Daily Load Volume',
            'Commodities',
            'Peak Days',
            'Deadhead Return',
            'Dispatcher Tip',
        ],
        description: 'List of top 15 freight lanes with detailed metrics for each lane',
    },

    /**
     * Section 5: Top Commodities Section
     * Break into 5-7 major categories
     */
    topCommodities: {
        order: 5,
        name: 'Top Commodities Section',
        required: true,
        categories: [
            'Manufacturing',
            'Agriculture',
            'Retail',
            'Energy',
            'Automotive',
            'Food Processing',
            'Tech / Pharma (if applicable)',
        ],
        categoryCount: { min: 5, max: 7 },
        perCategory: [
            '% share',
            'Equipment type',
            'Average rate',
            'Seasonality',
        ],
        description: 'Breakdown of major commodity categories with market share and equipment requirements',
    },

    /**
     * Section 6: Seasonal Trends Section
     * Quarterly breakdown
     */
    seasonalTrends: {
        order: 6,
        name: 'Seasonal Trends Section',
        required: true,
        quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
        perQuarter: [
            'Rate movement',
            'Weather impact',
            'Strategy',
        ],
        description: 'Quarterly analysis of seasonal trends, rate movements, and strategic recommendations',
    },

    /**
     * Section 7: Major Freight Hubs Section
     */
    majorFreightHubs: {
        order: 7,
        name: 'Major Freight Hubs Section',
        required: true,
        elements: [
            'Distribution cities',
            'Port details',
            'Intermodal centers',
            'Border crossings (if applicable)',
        ],
        description: 'Key freight infrastructure and distribution centers within the state',
    },

    /**
     * Section 8: Truck Parking & Fuel Section
     * Builds driver trust
     */
    truckParkingFuel: {
        order: 8,
        name: 'Truck Parking & Fuel Section',
        required: true,
        elements: [
            'Major truck stops',
            'Parking difficulty',
            'Strategic positioning advice',
        ],
        description: 'Practical information about truck parking and fuel availability to build driver trust',
    },

    /**
     * Section 9: Weigh Stations & Regulations Section
     * Builds authority
     */
    weighStationsRegulations: {
        order: 9,
        name: 'Weigh Stations & Regulations Section',
        required: true,
        elements: [
            'Weight limits',
            'Size limits',
            'State-specific rules',
            'Permits',
            'Emission laws (CARB for CA etc.)',
        ],
        description: 'Comprehensive regulatory information including weight limits, permits, and emission requirements',
    },

    /**
     * Section 10: Rate Trends (10-Year Analysis)
     * Makes content look institutional
     */
    rateTrends: {
        order: 10,
        name: 'Rate Trends (10-Year Analysis)',
        required: true,
        timeframe: '10 years',
        elements: [
            'Historical rates',
            'Market correction periods',
            '2025 projection',
            'What drives rates',
        ],
        description: 'Long-term rate analysis with historical data and future projections',
    },

    /**
     * Section 11: Deadhead Strategy Section
     */
    deadheadStrategy: {
        order: 11,
        name: 'Deadhead Strategy Section',
        required: true,
        elements: [
            'Outbound %',
            'Inbound %',
            'Best backhaul lanes',
            'Positioning strategies',
        ],
        description: 'Strategic guidance on minimizing deadhead miles and optimizing backhaul opportunities',
    },

    /**
     * Section 12: Professional Dispatcher Insights (Experience-Based)
     * Differentiates from generic SEO blogs
     */
    dispatcherInsights: {
        order: 12,
        name: 'Professional Dispatcher Insights',
        required: true,
        count: { min: 5, max: 8 },
        type: 'tactical lessons',
        description: 'Experience-based tactical insights that provide real value and differentiate from generic content',
    },

    /**
     * Section 13: FAQ Section
     * Helps Google featured snippets
     */
    faq: {
        order: 13,
        name: 'FAQ Section',
        required: true,
        count: { min: 6, max: 8 },
        exampleQuestions: [
            'Do I need state authority?',
            'What insurance is required?',
            'What pays best?',
            'Is this good for new owner operators?',
        ],
        description: 'Frequently asked questions optimized for featured snippets and user intent',
    },

    /**
     * Section 14: CTA Section
     */
    cta: {
        order: 14,
        name: 'CTA Section',
        required: true,
        headline: 'Get Professional [State] Truck Dispatching Services',
        benefits: [
            '24/7 Load Finding',
            'Rate Negotiation',
            'Backhaul Optimization',
            'Compliance Support',
        ],
        description: 'Call-to-action section with clear value proposition and service benefits',
    },
} as const

/**
 * Lane Page Content Structure
 * Every lane page must follow this exact order and structure
 */
export const LANE_PAGE_STRUCTURE = {
    /**
     * Section 1: H1
     * Format: [Origin City] to [Destination City] Freight Loads | Truck Dispatch Services
     * Example: "Dallas to Atlanta Freight Loads | Truck Dispatch Services"
     */
    h1: {
        order: 1,
        name: 'Lane H1',
        template: '[Origin City] to [Destination City] Freight Loads | Truck Dispatch Services',
        required: true,
        description: 'Main page heading with origin and destination cities',
    },

    /**
     * Section 2: Quick Overview
     * 150 words covering:
     * - Why this lane matters
     * - Volume
     * - Equipment types
     * - Consistency
     */
    quickOverview: {
        order: 2,
        name: 'Quick Overview',
        wordCount: 150,
        required: true,
        elements: [
            'Why this lane matters',
            'Volume',
            'Equipment types',
            'Consistency',
        ],
        description: 'Concise overview that establishes lane importance and key characteristics',
    },

    /**
     * Section 3: Lane Statistics Block
     * Key metrics in a structured format
     */
    laneStatistics: {
        order: 3,
        name: 'Lane Statistics Block',
        required: true,
        metrics: [
            'Distance',
            'Average Dry Van Rate',
            'Average Reefer Rate',
            'Average Flatbed Rate',
            'Average Transit Time',
            'Deadhead Risk',
            'Best Booking Days',
        ],
        description: 'Comprehensive statistics block with all key lane metrics',
    },

    /**
     * Section 4: What Moves on This Lane?
     * Commodity breakdown
     */
    commodities: {
        order: 4,
        name: 'What Moves on This Lane?',
        required: true,
        categories: [
            'Primary Commodities',
            'Secondary Commodities',
            'Seasonal Cargo',
        ],
        description: 'Detailed breakdown of what freight moves on this specific lane',
    },

    /**
     * Section 5: Seasonal Behavior
     * Timing and seasonality analysis
     */
    seasonalBehavior: {
        order: 5,
        name: 'Seasonal Behavior',
        required: true,
        elements: [
            'Q1 slow?',
            'Q4 peak?',
            'Produce season?',
            'Hurricane risk?',
        ],
        description: 'Analysis of seasonal patterns, peak periods, and risk factors',
    },

    /**
     * Section 6: Rate Negotiation Strategy
     * Tactical booking guidance
     */
    rateNegotiation: {
        order: 6,
        name: 'Rate Negotiation Strategy',
        required: true,
        elements: [
            'When to book',
            'What brokers pay more',
            'When to avoid',
        ],
        description: 'Strategic guidance on rate negotiation and optimal booking timing',
    },

    /**
     * Section 7: Backhaul Strategy
     * Return load optimization
     */
    backhaulStrategy: {
        order: 7,
        name: 'Backhaul Strategy',
        required: true,
        elements: [
            'Best return cities',
            'Deadhead risk %',
            'Alternative routes',
        ],
        description: 'Strategic guidance on minimizing deadhead and finding profitable return loads',
    },

    /**
     * Section 8: Dispatcher Insider Tips
     * Conversion gold - tactical advice
     */
    dispatcherTips: {
        order: 8,
        name: 'Dispatcher Insider Tips',
        required: true,
        count: { min: 2, max: 5 },
        type: 'tactical pieces of advice',
        description: 'Practical, insider tips that provide real value and drive conversions',
    },

    /**
     * Section 9: CTA Section
     * Conversion-focused call-to-action
     */
    cta: {
        order: 9,
        name: 'CTA Section',
        required: true,
        headline: 'Need help running [Origin] to [Destination] consistently?',
        description: 'Our dispatch team secures premium loads on this lane.',
        subtext: 'This is highly practical = high retention.',
    },
} as const

/**
 * Content Structure Validation
 * Helper functions to validate content against the master structure
 */
export const ContentStructureValidator = {
    /**
     * Validate state page structure
     */
    validateStatePage: (content: Record<string, any>): { valid: boolean; errors: string[] } => {
        const errors: string[] = []
        
        // Check all required sections exist
        Object.values(STATE_PAGE_STRUCTURE).forEach((section) => {
            if (section.required && !content[section.name]) {
                errors.push(`Missing required section: ${section.name}`)
            }
        })

        // Validate intro word count
        if (content.intro) {
            const wordCount = content.intro.split(/\s+/).length
            const { min, max } = STATE_PAGE_STRUCTURE.intro.wordCount
            if (wordCount < min || wordCount > max) {
                errors.push(`Intro section word count (${wordCount}) must be between ${min} and ${max}`)
            }
        }

        // Validate top freight lanes count
        if (content.topFreightLanes) {
            const laneCount = Array.isArray(content.topFreightLanes) ? content.topFreightLanes.length : 0
            if (laneCount !== STATE_PAGE_STRUCTURE.topFreightLanes.count) {
                errors.push(`Top freight lanes count (${laneCount}) must be exactly ${STATE_PAGE_STRUCTURE.topFreightLanes.count}`)
            }
        }

        // Validate dispatcher insights count
        if (content.dispatcherInsights) {
            const insightsCount = Array.isArray(content.dispatcherInsights) ? content.dispatcherInsights.length : 0
            const { min, max } = STATE_PAGE_STRUCTURE.dispatcherInsights.count
            if (insightsCount < min || insightsCount > max) {
                errors.push(`Dispatcher insights count (${insightsCount}) must be between ${min} and ${max}`)
            }
        }

        // Validate FAQ count
        if (content.faq) {
            const faqCount = Array.isArray(content.faq) ? content.faq.length : 0
            const { min, max } = STATE_PAGE_STRUCTURE.faq.count
            if (faqCount < min || faqCount > max) {
                errors.push(`FAQ count (${faqCount}) must be between ${min} and ${max}`)
            }
        }

        return {
            valid: errors.length === 0,
            errors,
        }
    },

    /**
     * Validate lane page structure
     */
    validateLanePage: (content: Record<string, any>): { valid: boolean; errors: string[] } => {
        const errors: string[] = []

        // Check all required sections exist
        Object.values(LANE_PAGE_STRUCTURE).forEach((section) => {
            if (section.required && !content[section.name]) {
                errors.push(`Missing required section: ${section.name}`)
            }
        })

        // Validate quick overview word count
        if (content.quickOverview) {
            const wordCount = content.quickOverview.split(/\s+/).length
            const targetCount = LANE_PAGE_STRUCTURE.quickOverview.wordCount
            if (wordCount !== targetCount) {
                errors.push(`Quick overview word count (${wordCount}) should be approximately ${targetCount}`)
            }
        }

        // Validate dispatcher tips count
        if (content.dispatcherTips) {
            const tipsCount = Array.isArray(content.dispatcherTips) ? content.dispatcherTips.length : 0
            const { min, max } = LANE_PAGE_STRUCTURE.dispatcherTips.count
            if (tipsCount < min || tipsCount > max) {
                errors.push(`Dispatcher tips count (${tipsCount}) must be between ${min} and ${max}`)
            }
        }

        return {
            valid: errors.length === 0,
            errors,
        }
    },
}

/**
 * Content Structure Generator
 * Helper functions to generate content templates based on the master structure
 */
export const ContentStructureGenerator = {
    /**
     * Generate state page H1
     */
    generateStateH1: (stateName: string, stateAbbreviation: string): string => {
        return `${stateName} Truck Dispatcher | ${stateAbbreviation} Freight Loads & Dispatch Services`
    },

    /**
     * Generate lane page H1
     */
    generateLaneH1: (originCity: string, destinationCity: string): string => {
        return `${originCity} to ${destinationCity} Freight Loads | Truck Dispatch Services`
    },

    /**
     * Generate state page CTA headline
     */
    generateStateCTAHeadline: (stateName: string): string => {
        return `Get Professional ${stateName} Truck Dispatching Services`
    },

    /**
     * Generate lane page CTA headline
     */
    generateLaneCTAHeadline: (originCity: string, destinationCity: string): string => {
        return `Need help running ${originCity} to ${destinationCity} consistently?`
    },
}

/**
 * Export section order arrays for easy iteration
 */
export const STATE_PAGE_SECTIONS = Object.values(STATE_PAGE_STRUCTURE).sort((a, b) => a.order - b.order)
export const LANE_PAGE_SECTIONS = Object.values(LANE_PAGE_STRUCTURE).sort((a, b) => a.order - b.order)

/**
 * Type definitions for content structure
 */
export type StatePageStructure = typeof STATE_PAGE_STRUCTURE
export type LanePageStructure = typeof LANE_PAGE_STRUCTURE
export type ContentSection = typeof STATE_PAGE_STRUCTURE[keyof typeof STATE_PAGE_STRUCTURE]
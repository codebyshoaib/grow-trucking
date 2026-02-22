'use client'

import React from 'react'
import StateHero from './StateHero'
import StateOverview from './StateOverview'
import StateMarketInfo from './StateMarketInfo'
import StateKeyIndustries from './StateKeyIndustries'
import StateHighDemandLanes from './StateHighDemandLanes'
import StateSeasonalTrends from './StateSeasonalTrends'
import StateMajorFreightHubs from './StateMajorFreightHubs'
import StateTruckParkingFuel from './StateTruckParkingFuel'
import StateWeighStationsRegulations from './StateWeighStationsRegulations'
import StateRateTrends from './StateRateTrends'
import StateDeadheadStrategy from './StateDeadheadStrategy'
import StateDispatcherInsights from './StateDispatcherInsights'
import StateFAQ from './StateFAQ'
import StateCTA from './StateCTA'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateServiceSchema } from '@/lib/schema'
import { STATE_PAGE_STRUCTURE } from '@/domain/content/content-structure.config'
import type { StateEntity } from '@/types/state.types'

interface StatePageProps {
    state: StateEntity
}

/**
 * StatePage Component
 * Application layer: Main page template orchestrating all sections
 * Reusable template for all state pages
 * 
 * Follows the master content structure defined in content-structure.config.ts
 * Must include all 14 sections in exact order:
 * 
 * 1. State H1 (StateHero)
 * 2. Intro Section (StateOverview)
 * 3. State Market Overview Section (StateMarketInfo)
 * 4. Top 15 Freight Lanes From [State] (StateHighDemandLanes)
 * 5. Top Commodities Section (StateKeyIndustries)
 * 6. Seasonal Trends Section (TODO: StateSeasonalTrends)
 * 7. Major Freight Hubs Section (TODO: StateMajorFreightHubs)
 * 8. Truck Parking & Fuel Section (TODO: StateTruckParkingFuel)
 * 9. Weigh Stations & Regulations Section (TODO: StateWeighStationsRegulations)
 * 10. Rate Trends (10-Year Analysis) (TODO: StateRateTrends)
 * 11. Deadhead Strategy Section (TODO: StateDeadheadStrategy)
 * 12. Professional Dispatcher Insights (TODO: StateDispatcherInsights)
 * 13. FAQ Section (TODO: StateFAQ)
 * 14. CTA Section (StateCTA)
 */
export default function StatePage({ state }: StatePageProps) {
    // Generate SEO schema for this state
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const serviceSchema = generateServiceSchema({
        name: `${state.displayName} Truck Dispatch Service`,
        description: state.metaDescription,
        provider: {
            name: 'Grow Trucking',
            url: siteUrl,
        },
        areaServed: state.areaServed || state.displayName,
        serviceType: state.serviceType,
    })

    return (
        <>
            <SchemaScript schema={serviceSchema} />
            <main className="min-h-screen bg-white">
                {/* Section 1: State H1 */}
                <StateHero state={state} />
                
                {/* Section 2: Intro Section (150-200 words) */}
                <StateOverview state={state} />
                
                {/* Section 3: State Market Overview Section */}
                <StateMarketInfo state={state} />
                
                {/* Section 4: Top 15 Freight Lanes From [State] */}
                <StateHighDemandLanes state={state} />
                
                {/* Section 5: Top Commodities Section */}
                <StateKeyIndustries state={state} />
                
                {/* Section 6: Seasonal Trends Section */}
                <StateSeasonalTrends state={state} />
                
                {/* Section 7: Major Freight Hubs Section */}
                <StateMajorFreightHubs state={state} />
                
                {/* Section 8: Truck Parking & Fuel Section */}
                <StateTruckParkingFuel state={state} />
                
                {/* Section 9: Weigh Stations & Regulations Section */}
                <StateWeighStationsRegulations state={state} />
                
                {/* Section 10: Rate Trends (10-Year Analysis) */}
                <StateRateTrends state={state} />
                
                {/* Section 11: Deadhead Strategy Section */}
                <StateDeadheadStrategy state={state} />
                
                {/* Section 12: Professional Dispatcher Insights */}
                <StateDispatcherInsights state={state} />
                
                {/* Section 13: FAQ Section */}
                <StateFAQ state={state} />
                
                {/* Section 14: CTA Section */}
                <StateCTA state={state} />
            </main>
        </>
    )
}

'use client'

import React from 'react'
import TruckTypeHero from './TruckTypeHero'
import TruckTypeOverview from './TruckTypeOverview'
import TruckTypeSpecifications from './TruckTypeSpecifications'
import TruckTypeTypesOfFreight from './TruckTypeTypesOfFreight'
import TruckTypeMarketRates from './TruckTypeMarketRates'
import TruckTypeHighDemandLanes from './TruckTypeHighDemandLanes'
import TruckTypeFeatures from './TruckTypeFeatures'
import TruckTypeDispatchProcess from './TruckTypeDispatchProcess'
import TruckTypeComparison from './TruckTypeComparison'
import TruckTypeEquipment from './TruckTypeEquipment'
import TruckTypeChallenges from './TruckTypeChallenges'
import TruckTypePricing from './TruckTypePricing'
import TruckTypeRegionalHotspots from './TruckTypeRegionalHotspots'
import TruckTypeSuccessStories from './TruckTypeSuccessStories'
import TruckTypeBenefits from './TruckTypeBenefits'
import TruckTypeKeyPoints from './TruckTypeKeyPoints'
import TruckTypeCTA from './TruckTypeCTA'
import SchemaScript from '@/components/seo/SchemaScript'
import { generateServiceSchema } from '@/lib/schema'
import type { TruckTypeEntity } from '@/types/truck-type.types'

interface TruckTypePageProps {
    truckType: TruckTypeEntity
}

/**
 * TruckTypePage Component
 * Application layer: Main page template orchestrating all sections
 * Reusable template for all truck type pages
 */
export default function TruckTypePage({ truckType }: TruckTypePageProps) {
    // Generate SEO schema for this truck type
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const serviceSchema = generateServiceSchema({
        name: `${truckType.displayName} Service`,
        description: truckType.metaDescription,
        provider: {
            name: 'Grow Trucking',
            url: siteUrl,
        },
        areaServed: truckType.areaServed || 'US',
        serviceType: truckType.serviceType,
    })

    return (
        <>
            <SchemaScript schema={serviceSchema} />
            <main className="min-h-screen bg-white">
                <TruckTypeHero truckType={truckType} />
                <TruckTypeOverview truckType={truckType} />
                <TruckTypeSpecifications truckType={truckType} />
                <TruckTypeTypesOfFreight truckType={truckType} />
                <TruckTypeMarketRates truckType={truckType} />
                <TruckTypeHighDemandLanes truckType={truckType} />
                <TruckTypeFeatures truckType={truckType} />
                <TruckTypeDispatchProcess truckType={truckType} />
                <TruckTypeComparison truckType={truckType} />
                <TruckTypeEquipment truckType={truckType} />
                <TruckTypeChallenges truckType={truckType} />
                <TruckTypeRegionalHotspots truckType={truckType} />
                <TruckTypePricing truckType={truckType} />
                <TruckTypeSuccessStories truckType={truckType} />
                <TruckTypeBenefits truckType={truckType} />
                <TruckTypeCTA truckType={truckType} />
            </main>
        </>
    )
}

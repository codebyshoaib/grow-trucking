'use client'

import React from 'react'
import TruckTypeHero from './TruckTypeHero'
import TruckTypeOverview from './TruckTypeOverview'
import TruckTypeFeatures from './TruckTypeFeatures'
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
                <TruckTypeFeatures truckType={truckType} />
                <TruckTypeBenefits truckType={truckType} />
                <TruckTypeCTA truckType={truckType} />
            </main>
        </>
    )
}

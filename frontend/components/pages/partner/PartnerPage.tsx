'use client'

import React from 'react'
import PartnerHero from './PartnerHero'
import PartnerOverview from './PartnerOverview'
import PartnerRelationship from './PartnerRelationship'
import PartnerCTA from './PartnerCTA'
import type { PartnerEntity } from '@/types/partner.types'

interface PartnerPageProps {
    partner: PartnerEntity
}

/**
 * PartnerPage Component
 * Main page template orchestrating all sections
 */
export default function PartnerPage({ partner }: PartnerPageProps) {
    return (
        <main className="min-h-screen bg-white">
            <PartnerHero partner={partner} />
            <PartnerOverview partner={partner} />
            <PartnerRelationship partner={partner} />
            <PartnerCTA partner={partner} />
        </main>
    )
}

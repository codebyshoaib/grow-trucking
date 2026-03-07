'use client'

import React, { useMemo } from 'react'
import FAQSection, { type FAQItem } from '@/components/pages/homepage/FAQSection'
import type { StateEntity } from '@/types/state.types'

interface StateFAQProps {
    state: StateEntity
}

function getSurplusStatus(state: StateEntity) {
    const outbound = Number((state.deadheadStrategy?.outboundPercentage || '').replace(/[^0-9.]/g, ''))
    const inbound = Number((state.deadheadStrategy?.inboundPercentage || '').replace(/[^0-9.]/g, ''))

    if (!Number.isNaN(outbound) && !Number.isNaN(inbound) && outbound > 0 && inbound > 0) {
        if (outbound > inbound) return 'freight surplus'
        if (inbound > outbound) return 'freight deficit'
    }

    return 'balanced to surplus depending on season and lane mix'
}

export default function StateFAQ({ state }: StateFAQProps) {
    const busiestLanes = useMemo(() => {
        const laneNames = (state.lanes || [])
            .slice(0, 5)
            .map((lane) => lane.displayName)
        return laneNames.length > 0 ? laneNames.join(', ') : 'major outbound and inbound freight corridors'
    }, [state.lanes])

    const faqs: FAQItem[] = useMemo(() => [
        {
            question: `What does freight pay in ${state.displayName}?`,
            answer: `Freight pay in ${state.displayName} depends on lane, equipment, seasonality, and urgency. ${state.averageRates || 'Rates shift by market cycle and load type'}. Loads tied to ${state.keyIndustries?.[0] || 'high-volume industries'} and strict appointment windows usually command better pricing.`,
        },
        {
            question: `What are the busiest freight lanes in ${state.displayName}?`,
            answer: `The busiest lanes in ${state.displayName} typically include ${busiestLanes}. Activity is strongest around ${state.majorCities?.slice(0, 2).join(' and ') || 'major metro freight hubs'} where outbound volume and reload opportunities are concentrated.`,
        },
        {
            question: `Is ${state.displayName} a freight surplus or deficit state?`,
            answer: `${state.displayName} is generally ${getSurplusStatus(state)}. Balance can shift by quarter, commodity cycle, and weather. Carriers improve consistency by planning outbound and backhaul together instead of booking one leg at a time.`,
        },
        {
            question: `What truck types are in highest demand in ${state.displayName}?`,
            answer: `Demand in ${state.displayName} is strongest for equipment aligned with local freight mix. Most carriers see steady volume with ${state.commonFreightTypes?.slice(0, 4).join(', ') || 'dry van, reefer, and flatbed equipment'}, with spikes during produce, retail, and industrial peaks.`,
        },
        {
            question: `What commodities drive freight volume in ${state.displayName}?`,
            answer: `Core commodities in ${state.displayName} are driven by ${state.keyIndustries?.slice(0, 4).join(', ') || 'manufacturing, food, retail, and industrial supply chains'}. These sectors shape lane density, appointment patterns, and pricing momentum across the state.`,
        },
    ], [state, busiestLanes])

    return (
        <FAQSection
            badgeText="STATE FREQUENTLY ASKED QUESTIONS"
            titleLeading={`${state.displayName} Freight`}
            titleHighlight="FAQs"
            description={`Core market questions for ${state.displayName}. Questions stay consistent while answers adapt to this state's lanes, demand patterns, and freight mix.`}
            faqs={faqs}
            ctaText="Get state help"
            ctaHref="/contact"
            defaultOpenId={1}
        />
    )
}

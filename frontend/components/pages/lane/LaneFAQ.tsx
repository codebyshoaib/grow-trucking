'use client'

import React from 'react'
import FAQSection, { type FAQItem } from '@/components/pages/homepage/FAQSection'
import type { LaneEntity } from '@/types/state.types'

interface LaneFAQProps {
    lane: LaneEntity
}

function getCityName(location?: string, fallback = 'the origin') {
    if (!location) return fallback
    return location.split(',')[0].trim() || fallback
}

function inferTruckType(lane: LaneEntity) {
    const sourceText = [
        lane.metaTitle,
        lane.metaDescription,
        lane.description,
        ...(lane.freightTypes || []),
        ...(lane.keywords || []),
    ]
        .join(' ')
        .toLowerCase()

    if (sourceText.includes('reefer')) return 'reefer'
    if (sourceText.includes('flatbed')) return 'flatbed'
    if (sourceText.includes('dry van')) return 'dry van'
    if (sourceText.includes('box truck')) return 'box truck'
    if (sourceText.includes('hotshot')) return 'hotshot'
    if (sourceText.includes('step deck')) return 'step deck'
    if (sourceText.includes('power only')) return 'power only'
    if (sourceText.includes('car hauler')) return 'car hauler'
    return 'truckload'
}

export default function LaneFAQ({ lane }: LaneFAQProps) {
    const origin = getCityName(lane.origin, 'origin')
    const destination = getCityName(lane.destination, 'destination')
    const truckType = inferTruckType(lane)

    const topFreight = (lane.primaryCommodities && lane.primaryCommodities.length > 0)
        ? lane.primaryCommodities.slice(0, 3).join(', ')
        : (lane.freightTypes && lane.freightTypes.length > 0)
            ? lane.freightTypes.slice(0, 3).join(', ')
            : 'general freight, consumer goods, and regional replenishment loads'

    const busiestWindow = (lane.peakSeasons && lane.peakSeasons.length > 0)
        ? lane.peakSeasons.join(', ')
        : 'early weekdays and seasonal retail cycles'

    const backhaulRisk = lane.backhaulStrategy?.deadheadRiskPercentage || 'market-dependent'
    const transitTime = lane.averageTransitTime || 'typically 1-3 days depending on appointments and traffic'
    const distance = lane.distance || 'route-dependent mileage'
    const rateRange = lane.averageRate || 'market rates'
    const perMile = lane.ratePerMile || 'current spot conditions'

    const faqs: FAQItem[] = [
        {
            question: `What do ${truckType} loads pay from ${origin} to ${destination}?`,
            answer: `Typical pricing on this lane is ${rateRange} total, with per-mile performance around ${perMile}. Actual payout moves with fuel, urgency, seasonality, and appointment flexibility.`,
        },
        {
            question: `What freight moves most on the ${origin} to ${destination} lane?`,
            answer: `The lane commonly moves ${topFreight}. Exact mix changes by quarter, but volume is usually strongest when regional production and retail replenishment cycles overlap.`,
        },
        {
            question: `When is the ${origin}-${destination} lane busiest?`,
            answer: `${origin} to ${destination} usually spikes during ${busiestWindow}. You can often secure stronger rates by booking in peak demand windows and avoiding late-week soft spots.`,
        },
        {
            question: `Is there good backhaul from ${destination} back to ${origin}?`,
            answer: `Backhaul options are available, but empty-mile risk can vary. On this lane, deadhead exposure is typically around ${backhaulRisk}. Pre-booking return freight before delivery helps stabilize RPM.`,
        },
        {
            question: `How long does the ${origin} to ${destination} run take?`,
            answer: `Average transit time is ${transitTime} across about ${distance}. Real-world timing depends on pickup windows, receiver delays, weather, and HOS planning.`,
        },
        {
            question: `Where can trucks park on the ${origin} to ${destination} route?`,
            answer: `Best parking strategy is to stage near outbound industrial zones in ${origin}, then target truck stops and secure yards near major metro handoff points en route and around ${destination}. Reserve parking on high-traffic nights when possible.`,
        },
    ]

    return (
        <FAQSection
            badgeText="LANE FREQUENTLY ASKED QUESTIONS"
            titleLeading={`${origin} to ${destination}`}
            titleHighlight="Lane FAQs"
            description={`Core dispatcher FAQs for the ${origin}-${destination} lane. Questions stay consistent, while answers adapt to this lane's market data and freight profile.`}
            faqs={faqs}
            ctaText="Get lane help"
            ctaHref="/contact"
            defaultOpenId={1}
        />
    )
}

/**
 * Domain Configuration: State
 * Centralized domain configuration for all states
 * Domain layer: Business rules and domain constants
 * 
 * Loads state data from JSON files in /data/states/
 */

import type { StateEntity, StateSlug, LaneEntity } from '@/types/state.types'

// Import all state JSON files
import californiaData from '@/data/states/california.json'
import texasData from '@/data/states/texas.json'
import illinoisData from '@/data/states/illinois.json'
import floridaData from '@/data/states/florida.json'
import georgiaData from '@/data/states/georgia.json'
import pennsylvaniaData from '@/data/states/pennsylvania.json'
import ohioData from '@/data/states/ohio.json'
import northCarolinaData from '@/data/states/north-carolina.json'
import arizonaData from '@/data/states/arizona.json'
import washingtonData from '@/data/states/washington.json'
import tennesseeData from '@/data/states/tennessee.json'
import indianaData from '@/data/states/indiana.json'
import michiganData from '@/data/states/michigan.json'
import newJerseyData from '@/data/states/new-jersey.json'
import wisconsinData from '@/data/states/wisconsin.json'
import minnesotaData from '@/data/states/minnesota.json'
import coloradoData from '@/data/states/colorado.json'
import oregonData from '@/data/states/oregon.json'
import kentuckyData from '@/data/states/kentucky.json'
import louisianaData from '@/data/states/louisiana.json'
import alabamaData from '@/data/states/alabama.json'
import virginiaData from '@/data/states/virginia.json'
import missouriData from '@/data/states/missouri.json'
import oklahomaData from '@/data/states/oklahoma.json'
import kansasData from '@/data/states/kansas.json'
import southCarolinaData from '@/data/states/south-carolina.json'
import iowaData from '@/data/states/iowa.json'
import arkansasData from '@/data/states/arkansas.json'
import marylandData from '@/data/states/maryland.json'
import mississippiData from '@/data/states/mississippi.json'
import nevadaData from '@/data/states/nevada.json'
import newMexicoData from '@/data/states/new-mexico.json'
import utahData from '@/data/states/utah.json'
import connecticutData from '@/data/states/connecticut.json'
import nebraskaData from '@/data/states/nebraska.json'
import idahoData from '@/data/states/idaho.json'
import massachusettsData from '@/data/states/massachusetts.json'
import westVirginiaData from '@/data/states/west-virginia.json'
import maineData from '@/data/states/maine.json'
import montanaData from '@/data/states/montana.json'
import rhodeIslandData from '@/data/states/rhode-island.json'
import northDakotaData from '@/data/states/north-dakota.json'
import southDakotaData from '@/data/states/south-dakota.json'
import delawareData from '@/data/states/delaware.json'
import vermontData from '@/data/states/vermont.json'
import newHampshireData from '@/data/states/new-hampshire.json'
import wyomingData from '@/data/states/wyoming.json'
import alaskaData from '@/data/states/alaska.json'
import hawaiiData from '@/data/states/hawaii.json'

/**
 * Helper function to convert JSON data to typed StateEntity
 */
function jsonToStateEntity(json: any): StateEntity {
    return {
        id: json.id as StateSlug,
        name: json.name,
        displayName: json.displayName,
        slug: json.slug as StateSlug,
        abbreviation: json.abbreviation,
        tagline: json.tagline,
        description: json.description,
        longDescription: json.longDescription,
        overview: json.overview,
        marketOverview: json.marketOverview,
        averageRates: json.averageRates,
        marketTrends: json.marketTrends,
        keyIndustries: json.keyIndustries,
        majorCities: json.majorCities,
        commonFreightTypes: json.commonFreightTypes,
        benefits: json.benefits,
        challenges: json.challenges,
        regulations: json.regulations,
        seasonalConsiderations: json.seasonalConsiderations,
        heroImage: json.heroImage,
        contentImage: json.contentImage,
        metaTitle: json.metaTitle,
        metaDescription: json.metaDescription,
        keywords: json.keywords,
        ctaHeadline: json.ctaHeadline,
        ctaDescription: json.ctaDescription,
        serviceType: json.serviceType,
        areaServed: json.areaServed,
        lanes: json.lanes ? json.lanes.map((laneJson: any) => jsonToLaneEntity(laneJson)) : undefined,
        highDemandLanes: json.lanes ? json.lanes.map((lane: any) => ({
            name: lane.displayName || lane.name,
            description: lane.description,
            rate: lane.averageRate,
            distance: lane.distance,
            slug: lane.slug, // Include slug for proper routing
        })) : undefined,
    }
}

/**
 * Helper function to convert JSON data to typed LaneEntity
 */
function jsonToLaneEntity(json: any): LaneEntity {
    return {
        id: json.id,
        name: json.name,
        displayName: json.displayName,
        slug: json.slug,
        stateSlug: json.stateSlug as StateSlug,
        description: json.description,
        longDescription: json.longDescription,
        origin: json.origin,
        destination: json.destination,
        distance: json.distance,
        averageTransitTime: json.averageTransitTime,
        averageRate: json.averageRate,
        ratePerMile: json.ratePerMile,
        loadFrequency: json.loadFrequency,
        peakSeasons: json.peakSeasons,
        freightTypes: json.freightTypes,
        keyFeatures: json.keyFeatures,
        benefits: json.benefits,
        challenges: json.challenges,
        tips: json.tips,
        heroImage: json.heroImage,
        contentImage: json.contentImage,
        metaTitle: json.metaTitle,
        metaDescription: json.metaDescription,
        keywords: json.keywords,
        ctaHeadline: json.ctaHeadline,
        ctaDescription: json.ctaDescription,
    }
}

/**
 * State Registry - Domain Service Implementation
 * Centralized registry of all state entities
 */
export class StateRegistry {
    private static readonly registry: Map<StateSlug, StateEntity> = new Map()
    private static readonly lanesByState: Map<StateSlug, LaneEntity[]> = new Map()

    /**
     * Initialize the registry with all state entities from JSON files
     */
    static initialize(): void {
        const states = this.getAllStates()
        states.forEach(state => {
            this.registry.set(state.slug, state)
            if (state.lanes && state.lanes.length > 0) {
                this.lanesByState.set(state.slug, state.lanes)
            }
        })
    }

    /**
     * Get state by slug
     */
    static getBySlug(slug: StateSlug): StateEntity | null {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.get(slug) || null
    }

    /**
     * Get all states
     */
    static getAll(): StateEntity[] {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return Array.from(this.registry.values())
    }

    /**
     * Check if state exists
     */
    static exists(slug: string): boolean {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.has(slug as StateSlug)
    }

    /**
     * Get all state slugs
     */
    static getAllSlugs(): StateSlug[] {
        return this.getAll().map(state => state.slug)
    }

    /**
     * Get lanes by state
     */
    static getLanesByState(stateSlug: StateSlug): LaneEntity[] {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.lanesByState.get(stateSlug) || []
    }

    /**
     * Domain Factory: Create all state entities from JSON files
     * This is where all state business rules are defined
     */
    private static getAllStates(): StateEntity[] {
        return [
            jsonToStateEntity(californiaData),
            jsonToStateEntity(texasData),
            jsonToStateEntity(illinoisData),
            jsonToStateEntity(floridaData),
            jsonToStateEntity(georgiaData),
            jsonToStateEntity(pennsylvaniaData),
            jsonToStateEntity(ohioData),
            jsonToStateEntity(northCarolinaData),
            jsonToStateEntity(arizonaData),
            jsonToStateEntity(washingtonData),
            jsonToStateEntity(tennesseeData),
            jsonToStateEntity(indianaData),
            jsonToStateEntity(michiganData),
            jsonToStateEntity(newJerseyData),
            jsonToStateEntity(wisconsinData),
            jsonToStateEntity(minnesotaData),
            jsonToStateEntity(coloradoData),
            jsonToStateEntity(oregonData),
            jsonToStateEntity(kentuckyData),
            jsonToStateEntity(louisianaData),
            jsonToStateEntity(alabamaData),
            jsonToStateEntity(virginiaData),
            jsonToStateEntity(missouriData),
            jsonToStateEntity(oklahomaData),
            jsonToStateEntity(kansasData),
            jsonToStateEntity(southCarolinaData),
            jsonToStateEntity(iowaData),
            jsonToStateEntity(arkansasData),
            jsonToStateEntity(marylandData),
            jsonToStateEntity(mississippiData),
            jsonToStateEntity(nevadaData),
            jsonToStateEntity(newMexicoData),
            jsonToStateEntity(utahData),
            jsonToStateEntity(connecticutData),
            jsonToStateEntity(nebraskaData),
            jsonToStateEntity(idahoData),
            jsonToStateEntity(massachusettsData),
            jsonToStateEntity(westVirginiaData),
            jsonToStateEntity(maineData),
            jsonToStateEntity(montanaData),
            jsonToStateEntity(rhodeIslandData),
            jsonToStateEntity(northDakotaData),
            jsonToStateEntity(southDakotaData),
            jsonToStateEntity(delawareData),
            jsonToStateEntity(vermontData),
            jsonToStateEntity(newHampshireData),
            jsonToStateEntity(wyomingData),
            jsonToStateEntity(alaskaData),
            jsonToStateEntity(hawaiiData),
        ]
    }
}

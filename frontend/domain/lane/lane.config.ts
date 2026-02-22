/**
 * Domain Configuration: Lane
 * Centralized domain configuration for all lanes
 * Domain layer: Business rules and domain constants
 */

import type { LaneEntity, LaneSlug, StateSlug } from '@/types/state.types'
import { StateRegistry } from '../state/state.config'

/**
 * Lane Registry - Domain Service Implementation
 * Centralized registry of all lane entities
 */
export class LaneRegistry {
    private static readonly registry: Map<string, LaneEntity> = new Map()

    /**
     * Initialize the registry with all lane entities
     */
    static initialize(): void {
        // Get all states and extract their lanes
        const states = StateRegistry.getAll()
        states.forEach(state => {
            if (state.lanes && state.lanes.length > 0) {
                state.lanes.forEach(lane => {
                    const key = `${state.slug}:${lane.slug}`
                    this.registry.set(key, lane)
                })
            }
        })
    }

    /**
     * Get lane by slug and state
     */
    static getBySlug(slug: LaneSlug, stateSlug: StateSlug): LaneEntity | null {
        if (this.registry.size === 0) {
            this.initialize()
        }
        const key = `${stateSlug}:${slug}`
        return this.registry.get(key) || null
    }

    /**
     * Get all lanes, optionally filtered by state
     */
    static getAll(stateSlug?: StateSlug): LaneEntity[] {
        if (this.registry.size === 0) {
            this.initialize()
        }
        
        if (stateSlug) {
            return StateRegistry.getLanesByState(stateSlug)
        }
        
        return Array.from(this.registry.values())
    }

    /**
     * Check if lane exists
     */
    static exists(slug: string, stateSlug: StateSlug): boolean {
        if (this.registry.size === 0) {
            this.initialize()
        }
        const key = `${stateSlug}:${slug}`
        return this.registry.has(key)
    }
}

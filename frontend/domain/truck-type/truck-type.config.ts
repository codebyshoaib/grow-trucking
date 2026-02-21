/**
 * Domain Configuration: Truck Type
 * Centralized domain configuration for all truck types
 * Domain layer: Business rules and domain constants
 */

import type { TruckTypeEntity, TruckTypeSlug } from '@/types/truck-type.types'

/**
 * Truck Type Registry - Domain Service Implementation
 * Centralized registry of all truck type entities
 */
export class TruckTypeRegistry {
    private static readonly registry: Map<TruckTypeSlug, TruckTypeEntity> = new Map()

    /**
     * Initialize the registry with all truck type entities
     */
    static initialize(): void {
        const truckTypes = this.getAllTruckTypes()
        truckTypes.forEach(type => {
            this.registry.set(type.slug, type)
        })
    }

    /**
     * Get truck type by slug
     */
    static getBySlug(slug: TruckTypeSlug): TruckTypeEntity | null {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.get(slug) || null
    }

    /**
     * Get all truck types
     */
    static getAll(): TruckTypeEntity[] {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return Array.from(this.registry.values())
    }

    /**
     * Check if truck type exists
     */
    static exists(slug: string): boolean {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.has(slug as TruckTypeSlug)
    }

    /**
     * Get all truck type slugs
     */
    static getAllSlugs(): TruckTypeSlug[] {
        return this.getAll().map(type => type.slug)
    }

    /**
     * Domain Factory: Create all truck type entities
     * This is where all truck type business rules are defined
     */
    private static getAllTruckTypes(): TruckTypeEntity[] {
        return [
            {
                id: 'dry-van',
                name: 'Dry Van',
                displayName: 'Dry Van Dispatch',
                slug: 'dry-van',
                tagline: 'Reliable Freight, Maximum Efficiency',
                description: 'Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer.',
                longDescription: 'Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Grow Trucking\'s dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver\'s seat.',
                keyFeaturesDescription: 'Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Grow Trucking\'s dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver\'s seat.',
                subtitle: 'Any type of 48\'-53\' trucks',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
                features: [
                    {
                        title: 'Multi-Loadboard Access',
                        description: 'Access to premium loads across multiple loadboards simultaneously, maximizing your options and profitability.'
                    },
                    {
                        title: 'Rate Optimization',
                        description: 'Expert negotiation to secure the best rates for your dry van freight, ensuring maximum revenue per mile.'
                    },
                    {
                        title: 'Route Planning',
                        description: 'Intelligent route planning to minimize deadhead miles and maximize efficiency across your preferred lanes.'
                    },
                    {
                        title: '24/7 Support',
                        description: 'Round-the-clock dispatch support to handle issues, find backhauls, and keep your trucks moving.'
                    }
                ],
                benefits: [
                    {
                        title: 'Increased Revenue',
                        description: 'Access to higher-paying loads through our extensive broker network and rate negotiation expertise.'
                    },
                    {
                        title: 'Reduced Downtime',
                        description: 'Minimize empty miles with strategic backhaul coordination and optimized route planning.'
                    },
                    {
                        title: 'Time Savings',
                        description: 'Focus on driving while we handle load searching, negotiation, and administrative tasks.'
                    },
                    {
                        title: 'Market Expertise',
                        description: 'Leverage our deep understanding of dry van market trends and seasonal patterns.'
                    }
                ],
                keyPoints: [
                    'Compliance with all dry freight transport standards',
                    '24/7 tracking and support from experienced dispatchers',
                    'Optimized routes for fuel efficiency and punctual deliveries',
                    'Load management tailored for standard freight cargo'
                ],
                metaTitle: 'Dry Van Dispatch Services | Professional Truck Dispatch',
                metaDescription: 'Expert dry van dispatch services for 48\'-53\' trucks. Maximize revenue, reduce downtime, and grow your trucking business with professional dispatch management.',
                keywords: ['dry van dispatch', 'dry van trucking', 'freight dispatch', 'truck dispatch service'],
                ctaHeadline: 'Ready to Maximize Your Dry Van Revenue?',
                ctaDescription: 'Partner with Grow Trucking to access premium loads, optimize routes, and grow your dry van business. Get your free consultation today!',
                serviceType: 'Dry Van Dispatch Service',
                areaServed: 'US'
            },
            {
                id: 'reefer',
                name: 'Reefer',
                displayName: 'Reefer Dispatch',
                slug: 'reefer',
                tagline: 'Cooled for Performance, Expert Reefer Dispatch Services Nationwide',
                description: 'Temperature-sensitive freight requires extra attention and care. Grow Trucking\'s dispatchers understand the complexity of reefer logistics.',
                longDescription: 'Temperature-sensitive freight requires extra attention and care. Grow Trucking\'s dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.',
                keyFeaturesDescription: 'Temperature-sensitive freight requires extra attention and care. Grow Trucking\'s dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.',
                subtitle: 'Any type of trailer',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg',
                features: [
                    {
                        title: 'Cold-Chain Compliance',
                        description: 'Full compliance with all cold-chain transport standards, ensuring your cargo maintains required temperatures throughout transit.'
                    },
                    {
                        title: 'Temperature Monitoring',
                        description: '24/7 tracking and support from experienced dispatchers who understand temperature-sensitive freight requirements.'
                    },
                    {
                        title: 'Optimized Routes',
                        description: 'Routes optimized for fuel efficiency and punctual deliveries, critical for time-sensitive refrigerated cargo.'
                    },
                    {
                        title: 'Load Management',
                        description: 'Specialized load management tailored for temperature-sensitive cargo, from produce to pharmaceuticals.'
                    }
                ],
                benefits: [
                    {
                        title: 'Premium Rates',
                        description: 'Access to higher-paying reefer loads through our specialized broker network.'
                    },
                    {
                        title: 'Expert Coordination',
                        description: 'Dispatchers who understand pre-cooling, appointment windows, and temperature requirements.'
                    },
                    {
                        title: 'Reduced Risk',
                        description: 'Minimize cargo damage risk with proper temperature management and compliance protocols.'
                    },
                    {
                        title: 'Consistent Loads',
                        description: 'Steady stream of reefer freight to keep your refrigerated units active and profitable.'
                    }
                ],
                keyPoints: [
                    'Compliance with all cold-chain transport standards',
                    '24/7 tracking and support from experienced dispatchers',
                    'Optimized routes for fuel efficiency and punctual deliveries',
                    'Load management tailored for temperature-sensitive cargo'
                ],
                metaTitle: 'Reefer Dispatch Services | Temperature-Controlled Freight',
                metaDescription: 'Expert reefer dispatch services for temperature-sensitive freight. Cold-chain compliance, 24/7 support, and premium loads for your refrigerated units.',
                keywords: ['reefer dispatch', 'refrigerated truck dispatch', 'cold chain logistics', 'reefer trucking'],
                ctaHeadline: 'Keep It Cool with Expert Reefer Dispatch Management',
                ctaDescription: 'At Dispatch Street, we specialize in reefer truck dispatching services designed for temperature-sensitive freight. Whether it\'s produce, frozen goods, or pharmaceuticals, we match carriers with premium loads.',
                serviceType: 'Reefer Dispatch Service',
                areaServed: 'US'
            },
            {
                id: 'flatbed',
                name: 'Flatbed',
                displayName: 'Flatbed Dispatch',
                slug: 'flatbed',
                tagline: 'Secure Loads, Secure Profits',
                description: 'Flatbed trucking requires specialized knowledge of oversized, heavy, and unique freight. Our dispatchers excel at finding premium flatbed loads.',
                longDescription: 'Flatbed trucking requires specialized knowledge of oversized, heavy, and unique freight. Our dispatchers excel at finding premium flatbed loads that match your equipment capabilities and maximize your earning potential. We understand securing requirements, permits, and the unique challenges of flatbed logistics.',
                keyFeaturesDescription: 'Flatbed trucking requires specialized knowledge of oversized, heavy, and unique freight. Our dispatchers excel at finding premium flatbed loads that match your equipment capabilities and maximize your earning potential. We understand securing requirements, permits, and the unique challenges of flatbed logistics.',
                subtitle: 'Any type of flatbed trailer',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672055/pexels-alban-mehmeti-184979123-13682891_d93x7i.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
                features: [
                    {
                        title: 'Specialized Load Matching',
                        description: 'Expert matching of loads to your flatbed equipment specifications and capabilities.'
                    },
                    {
                        title: 'Permit Coordination',
                        description: 'Assistance with oversize/overweight permits and route planning for specialized freight.'
                    },
                    {
                        title: 'Securement Expertise',
                        description: 'Understanding of proper securement requirements for various flatbed cargo types.'
                    },
                    {
                        title: 'Premium Load Access',
                        description: 'Access to high-value flatbed loads including construction materials, machinery, and oversized equipment.'
                    }
                ],
                benefits: [
                    {
                        title: 'Higher Rates',
                        description: 'Premium rates for specialized flatbed freight that commands top dollar.'
                    },
                    {
                        title: 'Expert Guidance',
                        description: 'Dispatchers who understand flatbed logistics, securement, and permit requirements.'
                    },
                    {
                        title: 'Reduced Liability',
                        description: 'Proper load matching and securement guidance to minimize cargo damage risk.'
                    },
                    {
                        title: 'Steady Work',
                        description: 'Consistent access to flatbed loads across construction, manufacturing, and industrial sectors.'
                    }
                ],
                keyPoints: [
                    'Expert securement and load matching',
                    'Permit coordination for oversize loads',
                    '24/7 support from flatbed specialists',
                    'Access to premium construction and industrial freight'
                ],
                metaTitle: 'Flatbed Dispatch Services | Oversized Freight Specialists',
                metaDescription: 'Expert flatbed dispatch services for oversized and heavy freight. Specialized load matching, permit coordination, and premium rates for your flatbed operation.',
                keywords: ['flatbed dispatch', 'flatbed trucking', 'oversized freight', 'heavy haul dispatch'],
                ctaHeadline: 'Ready to Secure Premium Flatbed Loads?',
                ctaDescription: 'Partner with Grow Trucking for expert flatbed dispatch services. Access premium loads, expert securement guidance, and maximize your flatbed revenue.',
                serviceType: 'Flatbed Dispatch Service',
                areaServed: 'US'
            },
            {
                id: 'box-truck',
                name: 'Box Truck',
                displayName: 'Box Truck Dispatch',
                slug: 'box-truck',
                tagline: 'Final-Mile Excellence',
                description: 'Box trucks are essential for final-mile delivery and localized freight movements. Grow Trucking specializes in finding high-paying expedited loads.',
                longDescription: 'Box trucks are essential for final-mile delivery and localized freight movements. Grow Trucking specializes in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.',
                keyFeaturesDescription: 'Box trucks are essential for final-mile delivery and localized freight movements. Grow Trucking specializes in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.',
                subtitle: 'Any type of 26\'L + * 96"W * 96"H (10K lbs+) trucks with LG',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg',
                features: [
                    {
                        title: 'Expedited Loads',
                        description: 'Access to high-paying expedited and time-sensitive loads perfect for box truck operations.'
                    },
                    {
                        title: 'Local & Regional Routes',
                        description: 'Dedicated routes that keep you close to home while maximizing profitability.'
                    },
                    {
                        title: 'Final-Mile Specialization',
                        description: 'Expertise in final-mile delivery logistics and urban freight movements.'
                    },
                    {
                        title: 'Flexible Scheduling',
                        description: 'Loads that fit your schedule, whether you prefer daily routes or flexible assignments.'
                    }
                ],
                benefits: [
                    {
                        title: 'Higher Per-Mile Rates',
                        description: 'Expedited and final-mile loads command premium rates compared to standard freight.'
                    },
                    {
                        title: 'Less Wear & Tear',
                        description: 'Shorter routes mean less vehicle wear and lower operating costs.'
                    },
                    {
                        title: 'Home Time',
                        description: 'More time at home with local and regional routes instead of long-haul trips.'
                    },
                    {
                        title: 'Steady Income',
                        description: 'Consistent access to expedited loads that keep your box truck active and profitable.'
                    }
                ],
                keyPoints: [
                    'Expedited and final-mile load specialization',
                    'Local and regional route optimization',
                    '24/7 dispatch support for time-sensitive freight',
                    'Load management for 26\'+ box trucks'
                ],
                metaTitle: 'Box Truck Dispatch Services | Final-Mile & Expedited Freight',
                metaDescription: 'Expert box truck dispatch services for final-mile delivery and expedited freight. High-paying loads, local routes, and specialized support for your box truck operation.',
                keywords: ['box truck dispatch', 'final mile delivery', 'expedited freight', 'box truck load board'],
                ctaHeadline: 'Ready to Maximize Your Box Truck Revenue?',
                ctaDescription: 'Partner with Grow Trucking for premium expedited and final-mile loads. Keep your box truck active with high-paying routes that fit your schedule.',
                serviceType: 'Box Truck Dispatch Service',
                areaServed: 'US'
            },
            {
                id: 'hotshot',
                name: 'Hotshot',
                displayName: 'Hotshot Dispatch',
                slug: 'hotshot',
                tagline: 'Speed Meets Profit',
                description: 'Hotshot trucking demands agility and quick response times. Grow Trucking excels at finding high-priority, time-critical loads that pay a premium.',
                longDescription: 'Hotshot trucking demands agility and quick response times. Grow Trucking excels at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.',
                keyFeaturesDescription: 'Hotshot trucking demands agility and quick response times. Grow Trucking excels at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.',
                subtitle: 'Any type of 40\'L+ (15K lbs+) trucks',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672889/pexels-kelly-4320468_t8s85o.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg',
                features: [
                    {
                        title: 'Time-Critical Loads',
                        description: 'Access to high-priority, expedited loads that command premium rates for fast delivery.'
                    },
                    {
                        title: 'Quick Response',
                        description: 'Rapid load matching and dispatch coordination to capitalize on time-sensitive opportunities.'
                    },
                    {
                        title: 'Premium Rates',
                        description: 'Higher per-mile rates for urgent freight that can\'t wait for standard shipping.'
                    },
                    {
                        title: 'Flexible Operations',
                        description: 'Loads that work with your schedule, whether you prefer short hauls or longer runs.'
                    }
                ],
                benefits: [
                    {
                        title: 'Maximum Profitability',
                        description: 'Premium rates for time-critical freight keep your hotshot operation highly profitable.'
                    },
                    {
                        title: 'Fast Turnaround',
                        description: 'Quick load-to-load transitions minimize downtime and maximize earning potential.'
                    },
                    {
                        title: 'Competitive Edge',
                        description: 'Access to loads that larger fleets can\'t handle, giving you a competitive advantage.'
                    },
                    {
                        title: 'Diverse Cargo',
                        description: 'Variety of freight types from automotive parts to construction materials and equipment.'
                    }
                ],
                keyPoints: [
                    'High-priority, time-critical load access',
                    'Premium rates for expedited freight',
                    'Quick response dispatch coordination',
                    'Load management for 40\'+ hotshot trucks'
                ],
                metaTitle: 'Hotshot Dispatch Services | Time-Critical Freight Specialists',
                metaDescription: 'Expert hotshot dispatch services for time-critical freight. Premium rates, quick response, and high-priority loads for your hotshot operation.',
                keywords: ['hotshot dispatch', 'hotshot trucking', 'expedited freight', 'time critical loads'],
                ctaHeadline: 'Ready to Maximize Your Hotshot Revenue?',
                ctaDescription: 'Partner with Grow Trucking for premium time-critical loads. Keep your hotshot rig active with high-paying expedited freight.',
                serviceType: 'Hotshot Dispatch Service',
                areaServed: 'US'
            },
            {
                id: 'power-only',
                name: 'Power Only',
                displayName: 'Power Only Dispatch',
                slug: 'power-only',
                tagline: 'Power Up Your Profits',
                description: 'Maximize your versatility with Grow Trucking\'s Power Only dispatching. We coordinate with shippers who have pre-loaded trailers.',
                longDescription: 'Maximize your versatility with Grow Trucking\'s Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.',
                keyFeaturesDescription: 'Maximize your versatility with Grow Trucking\'s Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.',
                subtitle: 'Both Day Cabs and OTR units',
                heroImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771672889/pexels-kelly-4320468_t8s85o.jpg',
                contentImage: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg',
                features: [
                    {
                        title: 'Pre-Loaded Trailers',
                        description: 'Coordinate with shippers who have trailers ready to go, eliminating loading delays.'
                    },
                    {
                        title: 'Fast Turnaround',
                        description: 'Focus on driving while we handle trailer coordination and logistics.'
                    },
                    {
                        title: 'Versatile Operations',
                        description: 'Work with both day cab and OTR units, matching loads to your equipment.'
                    },
                    {
                        title: 'Reduced Downtime',
                        description: 'Minimize waiting time with pre-coordinated trailer swaps and efficient routing.'
                    }
                ],
                benefits: [
                    {
                        title: 'More Miles',
                        description: 'Faster turnaround times mean more miles and higher revenue potential.'
                    },
                    {
                        title: 'Less Waiting',
                        description: 'No loading/unloading delays - just hook up and go.'
                    },
                    {
                        title: 'Lower Costs',
                        description: 'No need to own or maintain trailers, reducing capital investment and maintenance costs.'
                    },
                    {
                        title: 'Flexible Fleet',
                        description: 'Work with various trailer types without the capital investment in equipment.'
                    }
                ],
                keyPoints: [
                    'Pre-loaded trailer coordination',
                    'Fast turnaround times',
                    'Support for day cabs and OTR units',
                    '24/7 dispatch for power-only operations'
                ],
                metaTitle: 'Power Only Dispatch Services | Pre-Loaded Trailer Coordination',
                metaDescription: 'Expert power-only dispatch services for day cabs and OTR units. Pre-loaded trailer coordination, fast turnaround, and maximum profitability.',
                keywords: ['power only dispatch', 'power only trucking', 'day cab dispatch', 'OTR dispatch'],
                ctaHeadline: 'Ready to Power Up Your Revenue?',
                ctaDescription: 'Partner with Grow Trucking for expert power-only dispatch services. Access pre-loaded trailers, fast turnarounds, and maximize your miles.',
                serviceType: 'Power Only Dispatch Service',
                areaServed: 'US'
            }
        ]
    }
}

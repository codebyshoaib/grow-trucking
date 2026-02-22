/**
 * Domain Configuration: Partner
 * Centralized domain configuration for all partners
 * Domain layer: Business rules and domain constants
 */

import type { PartnerEntity, PartnerSlug } from '@/types/partner.types'

/**
 * Partner Registry - Domain Service Implementation
 * Centralized registry of all partner entities
 */
export class PartnerRegistry {
    private static readonly registry: Map<PartnerSlug, PartnerEntity> = new Map()

    /**
     * Initialize the registry with all partner entities
     */
    static initialize(): void {
        const partners = this.getAllPartners()
        partners.forEach(partner => {
            this.registry.set(partner.slug, partner)
        })
    }

    /**
     * Get partner by slug
     */
    static getBySlug(slug: PartnerSlug): PartnerEntity | null {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.get(slug) || null
    }

    /**
     * Get all partners
     */
    static getAll(): PartnerEntity[] {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return Array.from(this.registry.values())
    }

    /**
     * Check if partner exists
     */
    static exists(slug: string): boolean {
        if (this.registry.size === 0) {
            this.initialize()
        }
        return this.registry.has(slug as PartnerSlug)
    }

    /**
     * Get all partner slugs
     */
    static getAllSlugs(): PartnerSlug[] {
        return this.getAll().map(partner => partner.slug)
    }

    /**
     * Domain Factory: Create all partner entities
     * This is where all partner business rules are defined
     */
    private static getAllPartners(): PartnerEntity[] {
        return [
            {
                id: 'c-h-robinson-worldwide-inc',
                name: 'C.H. Robinson Worldwide, Inc.',
                logo: 'https://www.chrobinson.com/en-us/-/media/default%20website/logos/chr_logo_horz_2c_rgb.svg',
                displayName: 'C.H. Robinson Worldwide',
                slug: 'c-h-robinson-worldwide-inc',
                tagline: 'Premier Freight Brokerage Partner',
                overview: 'C.H. Robinson Worldwide is one of the largest and most respected freight brokers in the United States, providing comprehensive logistics solutions through its global network of carriers and shippers.',
                longDescription: 'C.H. Robinson Worldwide is one of the largest and most respected freight brokers in the United States, providing comprehensive logistics solutions through its global network of carriers and shippers. With roots dating back to 1905, C.H. Robinson specializes in freight brokerage, third-party logistics (3PL), transportation management, and supply chain services. The company\'s scale, advanced technology, and market reach make it a go-to broker for carriers seeking consistent freight opportunities and shippers needing reliable capacity across the U.S. Its digital freight network connects carriers with high-value loads efficiently.',
                coreServices: [
                    'Full Truckload (FTL) & Less-Than-Truckload (LTL) Brokerage',
                    'Intermodal & Air/Ocean Freight',
                    'Supply Chain Consulting & Digital TMS Platforms',
                    'Managed Transportation Solutions'
                ],
                whyChoose: 'C.H. Robinson\'s scale, advanced technology, and market reach make it a go-to broker for carriers seeking consistent freight opportunities and shippers needing reliable capacity across the U.S. Its digital freight network connects carriers with high-value loads efficiently.',
                strengths: [
                    'One of the largest freight brokers by revenue and network footprint',
                    'Deep carrier network spanning multiple modes',
                    'Data-driven freight matching and optimization'
                ],
                relationship: 'Grow Trucking maintains a strong, collaborative relationship with C.H. Robinson Worldwide, empowering our carriers with access to reliable freight, competitive rates, and priority load opportunities.',
                cta: 'Contact us today to start hauling premium C.H. Robinson freight',
                metaTitle: 'C.H. Robinson Worldwide Partnership | Grow Trucking',
                metaDescription: 'Partner with Grow Trucking to access premium C.H. Robinson freight opportunities. Reliable loads, competitive rates, and priority access to one of the largest freight brokers.',
                keywords: ['C.H. Robinson', 'freight brokerage', 'logistics partner', 'truck dispatch']
            },
            {
                id: 'j-b-hunt-transport-services-inc',
                name: 'J.B. Hunt Transport Services, Inc.',
                logo: 'https://www.jbhunt.com/content/experience-fragments/jbhunt/primary-nav/master/_jcr_content/root/main-par/header_v3/imageMobile.coreimg.png/1745513542586/logo.png',
                displayName: 'J.B. Hunt Transport Services',
                slug: 'j-b-hunt-transport-services-inc',
                tagline: 'Strategic Brokerage Partner',
                overview: 'J.B. Hunt Transport Services is a major U.S. transportation and logistics company with a robust freight brokerage division.',
                longDescription: 'J.B. Hunt Transport Services is a major U.S. transportation and logistics company with a robust freight brokerage division. Founded in 1961, J.B. Hunt provides intermodal, truckload brokerage, dedicated contract services, and advanced digital freight solutions across North America. The company\'s combination of asset-based services with brokerage flexibility allows carriers to tap into consistent freight lanes and benefit from scalable freight volumes across major markets.',
                coreServices: [
                    'Intermodal Freight Brokerage',
                    'Full Truckload & Dedicated Services',
                    'Digital Load Matching & Route Optimization',
                    'Final-Mile Logistics'
                ],
                whyChoose: 'J.B. Hunt\'s combination of asset-based services with brokerage flexibility allows carriers to tap into consistent freight lanes and benefit from scalable freight volumes across major markets.',
                relationship: 'Grow Trucking works closely with J.B. Hunt Transport Services to secure freight opportunities that align with carrier goals and operational needs.',
                cta: 'Reach out now to partner with Grow Trucking and access high-value J.B. Hunt freight',
                metaTitle: 'J.B. Hunt Partnership | Grow Trucking',
                metaDescription: 'Access premium J.B. Hunt freight through Grow Trucking. Strategic partnership delivering consistent loads and scalable freight volumes.',
                keywords: ['J.B. Hunt', 'intermodal freight', 'truckload brokerage', 'logistics partner']
            },
            {
                id: 'total-quality-logistics-tql',
                name: 'Total Quality Logistics (TQL)',
                logo: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771773960/Total-Quality-Logistics_l3mo6r.png',
                displayName: 'Total Quality Logistics',
                slug: 'total-quality-logistics-tql',
                tagline: 'A Top Brokerage Network',
                overview: 'Total Quality Logistics (TQL) is a leading freight brokerage and third-party logistics firm based in Ohio.',
                longDescription: 'Total Quality Logistics (TQL) is a leading freight brokerage and third-party logistics firm based in Ohio. Founded in 1997, TQL has grown into one of the largest private brokers in the U.S., offering comprehensive FTL, LTL, intermodal, and specialized freight services. TQL\'s expansive carrier network, technology platforms, and customer-centric approach help carriers find regular loads and improve utilization.',
                coreServices: [
                    'Full Truckload & LTL Brokerage',
                    'Intermodal & Specialized Logistics',
                    'Cross-Border (Canada/Mexico) Services',
                    'Real-Time Load Matching & Tracking'
                ],
                whyChoose: 'TQL\'s expansive carrier network, technology platforms, and customer-centric approach help carriers find regular loads and improve utilization.',
                relationship: 'Grow Trucking has developed a strong working partnership with Total Quality Logistics, offering enhanced freight access and priority load opportunities.',
                cta: 'Join Grow Trucking today to accelerate your fleet growth with TQL freight',
                metaTitle: 'TQL Partnership | Total Quality Logistics | Grow Trucking',
                metaDescription: 'Partner with Grow Trucking for premium TQL freight opportunities. Access one of the largest private brokers with enhanced load access.',
                keywords: ['TQL', 'Total Quality Logistics', 'freight brokerage', 'truck dispatch']
            },
            {
                id: 'echo-global-logistics',
                name: 'Echo Global Logistics',
                displayName: 'Echo Global Logistics',
                logo: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1771774126/Echo-Global-Logistics1_xtdjl9.jpg',
                slug: 'echo-global-logistics',
                tagline: 'Technology-Driven Freight Brokerage',
                overview: 'Echo Global Logistics is a leading U.S. freight brokerage that leverages technology to provide optimized load matching.',
                longDescription: 'Echo Global Logistics is a leading U.S. freight brokerage that leverages technology to provide optimized load matching, real-time quoting, and shipment tracking. Echo supports truckload, LTL, and multimodal freight solutions. Echo\'s tech-centric approach enhances freight visibility, reduces turnaround times, and gives carriers greater control over load selection and planning.',
                coreServices: [
                    'Truckload & LTL Brokerage',
                    'Intermodal & Expedited Freight',
                    'Real-Time Data & Digital Brokerage Platform'
                ],
                whyChoose: 'Echo\'s tech-centric approach enhances freight visibility, reduces turnaround times, and gives carriers greater control over load selection and planning.',
                relationship: 'Grow Trucking collaborates with Echo Global Logistics to bring expanded freight opportunities and more efficient dispatch workflows to carriers.',
                cta: 'Contact us to boost your freight volume with Echo-enabled lanes',
                metaTitle: 'Echo Global Logistics Partnership | Grow Trucking',
                metaDescription: 'Access technology-driven freight solutions through Echo Global Logistics partnership. Real-time load matching and optimized dispatch workflows.',
                keywords: ['Echo Global Logistics', 'digital freight', 'load matching', 'truck dispatch']
            },
            {
                id: 'rxo',
                name: 'RXO',
                displayName: 'RXO',
            
                slug: 'rxo',
                tagline: 'Scalable Brokerage Solutions',
                overview: 'RXO is a prominent U.S. freight brokerage formed through strategic growth and acquisitions.',
                longDescription: 'RXO is a prominent U.S. freight brokerage formed through strategic growth and acquisitions, including Coyote Logistics, giving it strong brokerage and digital capacity services. RXO\'s strategic use of technology and network scale drives strong carrier engagement and competitive freight opportunities.',
                coreServices: [
                    'Full Truckload Brokerage',
                    'Managed Transportation',
                    'Digital Freight Matching & Analytics'
                ],
                whyChoose: 'RXO\'s strategic use of technology and network scale drives strong carrier engagement and competitive freight opportunities.',
                relationship: 'Grow Trucking\'s carrier network benefits from close collaboration with RXO, connecting fleets with high-volume freight opportunities.',
                cta: 'Explore RXO freight options through Grow Trucking today',
                metaTitle: 'RXO Partnership | Grow Trucking',
                metaDescription: 'Partner with Grow Trucking for RXO freight opportunities. Access scalable brokerage solutions and high-volume loads.',
                keywords: ['RXO', 'freight brokerage', 'digital freight', 'truck dispatch']
            },
            {
                id: 'landstar-system',
                name: 'Landstar System',
                displayName: 'Landstar System',
                logo:"https://ite-prod-cdn-end.azureedge.net/sharedmedia/breakbulkamericas/media/assets/landtar.png?ext=.png",
                slug: 'landstar-system',
                tagline: 'Independent-Focused Brokerage Alliance',
                overview: 'Landstar System operates an agent-based freight brokerage model with a large independent carrier network.',
                longDescription: 'Landstar System operates an agent-based freight brokerage model with a large independent carrier network, offering flexible freight solutions including truckload, LTL, and specialized transportation. Landstar\'s focus on independent owner-operators and tailored freight solutions delivers customized options and capacity flexibility.',
                coreServices: [
                    'Truckload & LTL Brokerage',
                    'Expedited & Specialized Freight',
                    'Agent-Level Capacity Allocation'
                ],
                whyChoose: 'Landstar\'s focus on independent owner-operators and tailored freight solutions delivers customized options and capacity flexibility.',
                relationship: 'Grow Trucking works with Landstar System to match carriers with freight that suits their operational and revenue objectives.',
                cta: 'Talk to Grow Trucking to access Landstar freight opportunities',
                metaTitle: 'Landstar System Partnership | Grow Trucking',
                metaDescription: 'Access Landstar freight opportunities through Grow Trucking. Independent-focused brokerage with flexible freight solutions.',
                keywords: ['Landstar', 'freight brokerage', 'independent carriers', 'truck dispatch']
            },
            {
                id: 'uber-freight',
                name: 'Uber Freight',
                displayName: 'Uber Freight',
                slug: 'uber-freight',
                tagline: 'Digital Brokerage & Instant Load Matching',
                overview: 'Uber Freight is a digital-first freight brokerage that connects carriers and shippers through real-time load matching.',
                longDescription: 'Uber Freight is a digital-first freight brokerage that connects carriers and shippers through real-time load matching, dynamic pricing, and mobile-based dispatch tools. Uber Freight combines cutting-edge technology with carrier convenience, enabling fast and transparent freight booking.',
                coreServices: [
                    'On-Demand Load Matching',
                    'Real-Time Pricing & Booking',
                    'Mobile App Integration'
                ],
                whyChoose: 'Uber Freight combines cutting-edge technology with carrier convenience, enabling fast and transparent freight booking.',
                relationship: 'Grow Trucking leverages its relationship with Uber Freight to provide carriers with efficient and consistent freight flow.',
                cta: 'Get started with Grow Trucking and Uber Freight today',
                metaTitle: 'Uber Freight Partnership | Grow Trucking',
                metaDescription: 'Access Uber Freight\'s digital brokerage platform through Grow Trucking. Real-time load matching and transparent booking.',
                keywords: ['Uber Freight', 'digital freight', 'load matching', 'mobile dispatch']
            },
            {
                id: 'mode-global',
                name: 'Mode Global',
                displayName: 'Mode Global',
                slug: 'mode-global',
                tagline: 'Innovative Brokerage Partner',
                overview: 'Mode Global is a fast-growing freight brokerage known for multimodal services and digital solutions.',
                longDescription: 'Mode Global is a fast-growing freight brokerage known for multimodal services and digital solutions that help carriers optimize load selection and route efficiency.',
                coreServices: [
                    'Truckload & Intermodal Brokerage',
                    'Digital Freight Tools & Analytics'
                ],
                relationship: 'Grow Trucking partners with Mode Global to secure competitive freight options and streamline dispatch operations.',
                cta: 'Contact Grow Trucking to explore Mode Global freight opportunities',
                metaTitle: 'Mode Global Partnership | Grow Trucking',
                metaDescription: 'Partner with Grow Trucking for Mode Global freight opportunities. Innovative brokerage with digital freight solutions.',
                keywords: ['Mode Global', 'freight brokerage', 'multimodal', 'truck dispatch']
            },
            {
                id: 'wwex-group',
                name: 'WWEX Group',
                displayName: 'WWEX Group',
                slug: 'wwex-group',
                tagline: 'Comprehensive Brokerage & Logistics Services',
                overview: 'WWEX Group (WorldWide Express) is a diversified freight brokerage and logistics provider.',
                longDescription: 'WWEX Group (WorldWide Express) is a diversified freight brokerage and logistics provider offering truckload, LTL, expedited services, and parcel logistics solutions.',
                coreServices: [
                    'LTL & Truckload Brokerage',
                    'Expedited Freight',
                    'Parcel Distribution Management'
                ],
                relationship: 'Grow Trucking collaborates with WWEX Group to bring expanded freight choices to carriers and enhance route profitability.',
                cta: 'Connect with Grow Trucking for WWEX freight programs',
                metaTitle: 'WWEX Group Partnership | Grow Trucking',
                metaDescription: 'Access WWEX Group freight opportunities through Grow Trucking. Comprehensive brokerage and logistics services.',
                keywords: ['WWEX', 'WorldWide Express', 'freight brokerage', 'logistics']
            },
            {
                id: 'arrive-logistics',
                name: 'Arrive Logistics',
                displayName: 'Arrive Logistics',
                slug: 'arrive-logistics',
                tagline: 'Dynamic Brokerage Network',
                overview: 'Arrive Logistics is a fast-expanding freight brokerage focused on scalable truckload and intermodal freight solutions.',
                longDescription: 'Arrive Logistics is a fast-expanding freight brokerage focused on scalable truckload and intermodal freight solutions with advanced shipment technology and strong carrier support.',
                coreServices: [
                    'Truckload Brokerage',
                    'Intermodal Freight',
                    'Advanced TMS & Load Execution Tools'
                ],
                relationship: 'Grow Trucking\'s partnership with Arrive Logistics ensures carriers can access dependable freight and superior operational support.',
                cta: 'Partner with Grow Trucking for Arrive freight opportunities',
                metaTitle: 'Arrive Logistics Partnership | Grow Trucking',
                metaDescription: 'Access Arrive Logistics freight through Grow Trucking. Dynamic brokerage network with advanced technology and carrier support.',
                keywords: ['Arrive Logistics', 'freight brokerage', 'TMS', 'truck dispatch']
            }
        ]
    }
}

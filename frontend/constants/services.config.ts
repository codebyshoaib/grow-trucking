/**
 * Services Configuration
 * All available truck dispatch services
 */

import { 
    User, 
    Route, 
    FileText, 
    Calculator, 
    Navigation, 
    Truck, 
    Shield, 
    TrendingUp, 
    FileCheck, 
    DollarSign, 
    ClipboardList, 
    MapPin, 
    CreditCard, 
    Clock, 
    Calendar,
    Monitor,
    LucideIcon
} from 'lucide-react'

export interface Service {
    id: string
    title: string
    subTitle?: string
    description: string
    subheading?: string
    features: string[]
    iconName: string // Changed from icon: LucideIcon to iconName: string
    imageUrl?: string // Image for service card
    buttonText: string
    buttonLink: string
    // Additional fields for dedicated service page
    overview?: {
        text: string
        imageUrl?: string
    }
    whyChooseUs?: {
        title?: string
        points: string[]
    }
    additionalInfo?: {
        text: string
        imageUrl?: string
    }
    ctaHeadline?: string
    ctaDescription?: string
    metaTitle?: string
    metaDescription?: string
}

// Icon mapping for client components
export const iconMap: Record<string, LucideIcon> = {
    'User': User,
    'Route': Route,
    'FileText': FileText,
    'Calculator': Calculator,
    'Navigation': Navigation,
    'Truck': Truck,
    'Shield': Shield,
    'TrendingUp': TrendingUp,
    'FileCheck': FileCheck,
    'DollarSign': DollarSign,
    'ClipboardList': ClipboardList,
    'MapPin': MapPin,
    'CreditCard': CreditCard,
    'Clock': Clock,
    'Calendar': Calendar,
    'Monitor': Monitor,
}

export const allServices: Service[] = [
    {
        id: 'dedicated-dispatcher',
        title: 'Dedicated Personal Dispatcher',
        subTitle: 'Your personal dispatcher dedicated to your success',
        description: 'Every carrier is assigned a dedicated professional dispatcher who manages load sourcing that matches your trailer type & preferred lanes, daily broker communication, negotiations, and rate confirmations, real-time truck status updates and problem resolution. A dedicated dispatcher ensures your phone is quieter, your freight is better, and your revenue is optimized.',
        subheading: 'Your personal dispatcher dedicated to your success',
        features: [
            'One-on-one dispatcher relationship',
            'Customized load matching',
            'Direct communication channel',
            'Business-specific strategies'
        ],
        iconName: 'User',
        buttonText: 'Get Your Dispatcher',
        buttonLink: '/contact',
        overview: {
            text: `A dedicated personal dispatcher is your direct connection to premium loads and optimized routes. Unlike shared dispatch services, you get exclusive attention from a dispatcher who learns your business inside and out.\n\nYour dedicated dispatcher understands your preferred lanes, equipment specifications, rate requirements, and operational preferences. This personalized approach means faster load matching, better rate negotiations, and a dispatcher who truly advocates for your business success.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Dedicated Dispatcher Service',
            points: [
                'Exclusive attention from a dedicated professional who knows your business',
                'Faster response times with direct communication channels',
                'Customized load matching based on your specific preferences and requirements',
                'Better rate negotiations through established broker relationships',
                'Proactive problem-solving and route optimization for maximum profitability'
            ]
        },
        additionalInfo: {
            text: `Our dedicated dispatcher service goes beyond basic load finding. Your dispatcher becomes an extension of your team, handling everything from load selection to rate negotiations, paperwork management, and trip coordination.\n\nWith 24/7 availability and deep market knowledge, your dedicated dispatcher ensures you never miss an opportunity. They track your performance, identify growth opportunities, and continuously optimize your operations for maximum revenue per mile.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Get Your Dedicated Personal Dispatcher?',
        ctaDescription: 'Experience the difference of having a dedicated dispatcher focused solely on your success. Contact us today to get started.',
        metaTitle: 'Dedicated Personal Dispatcher Service | Grow Trucking',
        metaDescription: 'Get your own dedicated dispatcher for personalized truck dispatch services. One-on-one relationship, customized load matching, and direct communication.'
    },
    {
        id: 'local-lane-contracts',
        title: 'Local Lane Contracts',
        subTitle: 'Secure local and regional haul contracts tailored to your home-time preferences and lane expertise',
        description: 'Grow Trucking helps you secure local and regional haul contracts tailored to your home-time preferences and lane expertise. Build long-term lanes to minimize deadhead miles, prioritize local freight that fits your schedule, and increase consistent weekly revenue. This service helps carriers who want predictable patterns and reduced idle time.',
        features: [
            'Dedicated route contracts',
            'Consistent revenue streams',
            'Long-term agreements',
            'Preferred lane access'
        ],
        iconName: 'Route',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
        buttonText: 'Explore Lane Contracts',
        buttonLink: '/contact',
        overview: {
            text: `Local lane contracts provide the stability and predictability that many carriers need to build a sustainable trucking business. Unlike one-off loads that create uncertainty, dedicated lane contracts offer consistent routes, regular shippers, and predictable revenue streams.\n\nGrow Trucking specializes in negotiating and securing local and regional haul contracts that align with your operational preferences. We work with shippers and brokers to establish long-term relationships that benefit both parties, ensuring you have steady freight while maintaining the flexibility to accommodate your home-time needs.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Local Lane Contracts Service',
            points: [
                'Minimize deadhead miles with strategically planned routes',
                'Increase consistent weekly revenue with predictable freight',
                'Build long-term relationships with reliable shippers',
                'Maintain work-life balance with routes that fit your schedule',
                'Reduce operational stress with guaranteed loads and rates'
            ]
        },
        additionalInfo: {
            text: `Our local lane contracts service goes beyond simple load booking. We analyze your operational patterns, preferred routes, and home-time requirements to identify the best contract opportunities for your business.\n\nWe negotiate favorable terms, including rate structures, payment terms, and service expectations. Our team handles contract management, ensuring compliance and addressing any issues that arise. With our local lane contracts, you can focus on driving while we handle the business side of your operations.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Secure Your Local Lane Contracts?',
        ctaDescription: 'Start building predictable revenue with dedicated lane contracts. Contact us today to explore contract opportunities that fit your business.',
        metaTitle: 'Local Lane Contracts | Grow Trucking',
        metaDescription: 'Secure local and regional haul contracts for consistent revenue. Dedicated routes, predictable freight, and long-term agreements tailored to your needs.'
    },
    {
        id: 'ifta-reporting',
        title: 'IFTA Reporting & Compliance Services',
        description: 'IFTA (International Fuel Tax Agreement) reporting is complex, but crucial for every trucker operating across state lines. Our service includes accurate fuel tax calculations, quarterly returns submission, and audit-ready documentation. Stay compliant with DOT, FMCSA, and fuel tax regulations without confusion or penalty risk.',
        features: [
            'IFTA quarterly reporting',
            'Fuel tax calculations',
            'Compliance documentation',
            'Filing assistance'
        ],
        iconName: 'FileText',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg',
        buttonText: 'Get IFTA Support',
        buttonLink: '/contact',
        overview: {
            text: `IFTA reporting is one of the most complex compliance requirements for interstate trucking operations. Every quarter, carriers must accurately calculate fuel taxes for each state they've traveled through, maintain detailed records, and submit returns on time to avoid penalties.\n\nOur IFTA reporting and compliance service takes this burden off your shoulders. We handle all fuel tax calculations, maintain comprehensive records, prepare quarterly returns, and ensure timely submission. Our team stays current with changing regulations and requirements, so you can focus on driving while we handle compliance.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our IFTA Reporting Service',
            points: [
                'Accurate fuel tax calculations prevent costly errors and penalties',
                'Comprehensive record-keeping ensures audit readiness',
                'Timely quarterly submissions maintain compliance status',
                'Expert knowledge of state-specific IFTA requirements',
                'Peace of mind knowing your fuel tax obligations are handled correctly'
            ]
        },
        additionalInfo: {
            text: `Our IFTA reporting service includes detailed fuel purchase tracking, mileage documentation, and state-by-state tax calculations. We maintain all required records in an organized, accessible format that makes audits straightforward.\n\nWe work with your existing systems to gather necessary data, whether from fuel cards, receipts, or ELD systems. Our team reviews all calculations before submission and provides you with clear reports showing your fuel tax obligations by state. With our IFTA service, compliance becomes simple and stress-free.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Simplify Your IFTA Compliance?',
        ctaDescription: 'Let us handle your IFTA reporting so you can focus on driving. Contact us today to get started with our compliance services.',
        metaTitle: 'IFTA Reporting & Compliance Services | Grow Trucking',
        metaDescription: 'Professional IFTA reporting and fuel tax compliance services. Accurate calculations, quarterly returns, and audit-ready documentation for interstate trucking.'
    },
    {
        id: 'quickbooks-bookkeeping',
        title: 'QuickBooks Bookkeeping Services',
        subTitle: 'Professional QuickBooks bookkeeping designed specifically for trucking businesses',
        description: 'We provide professional QuickBooks bookkeeping designed specifically for trucking businesses. Expense tracking (fuel, maintenance, tolls, permits), profit & loss reports, and tax-ready documentation. Good bookkeeping improves cash flow, simplifies taxes, and supports business decisions.',
        features: [
            'QuickBooks setup and management',
            'Expense tracking',
            'Financial reporting',
            'Tax preparation support'
        ],
        iconName: 'Calculator',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg',
        buttonText: 'Start Bookkeeping',
        buttonLink: '/contact',
        overview: {
            text: `Proper bookkeeping is essential for any successful trucking business, but it's often time-consuming and complex. Our QuickBooks bookkeeping service is specifically designed for trucking operations, with expertise in the unique financial aspects of the industry.\n\nWe set up and manage your QuickBooks system to track all trucking-specific expenses, including fuel, maintenance, tolls, permits, insurance, and more. Our team categorizes transactions correctly, reconciles accounts regularly, and generates financial reports that give you clear insight into your business performance.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our QuickBooks Bookkeeping Service',
            points: [
                'Trucking-specific expertise in expense categorization and tracking',
                'Regular financial reports help you make informed business decisions',
                'Tax-ready documentation simplifies year-end tax preparation',
                'Improved cash flow management through accurate financial tracking',
                'Time savings that let you focus on operations instead of paperwork'
            ]
        },
        additionalInfo: {
            text: `Our QuickBooks bookkeeping service includes complete setup, ongoing transaction entry, account reconciliation, and regular financial reporting. We understand trucking-specific deductions, depreciation schedules, and compliance requirements.\n\nWe provide monthly profit & loss statements, balance sheets, and cash flow reports that help you understand your business's financial health. At tax time, we prepare all necessary documentation and work with your tax preparer to ensure accurate filing. With our bookkeeping service, you'll have clear financial visibility and peace of mind.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
        },
        ctaHeadline: 'Ready to Get Your Books in Order?',
        ctaDescription: 'Professional bookkeeping designed for trucking businesses. Contact us today to set up your QuickBooks system and start tracking your finances properly.',
        metaTitle: 'QuickBooks Bookkeeping Services for Trucking | Grow Trucking',
        metaDescription: 'Professional QuickBooks bookkeeping services for trucking businesses. Expense tracking, financial reporting, and tax-ready documentation.'
    },
    {
        id: 'route-planning',
        title: 'Route Planning and Profit Optimization',
        description: 'With GPS tools and data-driven analysis, we help you find the most profitable routes. Fuel-efficient route planning, deadhead reduction strategies, and profit-per-mile evaluation. Route planning isn\'t just navigation — it\'s a money-making strategy.',
        features: [
            'Profit-per-mile optimization',
            'Deadhead reduction',
            'Route efficiency analysis',
            'Load profitability scoring'
        ],
        iconName: 'Navigation',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg',
        buttonText: 'Optimize Routes',
        buttonLink: '/contact',
        overview: {
            text: `Route planning is one of the most critical factors in trucking profitability. The difference between a well-planned route and a poorly planned one can mean hundreds or thousands of dollars in additional profit per trip. Our route planning and profit optimization service uses advanced GPS tools, traffic data, and market analysis to create the most profitable routes for your loads.\n\nWe analyze every aspect of your routes, including fuel costs, tolls, deadhead miles, and time efficiency. Our team evaluates load profitability before you accept, ensuring you're taking loads that maximize your revenue per mile while minimizing costs.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Route Planning Service',
            points: [
                'Data-driven route optimization maximizes profit per mile',
                'Deadhead reduction strategies minimize empty miles',
                'Fuel-efficient routing saves money on every trip',
                'Load profitability scoring helps you choose the best freight',
                'Real-time traffic and weather updates keep you on schedule'
            ]
        },
        additionalInfo: {
            text: `Our route planning service goes beyond simple navigation. We use historical data, current market rates, fuel prices, and traffic patterns to create optimal routes. We factor in your equipment specifications, driver preferences, and delivery requirements to ensure routes that work for your business.\n\nWe provide detailed route analysis showing estimated fuel costs, toll expenses, time requirements, and profit margins. Our team continuously monitors route performance and adjusts strategies to improve profitability. With our route planning service, every mile becomes more profitable.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready to Optimize Your Routes?',
        ctaDescription: 'Start maximizing profit per mile with our route planning and optimization service. Contact us today to get started.',
        metaTitle: 'Route Planning and Profit Optimization | Grow Trucking',
        metaDescription: 'Advanced route planning and profit optimization for trucking. Fuel-efficient routing, deadhead reduction, and profit-per-mile analysis.'
    },
    {
        id: 'fleet-management',
        title: 'Fleet Management System',
        subTitle: 'Centralized control of truck and trailer status, ELD integration and Hours-of-Service tracking, dispatch feed, live status, and updates',
        description: 'Our Fleet Management System gives you centralized control of truck and trailer status, ELD integration and Hours-of-Service tracking, dispatch feed, live status, and updates. Real-time telematics optimize productivity and reduce compliance risks.',
        features: [
            'Vehicle tracking and monitoring',
            'Driver management',
            'Performance analytics',
            'Operational reporting'
        ],
        iconName: 'Truck',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg',
        buttonText: 'Manage Your Fleet',
        buttonLink: '/contact',
        overview: {
            text: `Managing a fleet, whether it's one truck or many, requires constant oversight and coordination. Our Fleet Management System provides centralized control and real-time visibility into all aspects of your operations. From vehicle location and status to driver hours and performance metrics, everything you need is in one place.\n\nOur system integrates with ELD devices to track hours of service automatically, ensuring compliance while optimizing driver schedules. Real-time GPS tracking lets you see exactly where your trucks are, while dispatch feeds keep you updated on load status and delivery progress.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Fleet Management System',
            points: [
                'Real-time vehicle tracking improves operational visibility',
                'ELD integration ensures automatic HOS compliance',
                'Centralized dashboard simplifies fleet oversight',
                'Performance analytics help identify improvement opportunities',
                'Reduced compliance risks through automated monitoring'
            ]
        },
        additionalInfo: {
            text: `Our Fleet Management System includes comprehensive vehicle tracking, driver management tools, performance analytics, and operational reporting. We provide detailed insights into fuel efficiency, route performance, driver behavior, and maintenance needs.\n\nThe system generates automated reports on key performance indicators, helping you make data-driven decisions about your fleet operations. With real-time alerts for compliance issues, maintenance needs, or operational problems, you can address issues before they become costly. Our fleet management system turns data into actionable insights.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready to Manage Your Fleet Better?',
        ctaDescription: 'Get centralized control and real-time visibility of your fleet operations. Contact us today to learn more about our Fleet Management System.',
        metaTitle: 'Fleet Management System | Grow Trucking',
        metaDescription: 'Comprehensive fleet management system with vehicle tracking, ELD integration, and performance analytics for trucking operations.'
    },
    {
        id: 'audit-assistance',
        title: 'Audit Assistance and Rate Verification',
        subTitle: 'Expert support during audits and comprehensive security compliance',
        description: 'Licensed carriers sometimes face audits from brokers or regulators. We provide support during compliance reviews, rate verification checks, and correct documentation preparation. Be audit-ready and financially protected.',
        features: [
            'Rate verification and validation',
            'Contract review',
            'Payment dispute resolution',
            'Audit support'
        ],
        iconName: 'Shield',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg',
        buttonText: 'Get Audit Help',
        buttonLink: '/contact',
        overview: {
            text: `Audits from brokers, shippers, or regulatory agencies can be stressful and time-consuming. Whether it's a rate verification audit, compliance review, or payment dispute, having expert support makes all the difference. Our audit assistance and rate verification service provides the expertise and documentation you need to navigate audits successfully.\n\nWe review your contracts, verify rates, and ensure all documentation is accurate and complete. Our team prepares audit responses, gathers supporting documentation, and represents your interests during the audit process. We help you understand your rights and obligations while protecting your financial interests.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Audit Assistance Service',
            points: [
                'Expert knowledge of audit processes and requirements',
                'Thorough documentation review ensures accuracy',
                'Rate verification protects your financial interests',
                'Professional representation during audit proceedings',
                'Peace of mind knowing you\'re audit-ready and protected'
            ]
        },
        additionalInfo: {
            text: `Our audit assistance service includes comprehensive contract review, rate verification, documentation preparation, and direct support during audit proceedings. We work with you to understand the audit scope, gather necessary documentation, and prepare professional responses.\n\nWe also provide proactive audit preparation, helping you maintain records and documentation that make future audits straightforward. Our team stays current with regulatory requirements and industry standards, ensuring your operations remain compliant. With our audit assistance, you're always prepared and protected.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Need Audit Assistance?',
        ctaDescription: 'Get expert support for audits, rate verification, and compliance reviews. Contact us today to protect your business.',
        metaTitle: 'Audit Assistance and Rate Verification | Grow Trucking',
        metaDescription: 'Expert audit assistance and rate verification services for trucking businesses. Contract review, documentation preparation, and audit support.'
    },
    {
        id: 'business-growth',
        title: 'Trucking Business Growth Strategy',
        subTitle: 'Strategic planning tailored to your specific business goals and market position',
        description: 'We build strategic growth plans including market analysis & lane profitability, scaling pathways for small to medium fleets, and business performance KPIs. Grow your trucking business with plans based on industry trends and data, not guesswork.',
        features: [
            'Growth strategy development',
            'Market analysis',
            'Expansion planning',
            'Revenue optimization'
        ],
        iconName: 'TrendingUp',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg',
        buttonText: 'Plan Your Growth',
        buttonLink: '/contact',
        overview: {
            text: `Growing a trucking business requires more than just adding trucks. It requires strategic planning, market analysis, and a clear understanding of your competitive position. Our Trucking Business Growth Strategy service helps you develop a comprehensive plan for scaling your operations profitably.\n\nWe analyze your current operations, market opportunities, and competitive landscape to identify the best growth pathways. Our team develops detailed strategies for fleet expansion, route optimization, revenue diversification, and operational efficiency improvements. We create actionable plans with clear milestones and KPIs to track progress.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Business Growth Strategy Service',
            points: [
                'Data-driven growth plans based on market analysis and trends',
                'Customized strategies tailored to your business goals',
                'Clear pathways for scaling from owner-operator to fleet',
                'Performance KPIs help track growth progress',
                'Expert guidance from industry professionals with proven track records'
            ]
        },
        additionalInfo: {
            text: `Our growth strategy service includes comprehensive market analysis, lane profitability studies, competitive positioning, and detailed expansion plans. We evaluate your financial capacity, operational capabilities, and market opportunities to create realistic growth scenarios.\n\nWe provide ongoing support as you execute your growth plan, adjusting strategies based on performance data and market changes. Our team helps you identify the right opportunities, avoid common pitfalls, and scale your business sustainably. With our growth strategy service, expansion becomes a planned, profitable process.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready to Grow Your Trucking Business?',
        ctaDescription: 'Get a strategic growth plan tailored to your business. Contact us today to start planning your expansion.',
        metaTitle: 'Trucking Business Growth Strategy | Grow Trucking',
        metaDescription: 'Strategic growth planning for trucking businesses. Market analysis, expansion strategies, and performance KPIs to scale your operations.'
    },
    {
        id: 'motor-carrier-compliance',
        title: 'Motor Carrier Security and Compliance',
        subTitle: 'Stay compliant and secure with services that include DOT/MCSA authority tracking, ELD and HOS monitoring, and safety data checks & violation alerts. Protect your authority and keep your equipment moving.',
        description: 'Stay compliant and secure with services that include DOT/MCSA authority tracking, ELD and HOS monitoring, and safety data checks & violation alerts. Protect your authority and keep your equipment moving.',
        features: [
            'DOT compliance management',
            'FMCSA requirements',
            'Safety compliance',
            'Authority maintenance'
        ],
        iconName: 'FileCheck',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg',
        buttonText: 'Ensure Compliance',
        buttonLink: '/contact',
        overview: {
            text: `Motor carrier compliance is complex and constantly evolving. DOT and FMCSA regulations cover everything from hours of service and driver qualifications to vehicle maintenance and safety requirements. One violation can result in fines, out-of-service orders, or even loss of operating authority.\n\nOur Motor Carrier Security and Compliance service helps you navigate this regulatory landscape. We monitor your compliance status, track authority requirements, monitor ELD and HOS data, and provide alerts for potential violations. Our team ensures you stay current with changing regulations and maintain your operating authority.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Motor Carrier Compliance Service',
            points: [
                'Comprehensive compliance monitoring protects your operating authority',
                'Proactive violation alerts help prevent costly penalties',
                'Expert knowledge of DOT and FMCSA regulations',
                'Automated tracking of HOS and ELD compliance',
                'Peace of mind knowing your authority is protected'
            ]
        },
        additionalInfo: {
            text: `Our compliance service includes continuous monitoring of your safety ratings, violation history, and authority status. We track ELD data to ensure hours of service compliance, monitor driver qualifications and certifications, and maintain records required for audits.\n\nWe provide regular compliance reports showing your status across all regulatory areas and alert you to any issues that need attention. Our team helps you understand compliance requirements and implement processes to maintain compliance. With our compliance service, you can focus on operations while we protect your authority.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Ensure Your Compliance?',
        ctaDescription: 'Protect your operating authority with comprehensive compliance monitoring. Contact us today to get started.',
        metaTitle: 'Motor Carrier Security and Compliance | Grow Trucking',
        metaDescription: 'Comprehensive motor carrier compliance services. DOT/FMCSA compliance, ELD monitoring, and authority protection for trucking businesses.'
    },
    {
        id: 'premium-loads',
        title: 'Premium and High Paying Load Strategy', 
        subTitle: 'Not all freight pays the same. We focus on premium load matching, high-pay strategic freight negotiation, and carrier rate benchmarking. We place you on high-value freight that improves revenue per mile.',
        description: 'Not all freight pays the same. We focus on premium load matching, high-pay strategic freight negotiation, and carrier rate benchmarking. We place you on high-value freight that improves revenue per mile.',
        features: [
            'Premium load identification',
            'High-rate negotiation',
            'Expedited load access',
            'Broker relationship management'
        ],
        iconName: 'DollarSign',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
        buttonText: 'Get Premium Loads',
        buttonLink: '/contact',
        overview: {
            text: `The difference between average loads and premium loads can significantly impact your bottom line. Premium loads offer better rates, favorable terms, and often include additional benefits like fuel surcharges or detention pay. Our Premium and High Paying Load Strategy service focuses exclusively on identifying and securing these high-value opportunities.\n\nWe use market analysis, broker relationships, and rate benchmarking to identify premium loads that match your equipment and preferences. Our team negotiates favorable rates, secures expedited freight, and builds relationships with brokers who consistently offer high-paying loads. We help you move from average-paying freight to premium opportunities.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Premium Load Strategy Service',
            points: [
                'Access to high-paying loads that maximize revenue per mile',
                'Expert rate negotiation secures better terms and rates',
                'Broker relationships provide exclusive access to premium freight',
                'Rate benchmarking ensures you\'re getting market-competitive rates',
                'Strategic load selection improves overall profitability'
            ]
        },
        additionalInfo: {
            text: `Our premium load strategy includes continuous market monitoring to identify high-value opportunities, rate analysis to ensure competitive pricing, and broker relationship management to secure exclusive access to premium freight.\n\nWe evaluate every load opportunity against your profitability targets, equipment capabilities, and operational preferences. Our team negotiates rates, terms, and additional compensation to maximize your revenue. We track your performance on premium loads and adjust strategies to improve results. With our premium load strategy, you'll consistently access the best-paying freight in your market.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg'
        },
        ctaHeadline: 'Ready to Access Premium Loads?',
        ctaDescription: 'Start maximizing revenue per mile with our premium load strategy. Contact us today to get access to high-paying freight.',
        metaTitle: 'Premium and High Paying Load Strategy | Grow Trucking',
        metaDescription: 'Premium load matching and high-rate negotiation for trucking. Access to high-paying freight that maximizes revenue per mile.'
    },
    {
        id: 'invoice-management',
        title: 'Invoice and Paper Management',
        subTitle: 'Truck dispatch involves lots of paperwork. We handle BOLs, rate confirmations, PODs, factoring coordination & billing support, and invoice tracking and payments follow-up. Less paperwork for you — more focus on the road.',
        description: 'Truck dispatch involves lots of paperwork. We handle BOLs, rate confirmations, PODs, factoring coordination & billing support, and invoice tracking and payments follow-up. Less paperwork for you — more focus on the road.',
        features: [
            'Invoice processing',
            'Documentation management',
            'Payment tracking',
            'Paperwork organization'
        ],
        iconName: 'ClipboardList',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg',
        buttonText: 'Manage Documents',
        buttonLink: '/contact',
        overview: {
            text: `Paperwork is a constant part of trucking operations, but it doesn't have to consume your time. Our Invoice and Paper Management service handles all the documentation, billing, and payment tracking so you can focus on driving. We manage everything from bills of lading and rate confirmations to proof of delivery and invoice processing.\n\nOur team organizes all your paperwork, ensures documentation is complete and accurate, processes invoices, and tracks payments. We coordinate with factoring companies, follow up on overdue payments, and maintain organized records that make audits and tax preparation straightforward.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Invoice and Paper Management Service',
            points: [
                'Complete paperwork handling frees your time for driving',
                'Organized documentation makes audits and taxes easier',
                'Payment tracking ensures you get paid on time',
                'Factoring coordination simplifies cash flow management',
                'Professional document management reduces errors and delays'
            ]
        },
        additionalInfo: {
            text: `Our invoice and paper management service includes digital document storage, automated invoice processing, payment tracking and follow-up, and factoring coordination. We maintain organized records of all transactions, making it easy to find documents when needed.\n\nWe process invoices promptly, ensuring quick payment turnaround, and follow up on any payment issues. Our team coordinates with your factoring company to ensure smooth cash flow. We provide regular reports on payment status and outstanding invoices. With our paper management service, paperwork becomes organized and manageable.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770962704/page-banner_cb6nff.jpg'
        },
        ctaHeadline: 'Ready to Simplify Your Paperwork?',
        ctaDescription: 'Let us handle your invoices and paperwork so you can focus on driving. Contact us today to get started.',
        metaTitle: 'Invoice and Paper Management | Grow Trucking',
        metaDescription: 'Complete invoice and paperwork management for trucking. BOLs, PODs, invoice processing, and payment tracking.'
    },
    {
        id: 'trip-planning',
        title: 'Trip Planning', 
        subTitle: 'Each trip is carefully planned to combine efficient routing, pickup & delivery scheduling, and rest stops and regulations. Better trip planning = fewer delays and higher satisfaction.',
        description: 'Each trip is carefully planned to combine efficient routing, pickup & delivery scheduling, and rest stops and regulations. Better trip planning = fewer delays and higher satisfaction.',
        features: [
            'Route planning',
            'Appointment scheduling',
            'Stop coordination',
            'Delivery optimization'
        ],
        iconName: 'MapPin',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg',
        buttonText: 'Plan Your Trip',
        buttonLink: '/contact',
        overview: {
            text: `Effective trip planning is the foundation of successful trucking operations. A well-planned trip minimizes delays, reduces costs, and ensures on-time delivery. Our Trip Planning service creates comprehensive trip plans that account for routing, scheduling, regulations, and contingencies.\n\nWe plan each trip from start to finish, considering pickup and delivery appointments, hours of service requirements, rest stops, fuel locations, and potential delays. Our team coordinates with shippers and receivers to optimize scheduling, and we provide detailed trip plans that keep drivers informed and on schedule.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/reefer_spd2ee.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Trip Planning Service',
            points: [
                'Comprehensive trip plans reduce delays and improve on-time delivery',
                'Efficient routing minimizes fuel costs and travel time',
                'HOS compliance built into every trip plan',
                'Appointment coordination ensures smooth pickups and deliveries',
                'Contingency planning prepares for unexpected situations'
            ]
        },
        additionalInfo: {
            text: `Our trip planning service includes detailed route analysis, appointment scheduling, rest stop planning, fuel stop optimization, and regulatory compliance checks. We create trip plans that account for traffic patterns, weather conditions, and construction delays.\n\nWe provide drivers with clear trip instructions, including routes, schedules, contact information, and special instructions. Our team monitors trip progress and adjusts plans as needed. We track trip performance to identify improvement opportunities. With our trip planning service, every trip becomes more efficient and profitable.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready to Improve Your Trip Planning?',
        ctaDescription: 'Get comprehensive trip planning that reduces delays and improves efficiency. Contact us today to get started.',
        metaTitle: 'Trip Planning Services | Grow Trucking',
        metaDescription: 'Comprehensive trip planning for trucking. Route optimization, appointment scheduling, and delivery coordination.'
    },
    {
        id: 'shipper-credit',
        title: 'Shipper Credit Check', 
        subTitle: 'Before you haul — we check broker and shipper payment history, credit risk profile, and reliability & payment timelines. Avoid risky partners and focus on trusted payers.',
        description: 'Before you haul — we check broker and shipper payment history, credit risk profile, and reliability & payment timelines. Avoid risky partners and focus on trusted payers.',
        features: [
            'Credit history verification',
            'Payment term analysis',
            'Risk assessment',
            'Broker reliability checks'
        ],
        iconName: 'CreditCard',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg',
        buttonText: 'Check Credit',
        buttonLink: '/contact',
        overview: {
            text: `Getting paid is just as important as getting the load. Unfortunately, not all brokers and shippers have reliable payment histories. Our Shipper Credit Check service helps you avoid risky partners by verifying credit history, payment terms, and reliability before you commit to hauling freight.\n\nWe check credit scores, payment histories, and industry reputation for every broker and shipper you're considering. Our team analyzes payment terms, identifies potential risks, and provides recommendations on whether to accept loads. We help you make informed decisions that protect your cash flow and reduce payment risk.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805462/box-truck_fgn0t6.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Shipper Credit Check Service',
            points: [
                'Credit verification protects you from non-paying customers',
                'Payment history analysis identifies reliable partners',
                'Risk assessment helps you make informed load decisions',
                'Broker reliability checks ensure trustworthy relationships',
                'Reduced payment risk improves cash flow stability'
            ]
        },
        additionalInfo: {
            text: `Our credit check service includes comprehensive credit history verification, payment term analysis, industry reputation research, and risk assessment. We check multiple credit databases and industry resources to provide complete information.\n\nWe provide detailed credit reports showing payment history, credit scores, outstanding debts, and industry feedback. Our team monitors credit status for your regular partners and alerts you to any changes. We help you build relationships with reliable brokers and shippers while avoiding risky partners. With our credit check service, you'll work with partners you can trust.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Protect Your Payments?',
        ctaDescription: 'Verify broker and shipper credit before you haul. Contact us today to start using our credit check service.',
        metaTitle: 'Shipper Credit Check Services | Grow Trucking',
        metaDescription: 'Broker and shipper credit verification for trucking. Payment history analysis and risk assessment to protect your cash flow.'
    },
    {
        id: '24-7-dispatch',
        title: '24/7 Dispatch', 
        subTitle: 'The freight market never sleeps — and neither do we. 24/7 dispatcher support, weekend load booking, and real-time issue resolution. Day, night, or weekend — Grow Trucking has your back.',
        description: 'The freight market never sleeps — and neither do we. 24/7 dispatcher support, weekend load booking, and real-time issue resolution. Day, night, or weekend — Grow Trucking has your back.',
        features: [
            '24/7 availability',
            'Emergency support',
            'Night and weekend coverage',
            'Always-on assistance'
        ],
        iconName: 'Clock',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg',
        buttonText: 'Get 24/7 Support',
        buttonLink: '/contact',
        overview: {
            text: `Trucking doesn't stop at 5 PM or on weekends. Loads become available at all hours, emergencies happen, and issues need immediate resolution. Our 24/7 Dispatch service ensures you always have support, no matter when you need it.\n\nOur dispatchers are available around the clock to help with load booking, route changes, emergency situations, and problem resolution. Whether it's midnight on a Tuesday or Sunday afternoon, you can reach a real person who understands your situation and can help immediately. We never leave you stranded.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/power-only_xcezse.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our 24/7 Dispatch Service',
            points: [
                'Round-the-clock availability means support whenever you need it',
                'Emergency assistance helps resolve issues quickly',
                'Weekend and holiday coverage ensures continuous operations',
                'Real-time problem resolution minimizes delays',
                'Peace of mind knowing help is always available'
            ]
        },
        additionalInfo: {
            text: `Our 24/7 dispatch service includes continuous dispatcher availability, emergency support, weekend and holiday coverage, and real-time issue resolution. Our dispatchers are trained to handle any situation, from load changes to breakdowns to delivery issues.\n\nWe monitor your operations continuously and proactively address potential problems. Our team coordinates with brokers, shippers, and service providers at any hour to resolve issues quickly. We provide regular updates and keep you informed throughout any situation. With our 24/7 dispatch service, you're never alone on the road.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready for 24/7 Support?',
        ctaDescription: 'Get round-the-clock dispatch support for your trucking operations. Contact us today to get started.',
        metaTitle: '24/7 Dispatch Services | Grow Trucking',
        metaDescription: 'Round-the-clock dispatch support for trucking. 24/7 availability, emergency assistance, and weekend coverage.'
    },
    {
        id: 'weekend-dispatch',
        title: 'Weekend Dispatch',  
        subTitle: 'Specialized weekend dispatch services to keep your trucks moving. We find loads and coordinate deliveries even when most dispatchers are off.',
        description: 'Specialized weekend dispatch services to keep your trucks moving. We find loads and coordinate deliveries even when most dispatchers are off.',
        features: [
            'Weekend load finding',
            'Saturday/Sunday coverage',
            'Holiday dispatch support',
            'Extended hours service'
        ],
        iconName: 'Calendar',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg',
        buttonText: 'Weekend Support',
        buttonLink: '/contact',
        overview: {
            text: `Weekends and holidays are prime opportunities for trucking operations, but most dispatch services are closed. Our Weekend Dispatch service keeps your trucks moving when others are parked. We specialize in finding weekend loads, coordinating Saturday and Sunday deliveries, and providing holiday coverage.\n\nOur weekend dispatchers understand the unique challenges of weekend operations, including limited shipper availability, special delivery requirements, and expedited freight needs. We work with brokers who have weekend freight and coordinate with receivers who accept weekend deliveries. We help you maximize weekend revenue opportunities.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/hotshot_jwfc9x.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our Weekend Dispatch Service',
            points: [
                'Weekend load finding keeps your trucks moving when others are parked',
                'Saturday and Sunday coverage ensures continuous operations',
                'Holiday dispatch support maintains service during peak periods',
                'Specialized weekend expertise understands unique challenges',
                'Maximize revenue opportunities during high-demand periods'
            ]
        },
        additionalInfo: {
            text: `Our weekend dispatch service includes dedicated weekend dispatchers, weekend load board monitoring, Saturday and Sunday delivery coordination, and holiday coverage. We maintain relationships with brokers who have weekend freight and receivers who accept weekend deliveries.\n\nWe understand weekend operations require different approaches, including earlier planning, expedited coordination, and flexible scheduling. Our team works proactively to secure weekend loads and coordinate deliveries. We provide the same level of service on weekends as during the week. With our weekend dispatch service, weekends become profitable opportunities.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        ctaHeadline: 'Ready for Weekend Dispatch Support?',
        ctaDescription: 'Keep your trucks moving on weekends and holidays. Contact us today to get weekend dispatch coverage.',
        metaTitle: 'Weekend Dispatch Services | Grow Trucking',
        metaDescription: 'Specialized weekend dispatch services for trucking. Saturday/Sunday coverage, holiday support, and weekend load finding.'
    },
    {
        id: 'eld-monitoring',
        title: 'ELD Monitoring', 
        subTitle: 'Powered by cutting-edge ELD tracking, we help you comply with Hours-of-Service rules, monitor driver logs, and prevent violations. ELD isn\'t just compliance — it\'s operational efficiency.',
        description: 'Powered by cutting-edge ELD tracking, we help you comply with Hours-of-Service rules, monitor driver logs, and prevent violations. ELD isn\'t just compliance — it\'s operational efficiency.',
        features: [
            'ELD data monitoring',
            'Hours of service tracking',
            'Compliance verification',
            'Schedule optimization'
        ],
        iconName: 'Monitor',
        imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg',
        buttonText: 'Monitor ELD',
        buttonLink: '/contact',
        overview: {
            text: `ELD (Electronic Logging Device) monitoring is essential for compliance, but it's also a powerful tool for operational efficiency. Our ELD Monitoring service helps you comply with Hours-of-Service regulations while using ELD data to optimize operations and prevent violations.\n\nWe monitor ELD data in real-time, track hours of service, verify compliance, and alert you to potential violations before they occur. Our team uses ELD data to optimize driver schedules, plan routes more efficiently, and ensure drivers have adequate rest. We turn compliance monitoring into operational advantage.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770805461/dry-van_ptfjzs.jpg'
        },
        whyChooseUs: {
            title: 'Why Choose Our ELD Monitoring Service',
            points: [
                'Real-time HOS monitoring prevents costly violations',
                'Proactive alerts help you address issues before violations occur',
                'Schedule optimization uses ELD data to improve efficiency',
                'Compliance verification ensures audit readiness',
                'Operational insights from ELD data improve decision-making'
            ]
        },
        additionalInfo: {
            text: `Our ELD monitoring service includes continuous data monitoring, hours of service tracking, compliance verification, violation alerts, and schedule optimization. We integrate with major ELD systems to provide comprehensive monitoring and reporting.\n\nWe provide regular compliance reports showing HOS status, violation history, and compliance trends. Our team uses ELD data to identify optimization opportunities, such as better route planning or schedule adjustments. We help you understand ELD data and use it to improve operations. With our ELD monitoring service, compliance becomes a competitive advantage.`,
            imageUrl: 'https://res.cloudinary.com/dj9r2zjpm/image/upload/v1770178795/joseph-paul-jOi8CLM2aaI-unsplash_hytc3b.jpg'
        },
        ctaHeadline: 'Ready to Optimize Your ELD Monitoring?',
        ctaDescription: 'Get comprehensive ELD monitoring that ensures compliance and improves operations. Contact us today to get started.',
        metaTitle: 'ELD Monitoring Services | Grow Trucking',
        metaDescription: 'Comprehensive ELD monitoring and HOS compliance for trucking. Real-time tracking, violation prevention, and schedule optimization.'
    }
]

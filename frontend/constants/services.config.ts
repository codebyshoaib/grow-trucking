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
    description: string
    subheading?: string
    features: string[]
    iconName: string // Changed from icon: LucideIcon to iconName: string
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
        description: 'Get your own dedicated dispatcher who understands your business, preferences, and goals. Personalized service with direct communication and tailored load matching.',
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
        description: 'Secure dedicated lane contracts for consistent, predictable revenue. We negotiate long-term agreements with shippers and brokers for your preferred routes.',
        features: [
            'Dedicated route contracts',
            'Consistent revenue streams',
            'Long-term agreements',
            'Preferred lane access'
        ],
        iconName: 'Route',
        buttonText: 'Explore Lane Contracts',
        buttonLink: '/contact'
    },
    {
        id: 'ifta-reporting',
        title: 'IFTA Reporting & Compliance Services',
        description: 'Comprehensive IFTA reporting and fuel tax compliance services. We handle all documentation, calculations, and filings to keep you compliant.',
        features: [
            'IFTA quarterly reporting',
            'Fuel tax calculations',
            'Compliance documentation',
            'Filing assistance'
        ],
        iconName: 'FileText',
        buttonText: 'Get IFTA Support',
        buttonLink: '/contact'
    },
    {
        id: 'quickbooks-bookkeeping',
        title: 'QuickBooks Bookkeeping Services',
        description: 'Professional bookkeeping services tailored for trucking businesses. We manage your finances, track expenses, and provide clear financial reports.',
        features: [
            'QuickBooks setup and management',
            'Expense tracking',
            'Financial reporting',
            'Tax preparation support'
        ],
        iconName: 'Calculator',
        buttonText: 'Start Bookkeeping',
        buttonLink: '/contact'
    },
    {
        id: 'route-planning',
        title: 'Route Planning and Profit Optimization',
        description: 'Advanced route planning that maximizes profit per mile. We analyze routes, optimize deadhead, and select the most profitable loads for your operation.',
        features: [
            'Profit-per-mile optimization',
            'Deadhead reduction',
            'Route efficiency analysis',
            'Load profitability scoring'
        ],
        iconName: 'Navigation',
        buttonText: 'Optimize Routes',
        buttonLink: '/contact'
    },
    {
        id: 'fleet-management',
        title: 'Fleet Management System',
        description: 'Comprehensive fleet management solutions to track vehicles, drivers, and operations. Real-time monitoring and reporting for better decision-making.',
        features: [
            'Vehicle tracking and monitoring',
            'Driver management',
            'Performance analytics',
            'Operational reporting'
        ],
        iconName: 'Truck',
        buttonText: 'Manage Your Fleet',
        buttonLink: '/contact'
    },
    {
        id: 'audit-assistance',
        title: 'Audit Assistance and Rate Verification',
        description: 'Expert audit assistance and rate verification services. We review your contracts, verify rates, and ensure you\'re getting paid correctly for every load.',
        features: [
            'Rate verification and validation',
            'Contract review',
            'Payment dispute resolution',
            'Audit support'
        ],
        iconName: 'Shield',
        buttonText: 'Get Audit Help',
        buttonLink: '/contact'
    },
    {
        id: 'business-growth',
        title: 'Trucking Business Growth Strategy',
        description: 'Strategic growth planning to scale your trucking business. We develop customized strategies for expansion, fleet growth, and revenue optimization.',
        features: [
            'Growth strategy development',
            'Market analysis',
            'Expansion planning',
            'Revenue optimization'
        ],
        iconName: 'TrendingUp',
        buttonText: 'Plan Your Growth',
        buttonLink: '/contact'
    },
    {
        id: 'motor-carrier-compliance',
        title: 'Motor Carrier Security and Compliance',
        description: 'Complete compliance management for motor carriers. We ensure you meet all DOT, FMCSA, and state requirements to keep your authority active.',
        features: [
            'DOT compliance management',
            'FMCSA requirements',
            'Safety compliance',
            'Authority maintenance'
        ],
        iconName: 'FileCheck',
        buttonText: 'Ensure Compliance',
        buttonLink: '/contact'
    },
    {
        id: 'premium-loads',
        title: 'Premium and High Paying Load Strategy',
        description: 'Access to premium loads and high-paying opportunities. We identify and secure the best-paying loads based on your equipment, location, and preferences.',
        features: [
            'Premium load identification',
            'High-rate negotiation',
            'Expedited load access',
            'Broker relationship management'
        ],
        iconName: 'DollarSign',
        buttonText: 'Get Premium Loads',
        buttonLink: '/contact'
    },
    {
        id: 'invoice-management',
        title: 'Invoice and Paper Management',
        description: 'Streamlined invoice and paperwork management. We handle billing, documentation, and ensure timely payments from brokers and shippers.',
        features: [
            'Invoice processing',
            'Documentation management',
            'Payment tracking',
            'Paperwork organization'
        ],
        iconName: 'ClipboardList',
        buttonText: 'Manage Documents',
        buttonLink: '/contact'
    },
    {
        id: 'trip-planning',
        title: 'Trip Planning',
        description: 'Comprehensive trip planning services for every journey. We plan routes, coordinate stops, manage appointments, and ensure on-time delivery.',
        features: [
            'Route planning',
            'Appointment scheduling',
            'Stop coordination',
            'Delivery optimization'
        ],
        iconName: 'MapPin',
        buttonText: 'Plan Your Trip',
        buttonLink: '/contact'
    },
    {
        id: 'shipper-credit',
        title: 'Shipper Credit Check',
        description: 'Credit verification and risk assessment for shippers and brokers. We check credit history, payment terms, and help you avoid non-paying customers.',
        features: [
            'Credit history verification',
            'Payment term analysis',
            'Risk assessment',
            'Broker reliability checks'
        ],
        iconName: 'CreditCard',
        buttonText: 'Check Credit',
        buttonLink: '/contact'
    },
    {
        id: '24-7-dispatch',
        title: '24/7 Dispatch',
        description: 'Round-the-clock dispatch services available whenever you need them. Get load assistance, support, and coordination at any time of day or night.',
        features: [
            '24/7 availability',
            'Emergency support',
            'Night and weekend coverage',
            'Always-on assistance'
        ],
        iconName: 'Clock',
        buttonText: 'Get 24/7 Support',
        buttonLink: '/contact'
    },
    {
        id: 'weekend-dispatch',
        title: 'Weekend Dispatch',
        description: 'Specialized weekend dispatch services to keep your trucks moving. We find loads and coordinate deliveries even when most dispatchers are off.',
        features: [
            'Weekend load finding',
            'Saturday/Sunday coverage',
            'Holiday dispatch support',
            'Extended hours service'
        ],
        iconName: 'Calendar',
        buttonText: 'Weekend Support',
        buttonLink: '/contact'
    },
    {
        id: 'eld-monitoring',
        title: 'ELD Monitoring',
        description: 'Electronic Logging Device (ELD) monitoring and compliance services. We track hours of service, ensure compliance, and help optimize driver schedules.',
        features: [
            'ELD data monitoring',
            'Hours of service tracking',
            'Compliance verification',
            'Schedule optimization'
        ],
        iconName: 'Monitor',
        buttonText: 'Monitor ELD',
        buttonLink: '/contact'
    }
]

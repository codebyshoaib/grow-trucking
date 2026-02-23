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
    features: string[]
    icon: LucideIcon
    buttonText: string
    buttonLink: string
}

export const allServices: Service[] = [
    {
        id: 'dedicated-dispatcher',
        title: 'Dedicated Personal Dispatcher',
        description: 'Get your own dedicated dispatcher who understands your business, preferences, and goals. Personalized service with direct communication and tailored load matching.',
        features: [
            'One-on-one dispatcher relationship',
            'Customized load matching',
            'Direct communication channel',
            'Business-specific strategies'
        ],
        icon: User,
        buttonText: 'Get Your Dispatcher',
        buttonLink: '/contact'
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
        icon: Route,
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
        icon: FileText,
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
        icon: Calculator,
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
        icon: Navigation,
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
        icon: Truck,
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
        icon: Shield,
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
        icon: TrendingUp,
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
        icon: FileCheck,
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
        icon: DollarSign,
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
        icon: ClipboardList,
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
        icon: MapPin,
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
        icon: CreditCard,
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
        icon: Clock,
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
        icon: Calendar,
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
        icon: Monitor,
        buttonText: 'Monitor ELD',
        buttonLink: '/contact'
    }
]

import type { Metadata } from 'next'
import PageBanner from '@/components/pages/PageBanner'
import CareersHero from '@/components/pages/careers/CareersHero'
import WhyWorkAtGrow from '@/components/pages/careers/WhyWorkAtGrow'
import OpenJobs from '@/components/pages/careers/OpenJobs'
import CareerGrowthPath from '@/components/pages/careers/CareerGrowthPath'
import WhatWeValue from '@/components/pages/careers/WhatWeValue'
import ApplicationForm from '@/components/pages/careers/ApplicationForm'
import CareersFAQ from '@/components/pages/careers/CareersFAQ'
import CareersCTA from '@/components/pages/careers/CareersCTA'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'

export const metadata: Metadata = {
    title: 'Careers & Employment | Join Grow Trucking Team | Truck Dispatching Sales Jobs',
    description: 'Join Grow Trucking as a Truck Dispatching Sales Executive. Remote & on-site positions available. Competitive pay + commission. Top performers earn $4,000–$6,000/month. Apply today!',
    keywords: [
        'truck dispatching jobs',
        'logistics sales careers',
        'freight dispatch employment',
        'remote trucking jobs',
        'sales executive positions',
        'trucking industry careers',
        'dispatch sales jobs USA',
        'Grow Trucking careers'
    ],
    alternates: {
        canonical: `${baseUrl}/careers`,
    },
    openGraph: {
        title: 'Careers & Employment | Join Grow Trucking Team',
        description: 'Join the team that\'s driving the future of truck dispatching. Remote & on-site positions available with competitive pay + commission.',
        type: 'website',
        url: `${baseUrl}/careers`,
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Careers & Employment | Join Grow Trucking Team',
        description: 'Join the team that\'s driving the future of truck dispatching. Remote & on-site positions available.',
    },
}

export default async function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Careers & Employment"
                imageUrl="/banners/careers-grow-trucking.webp"
                description="Join the Team That's Driving the Future of Truck Dispatching"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers', href: '/careers' }
                ]}
                imageAlt="Careers Banner"
            />
            <CareersHero />
            <WhyWorkAtGrow />
            <OpenJobs />
            <CareerGrowthPath />
            <WhatWeValue />
            <CareersFAQ />
            <CareersCTA />
        </main>
    )
}

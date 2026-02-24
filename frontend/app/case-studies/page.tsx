import CaseStudiesPage from '@/components/pages/case-studies/CaseStudiesPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Driver Success Case Studies | Grow Trucking ',
    description: '15 real driver success stories. See how owner-operators and small fleet drivers increased revenue, reduced empty miles, and took back control of their trucking business.',
    alternates: {
        canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'}/case-studies`,
    },
    openGraph: {
        title: 'Driver Success Case Studies | Grow Trucking Dispatching',
        description: '15 real driver success stories. See how owner-operators and small fleet drivers increased revenue, reduced empty miles, and took back control of their trucking business.',
        type: 'website',
    },
}

export default function CaseStudiesListingPage() {
    return <CaseStudiesPage />
}

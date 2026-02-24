import { notFound } from 'next/navigation'
import CaseStudyDetail from '@/components/pages/case-studies/CaseStudyDetail'
import { getCaseStudyBySlug, getAllCaseStudies } from '@/constants/case-studies.config'
import type { Metadata } from 'next'

/**
 * Generate static params for all case studies
 */
export async function generateStaticParams() {
    const caseStudies = getAllCaseStudies()
    return caseStudies.map((study) => ({
        slug: study.slug,
    }))
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found',
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const canonicalUrl = `${baseUrl}/case-studies/${slug}`

    return {
        title: `${caseStudy.driverName} - Case Study | Grow Trucking Dispatching`,
        description: `${caseStudy.driverName} increased revenue by ${caseStudy.revenueIncrease} on the ${caseStudy.lane} lane. ${caseStudy.summary}`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${caseStudy.driverName} - Case Study | Grow Trucking Dispatching`,
            description: `${caseStudy.driverName} increased revenue by ${caseStudy.revenueIncrease} on the ${caseStudy.lane} lane.`,
            type: 'website',
            url: canonicalUrl,
        },
    }
}

/**
 * Case Study Detail Page
 */
export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const caseStudy = getCaseStudyBySlug(slug)

    if (!caseStudy) {
        notFound()
    }

    return <CaseStudyDetail caseStudy={caseStudy} />
}

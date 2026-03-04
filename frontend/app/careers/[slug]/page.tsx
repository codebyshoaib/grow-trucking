import { notFound } from 'next/navigation'
import JobDetail from '@/components/pages/careers/JobDetail'
import ApplicationForm from '@/components/pages/careers/ApplicationForm'
import { JobRegistry } from '@/domain/job/job.config'
import type { Metadata } from 'next'
import PageBanner from '@/components/pages/PageBanner'

/**
 * Generate static params for all jobs
 * Next.js will pre-render these pages at build time
 */
export async function generateStaticParams() {
    const jobs = JobRegistry.getAll()
    return jobs.map((job) => ({
        slug: job.slug,
    }))
}

/**
 * Generate metadata for SEO
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const job = JobRegistry.getBySlug(slug)

    if (!job) {
        return {
            title: 'Job Not Found',
        }
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.growtrucking.com'
    const canonicalUrl = `${baseUrl}/careers/${slug}`

    const description = job.introduction ||
        `Join Grow Trucking as a ${job.title} [${job.workArrangement}] in ${job.location}. ${job.compensation || 'Competitive compensation'}. ${job.employmentType} position.`

    return {
        title: `${job.title} [${job.workArrangement}] | Careers | Grow Trucking`,
        description,
        keywords: [
            job.title.toLowerCase(),
            'truck dispatching jobs',
            'logistics sales careers',
            job.workArrangement.toLowerCase(),
            job.location,
            'Grow Trucking careers'
        ],
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${job.title} [${job.workArrangement}] | Grow Trucking Careers`,
            description,
            type: 'website',
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary_large_image',
            title: `${job.title} [${job.workArrangement}] | Grow Trucking`,
            description,
        },
    }
}

/**
 * Job Detail Page
 * Dynamic route handler for individual job postings
 * Note: In Next.js 15+, params is a Promise and must be awaited
 */
export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const job = JobRegistry.getBySlug(slug)

    if (!job) {
        notFound()
    }

    return (
        <>
            <PageBanner
                title={`${job.title}`}
                description={`${job.department} · ${job.location} · ${job.employmentType}${job.compensation ? ` · ${job.compensation}` : ''}`}
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers', href: '/careers' },
                    { label: job.title, href: `/careers/${job.slug}` }
                ]}
                imageAlt={`${job.title} - Careers`}
            />
            <JobDetail job={job} />
            <ApplicationForm />
        </>
    )
}

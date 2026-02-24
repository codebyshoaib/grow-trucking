import { notFound } from 'next/navigation'
import JobDetail from '@/components/pages/careers/JobDetail'
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

    return {
        title: `${job.title} | Careers | Grow Trucking`,
        description: job.description || `Join Grow Trucking as a ${job.title} in ${job.location}. ${job.employmentType} position.`,
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            title: `${job.title} | Grow Trucking`,
            description: job.description || `Join Grow Trucking as a ${job.title}`,
            type: 'website',
            url: canonicalUrl,
        },
        twitter: {
            card: 'summary',
            title: `${job.title} | Grow Trucking`,
            description: job.description || `Join Grow Trucking as a ${job.title}`,
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
                title={job.title}
                description={`${job.location} · ${job.employmentType}`}
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers', href: '/careers' },
                    { label: job.title, href: `/careers/${job.slug}` }
                ]}
                imageAlt={`${job.title} - Careers`}
            />
            <JobDetail job={job} />
        </>
    )
}

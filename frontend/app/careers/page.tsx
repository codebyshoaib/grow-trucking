import PageBanner from '@/components/pages/PageBanner'
import CareersAbout from '@/components/pages/careers/CareersAbout'
import OpenJobs from '@/components/pages/careers/OpenJobs'

export default async function CareersPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Careers"
                imageUrl="/banners/careers-grow-trucking.webp"
                description="Join the Grow Trucking team and help shape the future of truck dispatch services"
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Careers', href: '/careers' }
                ]}
                imageAlt="Careers Banner"
            />
            <CareersAbout />
            <OpenJobs />
        </main>
    )
}

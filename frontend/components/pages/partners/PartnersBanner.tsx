import PageBanner from '@/components/pages/PageBanner'

export default function PartnersBanner() {
    return (
        <PageBanner
            title="About Our Partners"
            description="Strategic partnerships with premier freight brokers to deliver exceptional freight opportunities and reliable capacity solutions"
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'About Our Partners', href: '/about-our-partners' }
            ]}
            imageAlt="Partners Banner"
        />
    )
}

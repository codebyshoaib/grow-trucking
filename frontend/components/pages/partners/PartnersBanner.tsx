import PageBanner from '@/components/pages/PageBanner'

export default function PartnersBanner() {
    return (
        <PageBanner
            title="We Work With"
            description="Strategic partnerships with premier freight brokers to deliver exceptional freight opportunities and reliable capacity solutions"
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'We Work With', href: '/about-our-partners' }
            ]}
            imageAlt="Partners Banner"
        />
    )
}

import PageBanner from '@/components/pages/PageBanner'

export default function ServicesBanner() {
    return (
        <PageBanner
            title="Our Services"
            description="Comprehensive trucking solutions designed to scale your business, maximize profitability, and streamline operations. From free audits to growth strategies, we've got you covered."
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'Our Services', href: '/services' }
            ]}
            imageAlt="Services Banner"
        />
    )
}

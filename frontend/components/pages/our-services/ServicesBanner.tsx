import PageBanner from '@/components/pages/PageBanner'

export default function ServicesBanner() {
    return (
        <PageBanner
            title="Our Services"
            description="We offer a wide range of services to meet your needs."
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'Our Services', href: '/our-services' }
            ]}
            imageAlt="Services Banner"
        />
    )
}

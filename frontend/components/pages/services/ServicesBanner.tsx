import PageBanner from '@/components/pages/PageBanner'

interface ServicesBannerProps {
    title?: string
    subtitle?: string
    breadcrumbLabel?: string
    breadcrumbHref?: string
}

export default function ServicesBanner({ 
    title = "Our Services",
    subtitle = "Comprehensive trucking solutions designed to scale your business, maximize profitability, and streamline operations. From free audits to growth strategies, we've got you covered.",
    breadcrumbLabel = "Our Services",
    breadcrumbHref = "/services"
}: ServicesBannerProps) {
    return (
        <PageBanner
            title={title}
            description={subtitle}
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: breadcrumbLabel, href: breadcrumbHref }
            ]}
            imageAlt={`${title} Banner`}
        />
    )
}

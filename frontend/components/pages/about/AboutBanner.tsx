import PageBanner from '@/components/pages/PageBanner'

export default function AboutBanner() {
    return (
        <PageBanner
            title="Grow Trucking"
            description={
                <>
                    Grow Your Gross |
                    We Handle The Rest
                </>
            }
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' }
            ]}
            imageAlt="About Banner"
            downloadButton={true}

        />
    )
}

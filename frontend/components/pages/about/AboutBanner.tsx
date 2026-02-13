import PageBanner from '@/components/pages/PageBanner'

export default function AboutBanner() {
    return (
        <PageBanner
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' }
            ]}
            imageAlt="About Banner"
            downloadButton={true}

        />
    )
}

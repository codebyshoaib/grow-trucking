import PageBanner from '@/components/pages/PageBanner'

export default function AboutBanner() {
    return (
        <PageBanner
            title="Grow Trucking"
            description={
                <>
                    Reliable Dispatch & Freight Solutions
                    Powering Independent Truckers Nationwide
                </>
            }
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' }
            ]}
            imageAlt="About Banner"
        />
    )
}

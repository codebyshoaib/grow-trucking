import PageBanner from '@/components/pages/PageBanner'

export default function ContactBanner() {
    return (
        <PageBanner
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'Contact Us', href: '/contact' }
            ]}
            imageAlt="Contact Banner"
        />
    )
}

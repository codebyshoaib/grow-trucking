import PageBanner from '@/components/pages/PageBanner'

export default function ContactBanner() {
    return (
        <PageBanner
            title="Contact Us"
            description="Get in touch with our team. We're here to help with your dispatch needs."
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'Contact Us', href: '/contact' }
            ]}
            imageAlt="Contact Banner"
        />
    )
}

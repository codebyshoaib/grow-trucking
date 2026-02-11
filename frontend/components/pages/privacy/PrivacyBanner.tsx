import PageBanner from '@/components/pages/PageBanner'

export default function PrivacyBanner() {
    return (
        <PageBanner
            title="Privacy Policy"
            description="Your privacy is important to us. Learn how we collect, use, and protect your personal information."
            breadcrumbItems={[
                { label: 'Home', href: '/' },
                { label: 'Privacy Policy', href: '/privacy' }
            ]}
            imageAlt="Privacy Policy Banner"
        />
    )
}

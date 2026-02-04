import PageBanner from "@/components/pages/PageBanner";

export default async function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <PageBanner
                title="Our Services"
                description="We offer a wide range of services to meet your needs."
                breadcrumbItems={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' }
                ]}
                imageAlt="Services Banner"
            />
            {/* Add your services content here */}
        </main>
    );
}

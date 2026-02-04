import ServicesSection from "@/components/pages/services/ServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";

export default async function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner />
            <ServicesSection />
        </main>
    );
}

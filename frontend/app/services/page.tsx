import ServicesSection from "@/components/pages/services/ServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";
import StatsSection from "@/components/pages/services/StatsSection";
import WhyOurServices from "@/components/pages/services/WhyOurServices";

export default async function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner />
            <ServicesSection itemsFilter="services" />
            <StatsSection />
            <WhyOurServices />
        </main>
    );
}

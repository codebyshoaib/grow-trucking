import AllServicesSection from "@/components/pages/services/AllServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";
import StatsSection from "@/components/pages/services/StatsSection";
import WhyOurServices from "@/components/pages/services/WhyOurServices";

export default async function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner />
            <AllServicesSection />
            <StatsSection />
            <WhyOurServices />
        </main>
    );
}

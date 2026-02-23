import AllServicesSection from "@/components/pages/services/AllServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";
import ServicesIntro from "@/components/pages/services/ServicesIntro";
import WhyCarrierOwners from "@/components/pages/services/WhyCarrierOwners";
import StatsSection from "@/components/pages/services/StatsSection";
import WhyOurServices from "@/components/pages/services/WhyOurServices";

export default async function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner />
            <ServicesIntro />
            <AllServicesSection />
            <StatsSection />
            <WhyCarrierOwners />
        </main>
    );
}

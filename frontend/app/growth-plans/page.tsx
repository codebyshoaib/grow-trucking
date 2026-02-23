import ServicesSection from "@/components/pages/services/ServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";

export default async function GrowthPlansPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner
                title="Growth Plans"
                subtitle="Strategic roadmaps to scale your trucking business"
                breadcrumbLabel="Growth Plans"
                breadcrumbHref="/growth-plans"
            />
            <ServicesSection itemsFilter="growth-plans" />
        </main>
    );
}

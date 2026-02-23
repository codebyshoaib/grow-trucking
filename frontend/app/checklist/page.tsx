import ServicesSection from "@/components/pages/services/ServicesSection";
import ServicesBanner from "@/components/pages/services/ServicesBanner";

export default async function ChecklistPage() {
    return (
        <main className="min-h-screen bg-white">
            <ServicesBanner 
                title="Growth Checklist"
                subtitle="Essential checklists to grow your trucking business"
                breadcrumbLabel="Checklist"
                breadcrumbHref="/checklist"
            />
            <ServicesSection itemsFilter="checklist" />
        </main>
    );
}

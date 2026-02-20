import PartnersBanner from "@/components/pages/partners/PartnersBanner";
import PartnersSection from "@/components/pages/partners/PartnersSection";
import CTASection from '@/components/pages/about/CTASection';

export default async function AboutOurPartnersPage() {
    return (
        <main className="min-h-screen bg-white">
            <PartnersBanner />
            <PartnersSection />
            <CTASection
                headline="Ready to Partner with Premium Freight Brokers?"
                description="Join Grow Trucking today and gain access to high-value freight opportunities from our trusted brokerage partners. Start hauling premium loads and grow your business."
                buttonText="Get Started Now"
            />
        </main>
    );
}

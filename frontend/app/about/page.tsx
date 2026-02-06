import AboutBanner from "@/components/pages/about/AboutBanner";
import AboutInfo from "@/components/pages/about/AboutInfo";
import OurVision from "@/components/pages/about/OurVision";
import TestimonialsSection from '@/components/pages/homepage/TestimonialsSection';
import WhyChooseUs from '@/components/pages/about/WhyChooseUs';
import CTASection from '@/components/pages/about/CTASection';
import AboutExperience from '@/components/pages/about/AboutExperience';
import NextMoving from '@/components/pages/about/NextMoving';

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutBanner />
            <AboutInfo />
            <OurVision />
            <WhyChooseUs />
            <AboutExperience />
            <TestimonialsSection />
            <NextMoving />
        </main>
    );
}

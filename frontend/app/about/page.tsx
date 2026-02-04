import dynamic from 'next/dynamic';
import AboutBanner from "@/components/pages/about/AboutBanner";
import AboutInfo from "@/components/pages/about/AboutInfo";
import TestimonialsSection from '@/components/pages/homepage/TestimonialsSection';
import WhyChooseUs from '@/components/pages/about/WhyChooseUs';

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutBanner />
            <AboutInfo />
            <WhyChooseUs />
            <TestimonialsSection />
        </main>
    );
}

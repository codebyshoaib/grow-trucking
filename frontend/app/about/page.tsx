import dynamic from 'next/dynamic';
import AboutBanner from "@/components/pages/about/AboutBanner";
import AboutInfo from "@/components/pages/about/about-info";
import TestimonialsSection from '@/components/pages/homepage/TestimonialsSection';

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutBanner />
            <AboutInfo />
            <TestimonialsSection />
        </main>
    );
}

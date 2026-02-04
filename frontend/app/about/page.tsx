import dynamic from 'next/dynamic';
import AboutBanner from "@/components/pages/about/AboutBanner";

export default async function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutBanner />
        </main>
    );
}

import dynamic from 'next/dynamic';
import Hero from "@/components/pages/homepage/Hero";
import AboutSection from "@/components/pages/homepage/AboutSection";

// Lazy load sections below the fold
const ProcessSection = dynamic(() => import("@/components/pages/homepage/ProcessSection"), {
  loading: () => <div className="h-96 bg-black" />,
});
const SpecialitiesSection = dynamic(() => import("@/components/pages/homepage/SpecialitiesSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const WhyChooseUs = dynamic(() => import("@/components/pages/homepage/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-white" />,
});
const TestimonialsSection = dynamic(() => import("@/components/pages/homepage/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const FAQSection = dynamic(() => import("@/components/pages/homepage/FAQSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const Footer = dynamic(() => import("@/components/layout/Footer/Footer"));

export default async function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ProcessSection />
      <SpecialitiesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}


import dynamic from 'next/dynamic';
import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/layout/AboutSection";

// Lazy load sections below the fold
const ProcessSection = dynamic(() => import("@/components/layout/ProcessSection"), {
  loading: () => <div className="h-96 bg-black" />,
});
const SpecialitiesSection = dynamic(() => import("@/components/layout/SpecialitiesSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const WhyChooseUs = dynamic(() => import("@/components/layout/WhyChooseUs"), {
  loading: () => <div className="h-96 bg-white" />,
});
const TestimonialsSection = dynamic(() => import("@/components/layout/TestimonialsSection"), {
  loading: () => <div className="h-96 bg-white" />,
});
const FAQSection = dynamic(() => import("@/components/layout/FAQSection"), {
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
      <Footer />
    </main>
  );
}


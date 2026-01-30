import Hero from "@/components/layout/Hero";
import AboutSection from "@/components/layout/AboutSection";
import ProcessSection from "@/components/layout/ProcessSection";
import SpecialitiesSection from "@/components/layout/SpecialitiesSection";
import WhyChooseUs from "@/components/layout/WhyChooseUs";
import TestimonialsSection from "@/components/layout/TestimonialsSection";
import FAQSection from "@/components/layout/FAQSection";

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


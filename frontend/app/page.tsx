import dynamic from 'next/dynamic';
import Hero from "@/components/pages/homepage/Hero";
import AboutSection from "@/components/pages/homepage/AboutSection";
import SchemaScript from "@/components/seo/SchemaScript";
import { generateServicesSchema } from "@/lib/schema";

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
export default async function Home() {
  // Generate Services Schema for truck dispatch specialities (homepage)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.growtrucking.com"
  const specialities = [
    {
      contentTitle: "Box Truck Dispatch",
      description: "Box trucks are essential for final-mile delivery and localized freight movements. Grow Trucking specializes in finding high-paying expedited loads and dedicated routes that keep your box trucks moving profitably without long-haul fatigue.",
    },
    {
      contentTitle: "Dry Van",
      description: "Dry vans are the most required truck types in the market. For a growing carrier company, the essential part is considered to have a guide in this rough market that allows you to grab the most profitable offer. Grow Trucking's dispatch service simplifies your work by keeping track of options across multiple loadboards to the max without you even leaving either the office or driver's seat.",
    },
    {
      contentTitle: "Reefer Dispatch",
      description: "Temperature-sensitive freight requires extra attention and care. Grow Trucking's dispatchers understand the complexity of reefer logistics, from pre-cooling requirements to strictly timed appointments, ensuring your refrigerated units always have premium cargo.",
    },
    {
      contentTitle: "Power Only Dispatch",
      description: "Maximize your versatility with Grow Trucking's Power Only dispatching. We coordinate with shippers who have pre-loaded trailers, allowing you to focus on the drive and turnaround times rather than loading and unloading delays.",
    },
    {
      contentTitle: "Hotshot Dispatch",
      description: "Hotshot trucking demands agility and quick response times. Grow Trucking excels at finding high-priority, time-critical loads that pay a premium, keeping your smaller rig as profitable as the big fleets.",
    },
  ]

  const servicesSchema = generateServicesSchema(
    specialities.map((speciality) => ({
      name: `${speciality.contentTitle} Service`,
      description: speciality.description,
      provider: {
        name: "Grow Trucking",
        url: siteUrl,
      },
      areaServed: "US",
      serviceType: "Truck Dispatch Service",
    }))
  )

  return (
    <main className="min-h-screen bg-white">
      <SchemaScript schema={servicesSchema} />
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


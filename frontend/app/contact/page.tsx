import ContactBanner from "@/components/pages/contact/ContactBanner";
import ContactSection from "@/components/pages/contact/ContactSection";

export default async function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <ContactBanner />
            <ContactSection />
        </main>
    );
}

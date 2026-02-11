import PrivacyBanner from "@/components/pages/privacy/PrivacyBanner";
import PrivacyContent from "@/components/pages/privacy/PrivacyContent";

export default async function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <PrivacyBanner />
            <PrivacyContent />
        </main>
    );
}

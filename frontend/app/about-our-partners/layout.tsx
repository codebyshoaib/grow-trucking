import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Our Partners | Grow Trucking",
    description: "Discover Grow Trucking's strategic partnerships with premier freight brokers including C.H. Robinson, J.B. Hunt, TQL, Echo Global Logistics, and more. Access premium freight opportunities through our trusted network.",
    openGraph: {
        title: "About Our Partners | Grow Trucking",
        description: "Strategic partnerships with premier freight brokers for premium freight opportunities.",
    },
};

export default function AboutOurPartnersLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

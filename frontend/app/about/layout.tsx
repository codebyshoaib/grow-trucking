import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Grow Trucking",
    description: "Learn about Grow Trucking - Your strategic partner for premium truck dispatch services. Discover our mission, values, and commitment to empowering independent owner-operators and fleets.",
    openGraph: {
        title: "About Us | Grow Trucking",
        description: "Learn about Grow Trucking - Your strategic partner for premium truck dispatch services.",
    },
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

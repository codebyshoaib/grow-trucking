import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Growth Plans | Truck Dispatch",
    description: "Free growth plans and strategies to scale your trucking business. Get your free 90-day growth plan, business audit report, and operational growth strategies.",
    openGraph: {
        title: "Growth Plans | Truck Dispatch",
        description: "Free growth plans and strategies to scale your trucking business. Get your free 90-day growth plan, business audit report, and operational growth strategies.",
    },
};

export default function GrowthPlansLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

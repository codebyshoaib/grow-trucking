import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Growth Checklist | Truck Dispatch",
    description: "Free growth checklist to help you identify and capitalize on growth opportunities in your trucking business.",
    openGraph: {
        title: "Growth Checklist | Truck Dispatch",
        description: "Free growth checklist to help you identify and capitalize on growth opportunities in your trucking business.",
    },
};

export default function ChecklistLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

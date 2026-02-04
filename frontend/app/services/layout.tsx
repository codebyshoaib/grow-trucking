import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services | Truck Dispatch",
    description: "We offer a wide range of services to meet your needs. Our services include truck dispatch, load booking, rate negotiation, paperwork, and 24/7 support.",
    openGraph: {
        title: "Services | Truck Dispatch",
        description: "We offer a wide range of services to meet your needs. Our services include truck dispatch, load booking, rate negotiation, paperwork, and 24/7 support.",
    },
};

export default function ServicesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

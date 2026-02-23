import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Service | Truck Dispatch",
    description: "Professional truck dispatch services",
};

export default function ServiceLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

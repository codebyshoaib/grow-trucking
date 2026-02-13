import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Grow Trucking",
    description: "Get in touch with Grow Trucking. We're here to help with your truck dispatch needs. Contact us for inquiries, support, or to learn more about our services.",
    openGraph: {
        title: "Contact Us | Grow Trucking",
        description: "Get in touch with Grow Trucking. We're here to help with your truck dispatch needs.",
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

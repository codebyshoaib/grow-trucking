import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Truck Dispatch",
    description: "Get in touch with our team. We're here to help with your dispatch needs. Contact us for inquiries, support, or to learn more about our services.",
    openGraph: {
        title: "Contact Us | Truck Dispatch",
        description: "Get in touch with our team. We're here to help with your dispatch needs.",
    },
};

export default function ContactLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

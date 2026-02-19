import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up | Grow Trucking",
    description: "Create your account with Grow Trucking. Join our platform to access professional truck dispatch services and manage your operations efficiently.",
    openGraph: {
        title: "Sign Up | Grow Trucking",
        description: "Create your account with Grow Trucking and start managing your dispatch operations.",
    },
};

export default function SignupLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}

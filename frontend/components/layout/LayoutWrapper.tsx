'use client'

import { usePathname } from 'next/navigation'
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

/**
 * LayoutWrapper Component
 * Application layer: Conditionally renders header/footer based on route
 * Excludes header and footer for signup and other auth pages
 */
export default function LayoutWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname()
    const isAuthPage = pathname?.startsWith('/signup')

    if (isAuthPage) {
        return <>{children}</>
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

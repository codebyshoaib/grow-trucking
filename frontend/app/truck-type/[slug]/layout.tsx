import type { Metadata } from 'next'

/**
 * Layout for truck type pages
 * Provides consistent layout structure
 */
export default function TruckTypeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}

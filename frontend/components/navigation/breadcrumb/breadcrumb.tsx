import { BreadcrumbItem } from "./breadcrumb-item"

export type Breadcrumb = {
    label: string
    href?: string
}

type BreadcrumbProps = {
    items: Breadcrumb[]
    className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
    if (!items || items.length === 0) return null

    return (
        <nav aria-label="Breadcrumb" className={className}>
            <ol className="flex items-center gap-2 text-sm md:text-base">
                {items.map((item, index) => (
                    <BreadcrumbItem
                        key={index}
                        label={item.label}
                        href={item.href}
                        isCurrent={index === items.length - 1}
                    />
                ))}
            </ol>
        </nav>
    )
}

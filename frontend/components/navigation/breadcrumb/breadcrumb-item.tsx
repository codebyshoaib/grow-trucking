import Link from "next/link"
import { ChevronRight, Slash } from "lucide-react"
import { cn } from "@/lib/utils"

type BreadcrumbItemProps = {
    label: string
    href?: string
    isCurrent?: boolean
}

export function BreadcrumbItem({
    label,
    href,
    isCurrent = false,
}: BreadcrumbItemProps) {
    return (
        <li className="flex items-center gap-2 text-md md:text-xl">
            {href && !isCurrent ? (
                <Link
                    href={href}
                    className="text-gray-300 hover:text-primary transition-colors duration-200 font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent p-0 rounded-none transition-colors "
                >
                    {label}
                </Link>
            ) : (
                <span
                    aria-current="page"
                    className="text-primary font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent p-0 rounded-none transition-colors"
                >
                    {label}
                </span>
            )}

            {!isCurrent && (
                <Slash
                    aria-hidden="true"
                    className="w-4 h-4 text-white"
                />
            )}
        </li>
    )
}

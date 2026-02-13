import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from '@/components/ui/navigation-menu'

interface HeaderNavProps {
    isScrolled?: boolean
}

// Helper function to convert service title to slug for hash links
function titleToSlug(title: string): string {
    return title
        .trim()
        .toLowerCase()
        .replace(/&/g, 'and')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

// Services data - matches the services from ServicesSection
const services = [
    {
        title: 'Free Business Audit Report ',
        href: '/services#free-business-audit-report',
    },
    {
        title: 'Free Growth Checklist',
        href: '/services#free-growth-checklist',
    },
    {
        title: 'Free Custom 90 Day Growth Plan',
        href: '/services#free-custom-90-day-growth-plan',
    },
    {
        title: 'Rate Maximization & Negotiation',
        href: '/services#rate-maximization-and-negotiation',
    },
    {
        title: 'Operational Growth Strategy',
        href: '/services#operational-growth-strategy',
    },
    {
        title: 'Comprehensive Trip Planning',
        href: '/services#comprehensive-trip-planning',
    },
].map(service => ({
    ...service,
    href: `/services#${titleToSlug(service.title)}`
}))

export default function HeaderNav({ isScrolled = false }: HeaderNavProps) {
    const navItems = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About',
            href: '/about',
        },
        {
            label: 'Services',
            href: '/services',
            hasSubmenu: true,
        },
        {
            label: 'Blog',
            href: '/blog',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ]

    const textColorClass = isScrolled
        ? '!text-gray-900 hover:!text-gray-700'
        : '!text-white hover:!text-white focus:!text-white'

    const openStateTextColor = isScrolled
        ? 'data-[state=open]:!text-gray-900 data-[state=open]:hover:!text-gray-700'
        : 'data-[state=open]:!text-white data-[state=open]:hover:!text-white'

    return (
        <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex gap-6">
                {navItems.map((item) => {
                    if (item.hasSubmenu) {
                        return (
                            <NavigationMenuItem key={item.href}>
                                <NavigationMenuTrigger
                                    className={`text-[.95rem] font-primary--500 tracking-widest !bg-transparent hover:!bg-transparent focus:!bg-transparent data-[active=true]:!bg-transparent data-[state=open]:!bg-transparent data-[state=open]:hover:!bg-transparent data-[state=open]:focus:!bg-transparent p-0 rounded-none transition-colors ${textColorClass} ${openStateTextColor}`}
                                >
                                    {item.label}
                                </NavigationMenuTrigger>
                                <NavigationMenuContent className={`!z-[60] transition-colors ${isScrolled ? '!bg-white !border !shadow-md' : '!bg-transparent !border-0 !shadow-none'} rounded-md overflow-hidden`}>
                                    <ul className={`grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] transition-colors ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
                                        {services.map((service) => (
                                            <li key={service.href}>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        href={service.href}
                                                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors ${isScrolled
                                                            ? 'hover:bg-gray-100 focus:bg-gray-100'
                                                            : 'hover:bg-white/10 focus:bg-white/10'
                                                            }`}
                                                    >
                                                        <div className={`text-sm font-medium leading-none ${isScrolled ? '!text-gray-900' : '!text-white'}`}>
                                                            {service.title}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )
                    }

                    return (
                        <NavigationMenuItem key={item.href}>
                            <NavigationMenuLink asChild>
                                <Link
                                    href={item.href}
                                    className={`text-[.95rem] font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary 
                                        after:transition-all after:duration-300 hover:after:w-full bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent p-0 
                                        rounded-none transition-colors 
                                        ${textColorClass}`}
                                >
                                    {item.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
            </NavigationMenuList>
        </NavigationMenu>
    )
}

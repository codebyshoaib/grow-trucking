import Link from 'next/link'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink,
} from '@/components/ui/navigation-menu'

export default function HeaderNav() {
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

    return (
        <NavigationMenu>
            <NavigationMenuList className="flex gap-6">
                {navItems.map((item) => (
                    <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={item.href}
                                className='text-lg font-primary--500 tracking-widest relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full bg-transparent hover:bg-transparent focus:bg-transparent data-[active=true]:bg-transparent p-0 rounded-none'
                            >
                                {item.label}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                ))}

            </NavigationMenuList>
        </NavigationMenu>
    )
}

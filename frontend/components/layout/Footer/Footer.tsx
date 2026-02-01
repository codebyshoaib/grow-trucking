import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Github } from 'lucide-react'
import Image from 'next/image'

const productLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Changelog', href: '#changelog' },
]

const resourcesLinks = [
    { label: 'Documentation', href: '#documentation' },
    { label: 'Tutorials', href: '#tutorials' },
    { label: 'Blog', href: '#blog' },
    { label: 'Support', href: '#support' },
]

const companyLinks = [
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
    { label: 'Partners', href: '#partners' },
]

const socialLinks = [
    { label: 'Twitter', href: '#', icon: Twitter },
    { label: 'Instagram', href: '#', icon: Instagram },
    { label: 'LinkedIn', href: '#', icon: Linkedin },
    { label: 'GitHub', href: '#', icon: Github },
]

const legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookies Settings', href: '#cookies' },
]

export default function Footer() {
    return (
        <footer className="bg-secondary text-white rounded-t-3xl">
            <div className="container mx-auto px-6 py-16 lg:py-20">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
                    {/* Left Column - Branding and Social */}
                    <div className="space-y-6">
                        {/* Logo and Company Name */}
                        <div className="flex items-center gap-3">
                            <Image
                                src="/logo.webp"
                                alt="Logo"
                                width={150}
                                height={150}
                                className="object-contain filter brightness-0 invert"
                            />
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-sm leading-relaxed max-w-md mt-4">
                            Truck Dispatch empowers teams to transform raw data into clear, compelling visuals — making insights easier to share, understand, and act on.
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon
                                return (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white hover:text-primary transition-colors"
                                        aria-label={link.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Right Column - Navigation Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
                        {/* Product Column */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white underline underline-offset-8 decoration-primary">Product</h3>

                            <ul className="space-y-3">
                                {productLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white underline underline-offset-8 decoration-primary">Resources</h3>
                            <ul className="space-y-3">
                                {resourcesLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company Column */}
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-white underline underline-offset-8 decoration-primary">Company</h3>
                            <ul className="space-y-3">
                                {companyLinks.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Copyright and Legal Links */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-white/60">
                        © 2026 Grow Trucking. All rights reserved.
                    </p>

                    {/* Legal Links */}
                    <div className="flex items-center gap-6">
                        {legalLinks.map((link, index) => (
                            <React.Fragment key={link.label}>
                                <Link
                                    href={link.href}
                                    className="text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
                                >
                                    {link.label}
                                </Link>
                                {index < legalLinks.length - 1 && (
                                    <span className="text-white/30">|</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}
